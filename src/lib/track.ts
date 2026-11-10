/**
 * Meta Pixel events (the pixel itself is loaded in app.html).
 * Only the fact that something happened is sent — never form contents or anything typed.
 * Disclosed in the privacy policy, section 13.
 */
type Fbq = (...args: unknown[]) => void;

export function trackMeta(event: 'Lead' | 'Contact' | 'PageView') {
	try {
		(window as unknown as { fbq?: Fbq }).fbq?.('track', event);
	} catch {
		// Pixel blocked or not loaded: the site carries on as normal.
	}
}

const isBookingLink = (a: HTMLAnchorElement) => /(^|\.)halaxy\.com$/.test(a.hostname) && a.pathname.startsWith('/book');

/**
 * Counts clicks on any "Book a call" link (they go to Halaxy) as a Meta "Contact" event.
 * Ordinary left-clicks wait a moment so the event can send before the browser leaves the page;
 * new-tab clicks (Ctrl/Cmd/middle click) are left alone and tracked without a delay.
 */
export function trackBookingClicks(root: Document = document) {
	const onClick = (e: MouseEvent) => {
		const a = (e.target as Element | null)?.closest?.('a[href]') as HTMLAnchorElement | null;
		if (!a || !isBookingLink(a)) return;
		trackMeta('Contact');
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
