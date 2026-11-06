<script lang="ts">
	import Seo from '#lib/components/Seo.svelte';
	import Mark from '#lib/components/Mark.svelte';
	import Icon from '#lib/components/Icon.svelte';
	import { stuck } from '#lib/components/stuck.ts';
	import { clusters, clusterHref } from '#lib/data/services.ts';
	import { site } from '#lib/data/site.ts';
	import '#lib/styles/services.css';
</script>

<Seo
	title="How I Help"
	description="Therapy for anxiety, OCD and Pure-O, trauma, depression, relationships, self-esteem, and stress and life transitions. In person in Melbourne or via telehealth Australia-wide."
/>

<div class="pg-services">
	<section class="page-hero page-hero--compact">
		<div class="container container-md">
			<div class="hero-text flow" style="--flow-space: var(--space-5);">
				<p class="eyebrow">How I Help</p>
				<h1>Personalised support across the challenges I work with most.</h1>
				<p>
					I group my work into seven areas so you can see, at a glance, where what you're carrying
					fits. Sessions are available in person in Melbourne or via telehealth anywhere in Australia.
				</p>
				<div class="hero-actions">
					<a class="btn primary md" href={site.bookingLink}>Book a free call <Icon name="arrow" /></a>
					<a class="btn secondary md" href="/fees">Fees &amp; availability</a>
				</div>
			</div>
		</div>
	</section>

	<nav class="quick-nav quick-nav--clusters" aria-label="Jump to area" use:stuck>
		<div class="quick-nav-track">
			{#each clusters as c (c.slug)}
				<a href="#{c.slug}" class="quick-nav-link">
					<span class="quick-nav-shape" aria-hidden="true"><Mark shape={c.shape} tone={c.tone} size="lg" /></span>
					<span class="quick-nav-label">{c.label}</span>
				</a>
			{/each}
		</div>
	</nav>

	{#each clusters as c, i (c.slug)}
		<section class="section section-bg-{i % 2 ? 'light' : 'white'}">
			<div class="container container-lg">
				<div id={c.slug} class="scroll-target"></div>
				<article class="cluster-feature" class:reversed={i % 2 === 1}>
					<div class="feature-image-wrap">
						<img src={c.image} alt={c.imageAlt} class="feature-image" loading="lazy" />
					</div>
					<div class="feature-content flow" style="--flow-space: var(--space-4);">
						<Mark shape={c.shape} tone={c.tone} />
						<h2 class="feature-title"><span>{c.title}</span></h2>
						<p class="feature-summary">{c.summary}</p>
						<p>{c.intro}</p>
						<ul class="key-points">
							{#each c.keyPoints as point (point)}<li>{point}</li>{/each}
						</ul>
						<p class="feature-concerns">
							<span class="feature-concerns-label">Concerns covered:</span>
							{c.concerns.map((x) => x.title).join(', ')}
						</p>
						<div class="feature-actions">
							<a class="btn primary md" href={clusterHref(c)}>Explore {c.label.toLowerCase()} support <Icon name="arrow" /></a>
							<a class="btn secondary md" href={site.bookingLink}>Get started</a>
						</div>
					</div>
				</article>
			</div>
		</section>
	{/each}
</div>
