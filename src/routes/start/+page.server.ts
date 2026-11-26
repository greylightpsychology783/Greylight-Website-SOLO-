import { redirect } from '@sveltejs/kit';
import { handleEnquiry } from '#lib/server/enquiry.ts';
import type { Actions } from './$types';

// Unlisted ad landing page: rendered on request (form action) and kept out of search (see hooks.server.ts).
export const prerender = false;

export const actions: Actions = {
	default: async ({ request }) => {
		const result = await handleEnquiry(request, {
			tag: 'Landing page form',
			page: '/start',
			subjectPrefix: 'New enquiry (Meta landing page)'
		});
		// Sent: go to the thank-you page (a neutral URL, nothing from the form in it).
		if ('success' in result && result.success) redirect(303, '/thank-you');
		return result;
	}
};
