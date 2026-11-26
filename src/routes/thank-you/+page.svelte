<script lang="ts">
	import { onMount } from 'svelte';
	import Seo from '#lib/components/Seo.svelte';
	import Icon from '#lib/components/Icon.svelte';
	import { site } from '#lib/data/site.ts';
	import { trackLeadIfPending } from '#lib/track.ts';
	import '#lib/styles/contact.css';
	import '#lib/styles/landing.css';

	// Count the Meta "Lead" here, once, and only straight after a real enquiry (event name only).
	onMount(trackLeadIfPending);

	const year = new Date().getFullYear();
</script>

<Seo
	title=""
	fullTitle="Thanks for your enquiry | Greylight Psychology"
	description="Your enquiry has been sent to Greylight Psychology."
	noindex
/>

<div class="pg-landing">
	<section class="lp-section lp-thanks pg-contact" aria-labelledby="ty-title">
		<div class="container container-md flow">
			<p class="eyebrow">Enquiry sent</p>
			<h1 id="ty-title">Thank you. Your message is on its way.</h1>
			<p class="lp-thanks-lede">
				Reaching out can be a big step, and I'm glad you did. I'll be in touch within 1 business day.
			</p>
			<div class="lp-thanks-book surface-card flow">
				<h2>Prefer to talk sooner?</h2>
				<p>
					Book a free, no-obligation 15-minute call at a time that suits you. We'll chat about what's going on
					and whether we're a good fit.
				</p>
				<div class="lp-actions">
					<a class="btn primary md" href={site.bookingLink}>Book a free 15-min call <Icon name="arrow" /></a>
				</div>
			</div>
			<div id="crisis-support" class="surface-card notice flow">
				<h2>Emergency and crisis support</h2>
				<p>
					Enquiries aren't monitored for urgent risk situations. If you or someone else is in immediate danger,
					call <strong>000</strong> now or go to your nearest emergency department.
				</p>
				<p>For 24-hour crisis support, contact Lifeline on <strong>13 11 14</strong>.</p>
			</div>
		</div>
	</section>

	<footer class="lp-footer">
		<div class="container container-lg lp-footer-inner">
			<p>© {year} Greylight Psychology · Jake Ciminelli, Psychologist</p>
			<p>
				In an emergency call <strong>000</strong>. Lifeline <strong>13 11 14</strong>. ·
				<a href="/privacy">Privacy policy</a> · <a href="mailto:{site.email}">{site.email}</a>
			</p>
		</div>
	</footer>
</div>
