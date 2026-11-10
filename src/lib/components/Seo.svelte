<script lang="ts">
	import { page } from '$app/state';
	import { site } from '#lib/data/site.ts';
	let {
		title,
		description,
		noindex = false,
		fullTitle: titleOverride = undefined
	}: { title: string; description: string; noindex?: boolean; fullTitle?: string } = $props();
	const fullTitle = $derived(
		titleOverride ?? (title ? `${title} | ${site.name}` : `${site.name} | Melbourne In-Person & Telehealth Psychology`)
	);
</script>

<svelte:head>
	<title>{fullTitle}</title>
	<meta name="description" content={description} />
	{#if noindex}<meta name="robots" content="noindex, nofollow" />{/if}
	<link rel="canonical" href="{site.url}{page.url.pathname === '/' ? '' : page.url.pathname}" />
	<meta property="og:title" content={fullTitle} />
	<meta property="og:description" content={description} />
	<meta property="og:type" content="website" />
	<meta property="og:image" content="{site.url}/images/jake-ciminelli.jpg" />
</svelte:head>
