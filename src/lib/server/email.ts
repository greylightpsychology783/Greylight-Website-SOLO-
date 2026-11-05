import { RESEND_API_KEY, CONTACT_FROM, CONTACT_TO } from '$app/env/private';
import { Resend } from 'resend';

export const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export const escapeHtml = (s: string) =>
	s.replace(/[&<>"']/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' })[c]!);

export interface Attachment {
	filename: string;
	content: Buffer;
	contentType?: string;
}

/** Sends a message to the practice inbox. Returns false if email isn't configured or sending fails. */
export async function sendToPractice(opts: {
	subject: string;
	replyTo?: string;
	text: string;
	html: string;
	attachments?: Attachment[];
	tag: string;
}): Promise<boolean> {
	if (!RESEND_API_KEY || !CONTACT_FROM) {
		console.error(`${opts.tag}: RESEND_API_KEY or CONTACT_FROM is not set`);
		return false;
	}
	const resend = new Resend(RESEND_API_KEY);
	const { error } = await resend.emails.send({
		from: CONTACT_FROM,
		to: CONTACT_TO,
		replyTo: opts.replyTo,
		subject: opts.subject,
		text: opts.text,
		html: opts.html,
		attachments: opts.attachments
	});
	if (error) {
		console.error(`${opts.tag}: Resend error`, error);
		return false;
	}
	return true;
}
