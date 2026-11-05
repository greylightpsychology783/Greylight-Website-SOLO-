<script lang="ts">
	import { page } from '$app/state';
	import { site } from '#lib/data/site.ts';
	let { title, description }: { title: string; description: string } = $props();
	const fullTitle = $derived(title ? `${title} | ${site.name}` : `${site.name} | Melbourne In-Person & Telehealth Psychology`);
</script>

<svelte:head>
	<title>{fullTitle}</title>
	<meta name="description" content={description} />
	<link rel="canonical" href="{site.url}{page.url.pathname === '/' ? '' : page.url.pathname}" />
	<meta property="og:title" content={fullTitle} />
	<meta property="og:description" content={description} />
	<meta property="og:type" content="website" />
	<meta property="og:image" content="{site.url}/images/jake-ciminelli.jpg" />
</svelte:head>
