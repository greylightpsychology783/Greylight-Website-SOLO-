<script lang="ts">
	import { site } from '#lib/data/site.ts';
	import { clusters, clusterHref } from '#lib/data/services.ts';
	const year = new Date().getFullYear();
</script>

<footer class="site-footer">
	<div class="container container-lg">
		<div class="footer-main">
			<div class="footer-brand">
				<a class="footer-logo-link" href="/" aria-label="Greylight Psychology home"><span class="footer-logo" aria-hidden="true"></span></a>
				<h2 class="footer-cta-title">Start with a free <br /> 15-minute connection call.</h2>
				<a class="btn primary sm" href={site.bookingLink}
					>Book a call <svg class="right-arrow" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true" focusable="false"><path d="M5 12h14"></path><path d="m13 6 6 6-6 6"></path></svg></a
				>
				<a class="footer-email" href="mailto:{site.email}">{site.email}</a>
			</div>
			<div class="footer-col-group">
				<div class="footer-col-wrapper">
					<nav class="footer-col" aria-label="Site">
						<h3 class="footer-heading">Explore</h3>
						<ul class="footer-list">
							<li><a href="/about">About Jake</a></li>
							<li><a href="/fees">Pricing</a></li>
							<li><a href="/books">Books</a></li>
							<li><a href="/contact">Contact</a></li>
							<li><a href={site.referralForm}>Refer a patient</a></li>
						</ul>
						<h3 class="footer-heading footer-heading--sub">Locations</h3>
						<ul class="footer-list">
							{#each site.locations as loc (loc)}<li><a href="/fees#availability">{loc}</a></li>{/each}
							<li><a href="/fees#availability">Telehealth Australia-wide</a></li>
						</ul>
					</nav>
				</div>
				<div class="footer-col-wrapper">
					<nav class="footer-col" aria-label="How I help">
						<h3 class="footer-heading">How I help</h3>
						<ul class="footer-list">
							<li><a href="/how-i-help">All areas</a></li>
							{#each clusters as c (c.slug)}<li><a href={clusterHref(c)}>{c.label}</a></li>{/each}
						</ul>
					</nav>
				</div>
				<div class="footer-col-wrapper">
					<nav class="footer-col" aria-label="Legal and safety">
						<h3 class="footer-heading">Important</h3>
						<ul class="footer-list">
							<li><a href="/privacy">Privacy Policy</a></li>
							<li><a href="/fees#cancellation">Cancellation Policy</a></li>
							<li><a href="/contact#crisis-support">Emergency &amp; crisis support</a></li>
						</ul>
					</nav>
				</div>
			</div>
		</div>
		<p class="fine-print">© {year} Greylight Psychology. All rights reserved.</p>
	</div>
</footer>
