import { fail } from '@sveltejs/kit';
import { EMAIL_RE, escapeHtml as escape, sendToPractice } from '#lib/server/email.ts';
import type { Actions } from './$types';

export const prerender = false;

export const actions: Actions = {
	default: async ({ request }) => {
		const data = await request.formData();
		const name = String(data.get('name') ?? '').trim();
		const email = String(data.get('email') ?? '').trim();
		const message = String(data.get('message') ?? '').trim();
		const values = { name, email, message };

		const errors: Partial<Record<keyof typeof values, string>> = {};
		if (!name) errors.name = 'Please enter your name.';
		if (!email) errors.email = 'Please enter your email address.';
		else if (!EMAIL_RE.test(email)) errors.email = 'Please enter a valid email address.';
		if (!message) errors.message = 'Please add a short note before the call.';
		if (name.length > 200 || email.length > 320 || message.length > 5000)
			errors.message = 'Your message is a little long. Please shorten it and try again.';
		if (Object.keys(errors).length) return fail(400, { values, errors });

		const sent = await sendToPractice({
			tag: 'Contact form',
			replyTo: email,
			subject: `New website enquiry from ${name}`,
			text: `Name: ${name}\nEmail: ${email}\n\n${message}`,
			html: `<p><strong>Name:</strong> ${escape(name)}<br><strong>Email:</strong> ${escape(email)}</p><p>${escape(message).replace(/\n/g, '<br>')}</p>`
		});
		if (!sent) return fail(502, { values, errors: {}, formError: true });
		return { success: true };
	}
};
