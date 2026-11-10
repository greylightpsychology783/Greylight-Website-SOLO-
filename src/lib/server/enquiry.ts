import { fail } from '@sveltejs/kit';
import { EMAIL_RE, escapeHtml as escape, sendToPractice } from './email.ts';
import { readCampaign, campaignLine, campaignHtml } from './utm.ts';

/**
 * Shared handler for the enquiry form (contact page and landing page).
 * Validates, emails the practice with the campaign line, and returns the form state.
 */
export async function handleEnquiry(request: Request, opts: { tag: string; page: string; subjectPrefix?: string }) {
	const data = await request.formData();
	const name = String(data.get('name') ?? '').trim();
	const email = String(data.get('email') ?? '').trim();
	const message = String(data.get('message') ?? '').trim();
	const values = { name, email, message };

	const errors: Partial<Record<keyof typeof values, string>> = {};
	if (!name) errors.name = 'Please enter your name.';
	if (!email) errors.email = 'Please enter your email address.';
	else if (!EMAIL_RE.test(email)) errors.email = 'Please enter a valid email address.';
	if (!message) errors.message = 'Please add a short message.';
	if (name.length > 200 || email.length > 320 || message.length > 5000)
		errors.message = 'Your message is a little long. Please shorten it and try again.';
	if (Object.keys(errors).length) return fail(400, { values, errors });

	const campaign = readCampaign(data, opts.page);
	const sent = await sendToPractice({
		tag: opts.tag,
		replyTo: email,
		subject: `${opts.subjectPrefix ?? 'New website enquiry'} from ${name}`,
		text: `Name: ${name}\nEmail: ${email}\n\n${message}\n\n---\n${campaignLine(campaign)}`,
		html:
			`<p><strong>Name:</strong> ${escape(name)}<br><strong>Email:</strong> ${escape(email)}</p>` +
			`<p>${escape(message).replace(/\n/g, '<br>')}</p>` +
			campaignHtml(campaign)
	});
	if (!sent) return fail(502, { values, errors: {}, formError: true });
	return { success: true as const };
}
