import { handleEnquiry } from '#lib/server/enquiry.ts';
import type { Actions } from './$types';

export const prerender = false;

export const actions: Actions = {
	default: ({ request }) => handleEnquiry(request, { tag: 'Contact form', page: '/contact' })
};
