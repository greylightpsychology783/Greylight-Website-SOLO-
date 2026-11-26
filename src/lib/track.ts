/**
 * Meta Pixel events (the pixel itself is loaded in app.html).
 * Only the event name is sent: never parameters, form contents, or anything typed.
 * Disclosed in the privacy policy, section 13.
 */
type Fbq = (...args: unknown[]) => void;
type MetaEvent = 'PageView' | 'Lead' | 'Schedule' | 'Contact';

export function trackMeta(event: MetaEvent) {
	try {
		(window as unknown as { fbq?: Fbq }).fbq?.('track', event);
		if (import.meta.env.DEV) console.info(`[meta pixel] ${event}`);
	} catch {
		// Pixel blocked or not loaded: the site carries on as normal.
	}
}

/** Set just before the enquiry form redirects to /thank-you, so the Lead counts once per real enquiry. */
const LEAD_FLAG = 'glp_lead_pending';

export function markLeadPending() {
	try {
		sessionStorage.setItem(LEAD_FLAG, '1');
	} catch {
		// Storage blocked: no Lead event, nothing else changes.
	}
}

/** Fires Lead once if an enquiry was just sent in this tab (not on refresh or a direct visit). */
export function trackLeadIfPending() {
	try {
		if (sessionStorage.getItem(LEAD_FLAG) !== '1') return;
		sessionStorage.removeItem(LEAD_FLAG);
	} catch {
		return;
	}
	trackMeta('Lead');
}

const isBookingLink = (a: HTMLAnchorElement) => /(^|\.)halaxy\.com$/.test(a.hostname) && a.pathname.startsWith('/book');
const isPhoneLink = (a: HTMLAnchorElement) => a.protocol === 'tel:';

/**
 * Counts clicks on booking links (they go to Halaxy) as "Schedule" and phone links as "Contact".
 * Ordinary left-clicks on booking links wait a moment so the event can send before the browser
 * leaves the page; new-tab clicks (Ctrl/Cmd/middle click) are left alone and tracked without a delay.
 */
export function trackClicks(root: Document = document) {
	const onClick = (e: MouseEvent) => {
		const a = (e.target as Element | null)?.closest?.('a[href]') as HTMLAnchorElement | null;
		if (!a) return;
		if (isPhoneLink(a)) {
			if (e.type === 'click') trackMeta('Contact');
			return;
		}
		if (!isBookingLink(a)) return;
		trackMeta('Schedule');
		const newTab = e.button !== 0 || e.metaKey || e.ctrlKey || e.shiftKey || e.altKey || a.target === '_blank';
		if (newTab || e.defaultPrevented) return;
		e.preventDefault();
		setTimeout(() => (location.href = a.href), 250);
	};
	root.addEventListener('click', onClick);
	root.addEventListener('auxclick', onClick);
	return () => {
		root.removeEventListener('click', onClick);
		root.removeEventListener('auxclick', onClick);
	};
}
