/**
 * Campaign tags (UTMs) from ad links, kept for the visit so enquiries can say which ad
 * brought someone in. Browser-only and stored in sessionStorage (this tab, this visit).
 * No third-party tracking: the values only travel with an enquiry the visitor chooses to send.
 */
export const UTM_KEYS = ['utm_source', 'utm_medium', 'utm_campaign', 'utm_content'] as const;
export type UtmKey = (typeof UTM_KEYS)[number];
export type Utm = Record<UtmKey, string>;

const STORAGE_KEY = 'glp_utm';
const MAX = 200;

export const emptyUtm = (): Utm => ({ utm_source: 'direct', utm_medium: '', utm_campaign: '', utm_content: '' });

/** Save any UTMs in the current URL. A new tagged link replaces the previous tags. */
export function captureUtm(url: URL = new URL(location.href)) {
	const found = UTM_KEYS.filter((k) => url.searchParams.get(k));
	if (!found.length) return;
	const utm = emptyUtm();
	for (const k of UTM_KEYS) utm[k] = (url.searchParams.get(k) ?? '').trim().slice(0, MAX);
	if (!utm.utm_source) utm.utm_source = 'unknown';
	try {
		sessionStorage.setItem(STORAGE_KEY, JSON.stringify(utm));
	} catch {
		// Storage blocked (private mode, settings): enquiries fall back to "direct".
	}
}

/** The stored UTMs for this visit, or source "direct" when none were captured. */
export function getUtm(): Utm {
	try {
		const raw = sessionStorage.getItem(STORAGE_KEY);
		if (raw) {
			const parsed = JSON.parse(raw) as Partial<Utm>;
			const utm = emptyUtm();
			for (const k of UTM_KEYS) if (typeof parsed[k] === 'string') utm[k] = parsed[k]!.slice(0, MAX);
			return utm;
		}
	} catch {
		// Fall through to the default.
	}
	return emptyUtm();
}
