<script lang="ts">
	import { clusters, clusterGroups, clusterHref } from '#lib/data/services.ts';
	import Mark from './Mark.svelte';
	import Icon from './Icon.svelte';
	import { site } from '#lib/data/site.ts';
	let { idPrefix = 'mega' }: { idPrefix?: string } = $props();
</script>

<div class="mega-inner">
	<div class="mega-groups">
		{#each clusterGroups as group (group.id)}
			<section class="mega-group" aria-labelledby="{idPrefix}-group-{group.id}">
				<h2 id="{idPrefix}-group-{group.id}" class="mega-group-label">{group.label}</h2>
				<div class="mega-group-list">
					{#each clusters.filter((c) => c.group === group.id) as c (c.slug)}
						<section class="mega-cluster" aria-labelledby="{idPrefix}-cluster-{c.slug}">
							<div class="mega-cluster-top">
								<span class="mega-cluster-mark" aria-hidden="true"><Mark shape={c.shape} tone={c.tone} /></span>
								<div class="mega-cluster-copy">
									<a id="{idPrefix}-cluster-{c.slug}" href={clusterHref(c)} class="mega-cluster-titlelink">{c.title}</a>
								</div>
							</div>
							{#if c.concerns.length > 1}
								<p class="mega-concerns">
									<span class="visually-hidden">Concerns in this area:</span>
									{#each c.concerns as concern, i (concern.id)}
										<span class="mega-concern-item"
											><a href={clusterHref(c, concern.id)} class="mega-concern-link">{concern.title}</a
											>{#if i < c.concerns.length - 1}<span class="mega-concern-sep" aria-hidden="true">,</span>{/if}</span
										>
									{/each}
								</p>
							{/if}
						</section>
					{/each}
				</div>
			</section>
		{/each}
	</div>
	<div class="mega-cta" aria-label="Get started">
		<p class="mega-cta-hint">Not sure where to start? Book a free 15-minute connection call and we can talk it through.</p>
		<div class="mega-cta-actions">
			<a class="btn primary sm" href={site.bookingLink}>Book a free call <Icon name="arrow" /></a>
		</div>
	</div>
</div>
