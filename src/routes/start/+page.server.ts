import { handleEnquiry } from '#lib/server/enquiry.ts';
import type { Actions } from './$types';

// Unlisted ad landing page: rendered on request (form action) and kept out of search (see hooks.server.ts).
export const prerender = false;

export const actions: Actions = {
	default: ({ request }) =>
		handleEnquiry(request, { tag: 'Landing page form', page: '/start', subjectPrefix: 'New enquiry (Meta landing page)' })
};
