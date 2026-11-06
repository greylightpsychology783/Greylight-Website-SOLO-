<script lang="ts">
	import Seo from '#lib/components/Seo.svelte';
	import Mark from '#lib/components/Mark.svelte';
	import Icon from '#lib/components/Icon.svelte';
	import { stuck } from '#lib/components/stuck.ts';
	import { site } from '#lib/data/site.ts';
	import '#lib/styles/service.css';

	let { data } = $props();
	const c = $derived(data.cluster);
	const heroTone = $derived(c.tone === 'blue' ? 'tone-blue' : c.tone === 'ink' ? 'tone-ink' : 'tone-terracotta');
</script>

<Seo title={c.title} description={c.intro} />

<div class="pg-service">
	<section class="page-hero page-hero--compact {heroTone}">
		<div class="container container-md">
			<div class="hero-text flow" style="--flow-space: var(--space-5);">
				<span class="hero-mark"><Mark shape={c.shape} tone={c.tone} size="lg" /></span>
				<h1>{c.title}</h1>
				<p>{c.intro}</p>
				<div class="hero-actions">
					<a class="btn primary md" href={site.bookingLink}>Book a free call <Icon name="arrow" /></a>
					<a class="btn secondary md" href="/how-i-help">All areas</a>
				</div>
			</div>
		</div>
	</section>

	{#if c.concerns.length > 1}
		<nav class="quick-nav" aria-label="Jump to concern" use:stuck>
			<div class="quick-nav-track">
				{#each c.concerns as concern (concern.id)}<a href="#{concern.id}" class="quick-nav-link">{concern.title}</a>{/each}
			</div>
		</nav>
	{/if}

	<section class="section concerns-section">
		<div class="container container-lg">
			<ul class="concerns">
				{#each c.concerns as concern (concern.id)}
					<li id={concern.id} class="concern">
						<div class="concern-head">
							<h2 class="concern-title">{concern.title}</h2>
							<p class="concern-lede">{concern.lede}</p>
							<a class="concern-text-cta" href={site.bookingLink}>Help me with {concern.title} <Icon name="arrow" /></a>
						</div>
						<div class="concern-body flow" style="--flow-space: var(--space-4);">
							<p>{concern.body}</p>
							<ul class="key-points">
								{#each concern.points as point (point)}<li>{point}</li>{/each}
							</ul>
						</div>
					</li>
				{/each}
			</ul>
			<div class="actions">
				<a class="btn primary md" href={site.bookingLink}>Book a free connection call <Icon name="arrow" /></a>
				<a class="btn secondary md" href="/fees">Fees &amp; rebates</a>
			</div>
		</div>
	</section>
</div>
