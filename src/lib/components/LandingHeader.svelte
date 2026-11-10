<script lang="ts">
	import { site } from '#lib/data/site.ts';

	/** Minimal header for ad landing pages: brand, enquiry jump link and the booking button only. */
	let scrolled = $state(false);
</script>

<svelte:window onscroll={() => (scrolled = window.scrollY > 4)} />

<header class="site-header landing-header" class:is-scrolled={scrolled}>
	<div class="container container-lg">
		<div class="nav-shell">
			<span class="brand" role="img" aria-label="Greylight Psychology"><span class="brand-logo" aria-hidden="true"></span></span>
			<div class="nav-actions">
				<a class="btn secondary sm landing-enquire" href="#enquire">Enquire</a>
				<a class="btn primary sm" href={site.bookingLink}>Book a free call</a>
			</div>
		</div>
	</div>
</header>

<style>
	@media not (min-width: 26rem) {
		.landing-enquire {
			display: none;
		}
	}
</style>
