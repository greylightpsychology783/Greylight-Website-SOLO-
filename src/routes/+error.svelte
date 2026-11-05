<script lang="ts">
	import { page } from '$app/state';
	import Seo from '#lib/components/Seo.svelte';
	import { site } from '#lib/data/site.ts';

	const notFound = $derived(page.status === 404);
</script>

<Seo
	title={notFound ? 'Page not found' : 'Something went wrong'}
	description="Greylight Psychology: in-person psychology in Melbourne and telehealth Australia-wide."
/>

<section class="page-hero">
	<div class="container container-md">
		<div class="hero-text flow" style="--flow-space: var(--space-5);">
			<p class="eyebrow">{page.status}</p>
			<h1>{notFound ? "This page doesn't exist." : 'Something went wrong.'}</h1>
			<p>
				{#if notFound}
					The page may have moved when the site was updated. Try one of these instead, or email
					<a href="mailto:{site.email}">{site.email}</a>.
				{:else}
					Please try again in a moment, or email <a href="mailto:{site.email}">{site.email}</a>.
				{/if}
			</p>
			<div class="hero-actions">
				<a class="btn primary md" href="/">Home</a>
				<a class="btn secondary md" href="/how-i-help">How I help</a>
				<a class="btn secondary md" href="/contact">Contact</a>
			</div>
		</div>
	</div>
</section>
