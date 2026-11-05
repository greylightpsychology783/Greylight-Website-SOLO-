import { redirect } from '@sveltejs/kit';
import type { Handle } from '@sveltejs/kit/hooks';

/**
 * Permanent redirects from the old Squarespace site, so saved links, Google results
 * and GP bookmarks keep working. Paths that exist on both sites (/about, /books, /fees)
 * need no entry.
 */
const legacy: Record<string, string> = {
	'/booknow': '/contact',
	'/home': '/',
	'/cart': '/',
	'/s/greylight-psychology-2025-privacy-policy.pdf': '/privacy'
};

export const handle: Handle = async ({ event, resolve }) => {
	const path = event.url.pathname.replace(/\/+$/, '').toLowerCase();
	const target = legacy[path];
	if (target) redirect(301, target);
	return resolve(event);
};
