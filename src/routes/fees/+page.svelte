<script lang="ts">
	import Seo from '#lib/components/Seo.svelte';
	import Icon from '#lib/components/Icon.svelte';
	import { fees, site } from '#lib/data/site.ts';
	import '#lib/styles/fees.css';
</script>

<Seo
	title="Fees & Availability"
	description="Clinical psychology sessions are {fees.sessionFee}, or {fees.outOfPocket} out of pocket with a Mental Health Treatment Plan. In person in Camberwell, Richmond and Malvern, or telehealth Australia-wide."
/>

<div class="pg-fees">
	<section class="fees-hero">
		<div class="container container-lg">
			<div class="hero-grid">
				<div class="hero-copy flow" style="--flow-space: var(--space-5);">
					<p class="eyebrow">Fees &amp; availability</p>
					<h1 class="hero-title">Transparent fees. Genuine rebates. No surprises.</h1>
					<p class="lede">
						Every session is costed up-front so you always know what you'll pay before you book. Most
						people see me with a Mental Health Treatment Plan and the Medicare rebate; you're also
						welcome to attend privately, or through an approved <a href="#worksafe-tac">WorkSafe or TAC claim</a>.
					</p>
					<div class="hero-actions">
						<a class="btn primary md" href="/contact">Enquire now <Icon name="arrow" /></a>
						<a class="btn secondary md" href="#availability">See availability</a>
					</div>
				</div>
				<aside class="hero-card surface-card flow" style="--flow-space: var(--space-5);" aria-label="Fee summary">
					<p class="label-eyebrow">With a Mental Health Treatment Plan</p>
					<div class="hero-card-price">
						<span class="display-number">{fees.outOfPocket}</span>
						<span class="unit">/ {fees.sessionLength} session</span>
					</div>
					<p class="note-muted fee-note">
						After the {fees.rebate} Medicare rebate. The full session fee is <strong>{fees.sessionFee}</strong>,
						well below the APS-recommended rate of {fees.apsRate}.
					</p>
					<ul class="hero-card-meta">
						<li><Icon name="check" /> Rebate processed immediately</li>
						<li><Icon name="check" /> Up to 10 sessions per calendar year</li>
						<li><Icon name="check" /> Telehealth or in-person</li>
					</ul>
				</aside>
			</div>
		</div>
	</section>

	<section class="section fees-section">
		<div class="container container-lg">
			<div class="fees-heading">
				<header class="section-header flow" style="--flow-space: var(--space-4);">
					<p class="eyebrow">Session pricing</p>
					<h2 class="section-title text-wrap-balance">What you'll actually pay per session.</h2>
					<p class="box-aligned">Fees apply to both initial and subsequent appointments.</p>
				</header>
			</div>
			<div class="fees-table surface-card">
				<div class="fee-row">
					<div class="fee-row-main">
						<span class="fee-row-label">Standard session</span>
						<span class="note-muted">50-minute individual consultation with a clinical psychologist</span>
					</div>
					<div class="fee-row-price">
						<span class="display-number display-number--sm">{fees.sessionFee}</span>
						<span class="note-muted-sm">Well under the APS-recommended {fees.apsRate} per 46–60 minute session</span>
					</div>
				</div>
				<hr class="fee-divider" />
				<div class="fee-row fee-row--highlight">
					<div class="fee-row-main">
						<span class="fee-row-label">With a Mental Health Treatment Plan</span>
						<span class="note-muted">After the Medicare rebate of {fees.rebate} (as of {fees.rebateFrom})</span>
					</div>
					<div class="fee-row-price">
						<span class="display-number display-number--sm">{fees.outOfPocket}</span>
						<span class="note-muted-sm">Rebate returned to your nominated bank account after each session</span>
					</div>
				</div>
				<hr class="fee-divider" />
				<div class="fee-row">
					<div class="fee-row-main">
						<span class="fee-row-label">Connection call</span>
						<span class="note-muted">Free, confidential 15-minute chat about your needs and goals</span>
					</div>
					<div class="fee-row-price">
						<span class="display-number display-number--sm">Free</span>
						<span class="note-muted-sm">No pressure and no commitment</span>
					</div>
				</div>
			</div>
			<p class="note-muted fees-footnote box-aligned">
				A Mental Health Treatment Plan isn't required. You're welcome to attend privately at the full session fee.
			</p>
		</div>
	</section>

	<section id="availability" class="section schemes-section">
		<div class="container container-lg">
			<div class="schemes-header">
				<header class="section-header schemes-section-header flow" style="--flow-space: var(--space-4);">
					<p class="eyebrow">Availability</p>
					<h2 class="section-title text-wrap-balance">In person in Melbourne, or telehealth anywhere in Australia.</h2>
					<p>
						Greylight Psychology is an in-person or telehealth clinic for Melburnians, and telehealth for
						clients anywhere in Australia.
					</p>
				</header>
			</div>
			<ul class="scheme-grid">
				<li class="scheme-card">
					<header class="scheme-card-header">
						<span class="scheme-icon"><Icon name="clock" size={28} /></span>
						<span class="label-eyebrow label-eyebrow--pill-bordered">Session times</span>
					</header>
					<div class="scheme-card-intro">
						<h3 class="scheme-name">Weekdays</h3>
						<p class="scheme-summary">Broad availability throughout the work week.</p>
					</div>
					<div class="scheme-rebate">
						<span class="label-eyebrow">At a glance</span>
						<p class="scheme-rebate-value">No wait times for new telehealth clients.</p>
					</div>
					<a class="scheme-link" href="/contact">Contact me to find your preferred slot <Icon name="arrow" size={14} /></a>
				</li>
				<li class="scheme-card">
					<header class="scheme-card-header">
						<span class="scheme-icon"><Icon name="pin" size={28} /></span>
						<span class="label-eyebrow label-eyebrow--pill-bordered">In person</span>
					</header>
					<div class="scheme-card-intro">
						<h3 class="scheme-name">Melbourne locations</h3>
						<p class="scheme-summary">Physical rooms in the following Victorian suburbs.</p>
					</div>
					<div class="scheme-points">
						<span class="label-eyebrow scheme-points-label">Locations</span>
						<ul class="bullet-list">
							{#each site.locations as loc (loc)}<li>{loc}</li>{/each}
						</ul>
					</div>
				</li>
				<li class="scheme-card">
					<header class="scheme-card-header">
						<span class="scheme-icon"><Icon name="video" size={28} /></span>
						<span class="label-eyebrow label-eyebrow--pill-bordered">Telehealth</span>
					</header>
					<div class="scheme-card-intro">
						<h3 class="scheme-name">Australia-wide</h3>
						<p class="scheme-summary">
							Secure, confidential video sessions from the comfort of home, wherever you are in Australia.
						</p>
					</div>
					<div class="scheme-points">
						<span class="label-eyebrow scheme-points-label">What to know</span>
						<ul class="bullet-list">
							<li>Medicare-rebated with a Mental Health Treatment Plan.</li>
							<li>You'll receive a secure video link before each appointment.</li>
						</ul>
					</div>
				</li>
				<li class="scheme-card" id="medicare">
					<header class="scheme-card-header">
						<div class="scheme-logo-wrap"><img class="scheme-logo" src="/images/logos/medicare.png" alt="Medicare" loading="lazy" /></div>
						<span class="label-eyebrow label-eyebrow--pill-bordered">Rebates</span>
					</header>
					<div class="scheme-card-intro">
						<h3 class="scheme-name">Medicare — Better Access Initiative</h3>
						<p class="scheme-summary">
							Available with a valid Mental Health Treatment Plan from your GP, psychiatrist or paediatrician.
						</p>
					</div>
					<div class="scheme-rebate">
						<span class="label-eyebrow">At a glance</span>
						<p class="scheme-rebate-value">{fees.rebate} rebate ({fees.outOfPocket} out-of-pocket).</p>
					</div>
					<a class="scheme-link" href="#mhtp">How to get a plan <Icon name="arrow" size={14} /></a>
				</li>
			</ul>
		</div>
	</section>

	<section id="mhtp" class="section plan-section">
		<div class="container container-lg">
			<div class="plan-grid">
				<div class="plan-copy flow" style="--flow-space: var(--space-4);">
					<p class="eyebrow">Mental Health Treatment Plan</p>
					<h2 class="section-title">Three steps to accessing the Medicare rebate.</h2>
					<p>
						If you're working with me under the Australian Government's Better Access Initiative via a
						Mental Health Treatment Plan (MHTP), your rebate is processed immediately after each session
						and returned directly to your nominated bank account.
					</p>
					<ul class="bullet-list plan-rebate-list">
						<li>
							Clinical psychologist Medicare rebate: {fees.rebate} per 50-minute session (as of {fees.rebateFrom}),
							bringing your out-of-pocket cost to {fees.outOfPocket}.
						</li>
						<li>Applies to initial and subsequent sessions, for up to 10 sessions per calendar year.</li>
					</ul>
					<a class="btn secondary md" href="mailto:{site.email}">Email me your plan <Icon name="arrow" /></a>
				</div>
				<ol class="plan-steps">
					<li class="plan-step">
						<span class="label-eyebrow">Step 01</span>
						<h3>Visit your GP, psychiatrist or paediatrician</h3>
						<p class="note-muted">Book a slightly longer appointment (most clinics call this a mental health consultation).</p>
					</li>
					<li class="plan-step">
						<span class="label-eyebrow">Step 02</span>
						<h3>Request a Mental Health Treatment Plan</h3>
						<p class="note-muted">Your doctor will complete the plan and a referral letter.</p>
					</li>
					<li class="plan-step">
						<span class="label-eyebrow">Step 03</span>
						<h3>Email the completed plan to me</h3>
						<p class="note-muted">
							Send it to <a class="link-underline" href="mailto:{site.email}"><strong>{site.email}</strong></a>
							for onboarding. If you have any questions about this process, I'm more than happy to help.
						</p>
					</li>
				</ol>
			</div>
		</div>
	</section>

	<section id="worksafe-tac" class="section schemes-section">
		<div class="container container-lg">
			<div class="schemes-header">
				<header class="section-header schemes-section-header flow" style="--flow-space: var(--space-4);">
					<p class="eyebrow">WorkSafe &amp; TAC</p>
					<h2 class="section-title text-wrap-balance">Funding through an approved claim.</h2>
					<p>
						If you have an approved WorkSafe Victoria or Transport Accident Commission claim, sessions can be
						billed under that claim.
					</p>
				</header>
			</div>
			<ul class="scheme-grid">
				<li id="scheme-worksafe" class="scheme-card">
					<header class="scheme-card-header">
						<div class="scheme-logo-wrap"><img class="scheme-logo" src="/images/logos/worksafe.png" alt="WorkSafe Victoria" loading="lazy" /></div>
						<span class="label-eyebrow label-eyebrow--pill-bordered">Funding scheme</span>
					</header>
					<div class="scheme-card-intro">
						<h3 class="scheme-name">WorkSafe Victoria (WorkCover)</h3>
						<p class="scheme-summary">
							For workers with an approved Victorian WorkCover claim relating to a psychological or work-related
							injury. Sessions are billed directly to your insurer under the WorkSafe fee schedule.
						</p>
					</div>
					<div class="scheme-rebate">
						<span class="label-eyebrow">At a glance</span>
						<p class="scheme-rebate-value">{fees.workcover} per session, with no gap fee.</p>
					</div>
					<div class="scheme-points">
						<span class="label-eyebrow scheme-points-label">What to know</span>
						<ul class="bullet-list">
							<li>Please bring your claim number, case manager details and any GP referral.</li>
							<li>I liaise with your case manager and provide progress reports as required.</li>
							<li>Session format (telehealth or in person) depends on claim settings and availability.</li>
						</ul>
					</div>
				</li>
				<li id="scheme-tac" class="scheme-card">
					<header class="scheme-card-header">
						<div class="scheme-logo-wrap"><img class="scheme-logo" src="/images/logos/tac.png" alt="Transport Accident Commission" loading="lazy" /></div>
						<span class="label-eyebrow label-eyebrow--pill-bordered">Funding scheme</span>
					</header>
					<div class="scheme-card-intro">
						<h3 class="scheme-name">Transport Accident Commission (TAC)</h3>
						<p class="scheme-summary">
							For clients with an approved TAC claim for psychological therapy after a transport accident.
							Sessions are billed according to TAC requirements once approval is in place.
						</p>
					</div>
					<div class="scheme-rebate">
						<span class="label-eyebrow">At a glance</span>
						<p class="scheme-rebate-value">{fees.tac} per session, with no gap fee.</p>
					</div>
					<div class="scheme-points">
						<span class="label-eyebrow scheme-points-label">What to know</span>
						<ul class="bullet-list">
							<li>Please bring your TAC claim number, case manager details and any referral paperwork.</li>
							<li>I confirm approval requirements before billing sessions under your claim.</li>
							<li>Progress reports are provided when requested by TAC or your treating team.</li>
						</ul>
					</div>
				</li>
			</ul>
		</div>
	</section>

	<section class="section policy-section">
		<div class="container container-lg">
			<div class="policy-grid">
				<article class="policy-card surface-card flow" style="--flow-space: var(--space-3);">
					<span class="shape shape-circle tone-blue policy-shape" aria-hidden="true"></span>
					<h2>Private health insurance</h2>
					<p>
						The therapeutic and psychological services provided by Greylight Psychology may be partially
						covered by your private health insurance <em>extras</em> cover.
					</p>
					<p class="note-muted">
						If so, you'll be provided with an invoice statement you can use to claim through your provider.
						Coverage varies, so please confirm your psychology limits directly with your insurer.
					</p>
				</article>
				<article id="cancellation" class="policy-card surface-card flow" style="--flow-space: var(--space-3);">
					<span class="shape shape-quarter-tl tone-warm policy-shape" aria-hidden="true"></span>
					<h2>Cancellation policy</h2>
					<p>
						If you're unable to attend a booked session or wish to reschedule, please give me at least
						<strong>24 hours' notice</strong>.
					</p>
					<p class="note-muted">
						With less than 24 hours' notice, and no emergency or extreme circumstances, the full fee is
						charged. If I'm able to fill the cancelled appointment with another client, you won't be charged.
					</p>
					<p class="note-muted">For emergency and extreme circumstances, discretion is applied on a case-by-case basis.</p>
				</article>
				<article id="privacy" class="policy-card surface-card flow privacy-card" style="--flow-space: var(--space-3);">
					<span class="shape shape-leaf-tr tone-ink policy-shape" aria-hidden="true"></span>
					<h2>Privacy policy</h2>
					<p>Your information is handled in line with Greylight Psychology's privacy policy.</p>
					<p><a class="link-inline-icon privacy-link" href="/privacy">Read the privacy policy <Icon name="arrow" size={14} /></a></p>
				</article>
			</div>
		</div>
	</section>
</div>

<style>
	/* Line up with the text inside the pricing box (box padding + row padding) */
	.box-aligned {
		padding-inline-start: calc(var(--space-2) + var(--space-6));
		max-width: none;
	}
	.fee-note {
		font-size: var(--font-size-200);
	}
	.scheme-icon {
		display: inline-flex;
		color: var(--color-primary);
	}
	.privacy-card {
		grid-column: 1 / -1;
	}
	.privacy-link {
		font-size: var(--font-size-300);
	}
</style>
