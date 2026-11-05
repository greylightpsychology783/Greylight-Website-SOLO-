import { fail } from '@sveltejs/kit';
import { EMAIL_RE, escapeHtml as escape, sendToPractice, type Attachment } from '#lib/server/email.ts';
import { referralLimits } from '#lib/data/site.ts';
import type { Actions } from './$types';

export const prerender = false;

const ALLOWED: Record<string, string> = {
	pdf: 'application/pdf',
	doc: 'application/msword',
	docx: 'application/vnd.openxmlformats-officedocument.wordprocessingml.document'
};

type Field =
	| 'referrerName'
	| 'referrerEmail'
	| 'referrerPractice'
	| 'patientFirstName'
	| 'patientLastName'
	| 'details'
	| 'documents'
	| 'consent';

export const actions: Actions = {
	default: async ({ request }) => {
		let data: FormData;
		try {
			data = await request.formData();
		} catch {
			return fail(413, { values: {}, errors: { documents: 'Those files are too large to upload. Please email them instead.' } });
		}
		const get = (k: string) => String(data.get(k) ?? '').trim();
		const values = {
			referrerName: get('referrerName'),
			referrerEmail: get('referrerEmail'),
			referrerPractice: get('referrerPractice'),
			patientFirstName: get('patientFirstName'),
			patientLastName: get('patientLastName'),
			details: get('details')
		};
		const consent = data.get('consent') === 'on';
		const files = data.getAll('documents').filter((f): f is File => f instanceof File && f.size > 0);

		const errors: Partial<Record<Field, string>> = {};
		if (!values.referrerName) errors.referrerName = 'Please enter your name.';
		if (!values.referrerEmail) errors.referrerEmail = 'Please enter your email address.';
		else if (!EMAIL_RE.test(values.referrerEmail)) errors.referrerEmail = 'Please enter a valid email address.';
		if (!values.patientFirstName) errors.patientFirstName = "Please enter the patient's first name.";
		if (!values.patientLastName) errors.patientLastName = "Please enter the patient's last name.";
		if (values.details.length > 5000) errors.details = 'Please keep additional details under 5,000 characters.';
		if (Object.values(values).some((v) => v.length > 5000)) errors.details ??= 'One of the fields is too long.';

		if (files.length > referralLimits.maxFiles) {
			errors.documents = `Please upload no more than ${referralLimits.maxFiles} files.`;
		} else if (files.reduce((n, f) => n + f.size, 0) > referralLimits.maxTotalBytes) {
			errors.documents = `Files must total ${referralLimits.maxTotalLabel} or less. Larger documents can be emailed instead.`;
		} else if (files.some((f) => !ALLOWED[f.name.split('.').pop()?.toLowerCase() ?? ''])) {
			errors.documents = 'Please upload PDF, DOC or DOCX files only.';
		}
		if (!consent) errors.consent = 'Please confirm you have patient consent to share this information.';
		if (Object.keys(errors).length) return fail(400, { values, errors });

		const attachments: Attachment[] = await Promise.all(
			files.map(async (f) => {
				const ext = f.name.split('.').pop()!.toLowerCase();
				return {
					filename: f.name.replace(/[^\w.\- ()]/g, '_').slice(0, 120),
					content: Buffer.from(await f.arrayBuffer()),
					contentType: ALLOWED[ext]
				};
			})
		);

		const patient = `${values.patientFirstName} ${values.patientLastName}`;
		const rows: [string, string][] = [
			['Referrer', values.referrerName],
			['Referrer email', values.referrerEmail],
			['Practice / role', values.referrerPractice || '—'],
			['Patient', patient],
			['Attachments', attachments.length ? attachments.map((a) => a.filename).join(', ') : 'None'],
			['Patient consent confirmed', 'Yes']
		];
		const sent = await sendToPractice({
			tag: 'Referral form',
			replyTo: values.referrerEmail,
			subject: `New patient referral: ${patient} (from ${values.referrerName})`,
			text: rows.map(([k, v]) => `${k}: ${v}`).join('\n') + `\n\nAdditional details:\n${values.details || '—'}`,
			html:
				`<table cellpadding="4">${rows.map(([k, v]) => `<tr><td><strong>${escape(k)}</strong></td><td>${escape(v)}</td></tr>`).join('')}</table>` +
				`<p><strong>Additional details:</strong><br>${values.details ? escape(values.details).replace(/\n/g, '<br>') : '—'}</p>`,
			attachments
		});
		if (!sent) return fail(502, { values, errors: {}, formError: true });
		return { success: true };
	}
};
