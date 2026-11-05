import { defineEnvVars } from '@sveltejs/kit/env';

const optional = (value: string | undefined) => value || undefined;

export const variables = defineEnvVars({
	RESEND_API_KEY: { schema: optional, description: 'Resend API key used by the contact form' },
	CONTACT_FROM: {
		schema: optional,
		description: 'Verified Resend sender, e.g. "Greylight Website <website@greylightpsychology.com.au>"'
	},
	CONTACT_TO: {
		schema: (value) => value || 'enquiries@greylightpsychology.com.au',
		description: 'Inbox that receives contact form enquiries'
	}
});
