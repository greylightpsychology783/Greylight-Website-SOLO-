<script lang="ts">
	import '../app.css';
	import { onMount } from 'svelte';
	import { afterNavigate } from '$app/navigation';
	import { page } from '$app/state';
	import Header from '#lib/components/Header.svelte';
	import Footer from '#lib/components/Footer.svelte';
	import LandingHeader from '#lib/components/LandingHeader.svelte';
	import { captureUtm } from '#lib/utm.ts';
	let { children } = $props();

	/** Ad landing pages get a minimal header and no site navigation or footer. */
	const landing = $derived(page.route.id?.startsWith('/start') ?? false);

	// Remember campaign tags (UTMs) from ad links for this visit, on any page.
	onMount(() => captureUtm());
	afterNavigate(({ from, to }) => {
		if (to?.url) captureUtm(to.url);
		// The Meta Pixel in app.html counts the first page view. The site switches pages
		// without a full reload, so count each later page change here.
		if (from && from.url.pathname !== to?.url.pathname) {
			(window as unknown as { fbq?: (...args: unknown[]) => void }).fbq?.('track', 'PageView');
		}
	});
</script>

<svelte:head>
	{@html `<script type="application/ld+json">${JSON.stringify({
		'@context': 'https://schema.org',
		'@type': 'Psychologist',
		name: 'Greylight Psychology',
		url: 'https://www.greylightpsychology.com.au',
		email: 'enquiries@greylightpsychology.com.au',
		areaServed: 'Australia',
		employee: { '@type': 'Person', name: 'Jake Ciminelli', jobTitle: 'Principal Clinical Psychologist' },
		address: ['Camberwell', 'Richmond', 'Malvern'].map((l) => ({ '@type': 'PostalAddress', addressLocality: l, addressRegion: 'VIC', addressCountry: 'AU' }))
	})}</script>`}
</svelte:head>

<a class="visually-hidden" href="#main-content">Skip to content</a>
{#if landing}
	<LandingHeader />
{:else}
	<Header />
{/if}
<main id="main-content">
	{@render children()}
</main>
{#if !landing}
	<Footer />
{/if}
