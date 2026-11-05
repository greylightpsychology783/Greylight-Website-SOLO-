<script lang="ts">
	import '../app.css';
	import Header from '#lib/components/Header.svelte';
	import Footer from '#lib/components/Footer.svelte';
	let { children } = $props();
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
<Header />
<main id="main-content">
	{@render children()}
</main>
<Footer />
