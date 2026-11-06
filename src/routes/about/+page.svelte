<script lang="ts">
	import Seo from '#lib/components/Seo.svelte';
	import { site, fees } from '#lib/data/site.ts';
	import '#lib/styles/about.css';

	const focusAreas = ['OCD & Pure-O', 'Anxiety', 'Trauma', 'Self-esteem'];
	const clinicalFocus = [
		'Relationship and attachment difficulties',
		'Anxiety disorders (generalised anxiety, panic attacks, social anxiety)',
		'Post-Traumatic Stress Disorder (PTSD) and Complex Trauma',
		'Obsessive-compulsive disorder (classic and Pure-O)',
		'Stress management',
		'Self-esteem issues',
		'Life purpose and identity'
	];
	const training = [
		'Bachelor of Applied Science (Psychology)',
		'Graduate Diploma in Psychological Science',
		'Graduate Diploma in Psychology (Advanced)',
		'Master of Psychology (Clinical)'
	];
	const approaches = [
		{
			shape: 'shape-quarter-tl tone-warm',
			title: 'Schema Therapy (ST)',
			body: 'Helps uncover and heal deep-rooted patterns formed in childhood, like people-pleasing, self-criticism, or feeling unworthy. Helpful when recurring emotional or relational pain keeps showing up.'
		},
		{
			shape: 'shape-circle tone-ink',
			title: 'Cognitive Behavioural Therapy (CBT)',
			body: 'Focuses on identifying unhelpful thoughts and behaviours, then shifting them toward more realistic and useful patterns in a practical, goal-oriented way.'
		},
		{
			shape: 'shape-leaf-tr tone-blue',
			title: 'Acceptance and Commitment Therapy (ACT)',
			body: 'Helps you stop fighting difficult thoughts and feelings, and start building a meaningful life through actions grounded in your values, even when things feel hard.'
		},
		{
			shape: 'shape-circle tone-warm',
			title: 'Exposure and Response Prevention (ERP)',
			body: 'The gold-standard treatment for OCD. It supports you to face intrusive thoughts and fears without compulsions, breaking the OCD cycle and retraining the brain over time.'
		}
	];
</script>

<Seo
	title="About Jake Ciminelli"
	description="Jake Ciminelli is a Melbourne clinical psychologist and the principal psychologist at Greylight Psychology, working with anxiety, OCD, trauma, depression and relationships using Schema Therapy, CBT, ACT and ERP."
/>

<div class="pg-about">
	<section class="page-hero page-hero--compact page-hero--split page-hero--profile">
		<div class="container container-lg">
			<nav class="breadcrumbs" aria-label="Breadcrumb">
				<ol class="breadcrumb-list">
					<li><a href="/">Home</a></li>
					<li aria-hidden="true" class="breadcrumb-sep">/</li>
					<li><span class="breadcrumb-current" aria-current="page">About</span></li>
				</ol>
			</nav>
			<header class="profile-hero">
				<div class="profile-main">
					<div class="hero-text">
						<div class="name-group">
							<div class="availability avail-accepting">
								<span class="avail-dot" aria-hidden="true"></span>
								<span class="avail-label">Accepting new clients</span>
							</div>
							<h1 class="profile-name">Jake Ciminelli</h1>
							<p class="title-line">
								<span class="title">Principal Clinical Psychologist</span>
								<span class="title-sep" aria-hidden="true">·</span>
								<span class="credentials">BA (Psych), GDipPsych(Adv), MClinPsych</span>
							</p>
							<ul class="meta-row" aria-label="At a glance">
								<li>In-person and Telehealth</li>
								<li class="meta-sep" aria-hidden="true">·</li>
								<li>Melbourne based</li>
								<li class="meta-sep" aria-hidden="true">·</li>
								<li>Teens and adults</li>
							</ul>
						</div>
						<hr class="lede-rule" aria-hidden="true" />
						<p class="hero-intro">
							If you're feeling stuck, overwhelmed, or anxious, I'm glad you're here. I'm the Principal
							Clinical Psychologist at Greylight Psychology. I work with adolescents and adults
							experiencing anxiety, OCD, depression, trauma-related difficulties, relationship concerns
							and life transitions, in person in Melbourne and via telehealth across Australia.
						</p>
						<hr class="lede-rule" aria-hidden="true" />
						<div class="helping-with">
							<span class="helping-label">Areas of focus</span>
							<ul class="chip-row" aria-label="What Jake helps with">
								{#each focusAreas as s (s)}<li><span class="chip">{s}</span></li>{/each}
							</ul>
						</div>
						<div class="hero-actions">
							<a class="btn primary md" href={site.bookingLink}>Book a free connection call</a>
							<a class="btn secondary md" href="/fees">Fees &amp; availability</a>
						</div>
					</div>
					<div class="portrait-column">
						<div class="portrait-wrap">
							<div class="portrait tone-warm has-photo">
								<img class="portrait-img" src="/images/jake-ciminelli.jpg" alt="Portrait of Jake Ciminelli" decoding="async" fetchpriority="high" />
							</div>
						</div>
					</div>
				</div>
			</header>
		</div>
	</section>

	<section class="section profile-about" id="profile-about">
		<div class="container container-lg">
			<article class="about-card">
				<div class="about-grid">
					<div class="about-head flow" style="--flow-space: var(--space-3);">
						<p class="eyebrow">About</p>
						<h2>In my words</h2>
					</div>
					<div class="bio flow" style="--flow-space: var(--space-4);">
						<p>
							I use evidence-based approaches including Schema Therapy, ACT, CBT and ERP, delivered in
							person or via secure, Medicare-rebated telehealth sessions. My approach is grounded in
							warmth and a deep respect for your unique story. Your goals, needs, and values guide our
							work together, and when you're ready, I'm here to walk alongside you.
						</p>
						<p>
							I have experience in treating Obsessive Compulsive Disorder (OCD), including Pure-O, and
							work extensively with Schema Therapy to help shift entrenched patterns of self-criticism,
							self-sabotage and attachment trauma. I also support recovery from anxiety disorders, be
							that health anxiety, social anxiety, and/or panic attacks.
						</p>
						<p>
							My goal is to make these initial steps as safe and comfortable as possible. If you're
							curious about working together, I'd love to connect and help you explore what genuine,
							lasting change could look like for you.
						</p>
					</div>
				</div>
			</article>
		</div>
	</section>

	<section class="section profile-glance">
		<div class="container container-lg">
			<div class="glance-head flow" style="--flow-space: var(--space-3);">
				<p class="eyebrow">At a glance</p>
				<h2>A quick snapshot.</h2>
			</div>
			<ul class="glance-grid">
				<li class="glance-item flow" style="--flow-space: var(--space-3);">
					<h3>Clinical focus</h3>
					<ul class="glance-list">{#each clinicalFocus as item (item)}<li>{item}</li>{/each}</ul>
				</li>
				<li class="glance-item flow" style="--flow-space: var(--space-3);">
					<h3>Qualifications</h3>
					<ul class="glance-list">{#each training as item (item)}<li>{item}</li>{/each}</ul>
				</li>
				<li class="glance-item flow" style="--flow-space: var(--space-3);">
					<h3>Session details</h3>
					<ul class="glance-list">
						<li>In-person and telehealth</li>
						<li>Medicare-rebated telehealth, Australia-wide</li>
						<li>Locations: {site.locations.join(', ').replace(/, ([^,]*)$/, ', and $1')}</li>
						<li>Weekday appointments</li>
						<li>50-minute sessions</li>
					</ul>
				</li>
			</ul>
		</div>
	</section>

	<section class="section profile-approaches">
		<div class="container container-lg">
			<div class="approaches-head flow" style="--flow-space: var(--space-3);">
				<p class="eyebrow">Approaches</p>
				<h2>How I work.</h2>
				<p class="lede-muted">The evidence-based approaches I draw on, and what they look like in sessions.</p>
			</div>
			<ul class="approach-grid">
				{#each approaches as a (a.title)}
					<li class="approach-card flow" style="--flow-space: var(--space-3);">
						<span class="shape {a.shape}" aria-hidden="true"></span>
						<h3>{a.title}</h3>
						<p>{a.body}</p>
					</li>
				{/each}
			</ul>
		</div>
	</section>

	<section class="section claims" id="worksafe-tac" aria-labelledby="claims-heading">
		<div class="container container-lg">
			<div class="approaches-head flow" style="--flow-space: var(--space-3);">
				<p class="eyebrow">WorkSafe &amp; TAC</p>
				<h2 id="claims-heading">Support for WorkSafe and TAC clients.</h2>
				<p class="lede-muted">
					If you have an approved WorkSafe Victoria or Transport Accident Commission claim, I can provide
					psychological therapy under that claim.
				</p>
			</div>
			<ul class="claims-grid">
				<li class="claim-card">
					<div class="claim-logo"><img src="/images/logos/worksafe.png" alt="WorkSafe Victoria" loading="lazy" /></div>
					<h3>WorkSafe Victoria (WorkCover)</h3>
					<p>
						For workers with an approved Victorian WorkCover claim relating to a psychological or
						work-related injury. Sessions are billed directly to your insurer under the WorkSafe fee schedule.
					</p>
					<ul class="bullet-list">
						<li>Please bring your claim number, case manager details and any GP referral.</li>
						<li>I liaise with your case manager and provide progress reports as required.</li>
					</ul>
				</li>
				<li class="claim-card">
					<div class="claim-logo"><img src="/images/logos/tac.png" alt="Transport Accident Commission" loading="lazy" /></div>
					<h3>Transport Accident Commission (TAC)</h3>
					<p>
						For clients with an approved TAC claim for psychological therapy after a transport accident.
						Sessions are billed according to TAC requirements once approval is in place.
					</p>
					<ul class="bullet-list">
						<li>Please bring your TAC claim number, case manager details and any referral paperwork.</li>
						<li>I confirm approval requirements before billing, and provide progress reports when requested.</li>
					</ul>
				</li>
			</ul>
			<p class="claims-note note-muted">
				Session format (telehealth or in person) depends on your claim settings and availability. The session fee is {fees.workcover} for WorkCover clients and {fees.tac} for TAC clients, and I don't charge gap fees. <a href="/contact">Get in touch</a> to check how your claim applies.
			</p>
		</div>
	</section>

	<section class="profile-cta">
		<div class="container container-lg">
			<div class="cta-band">
				<span class="cta-shape cta-shape-leaf" aria-hidden="true"></span>
				<span class="cta-shape cta-shape-circle" aria-hidden="true"></span>
				<div class="cta-text flow" style="--flow-space: var(--space-3);">
					<p class="eyebrow">Ready when you are</p>
					<h2>Let's start with a conversation.</h2>
					<p>
						A free, confidential 15-minute connection call to explore your needs and goals, and how I
						can best support you. No pressure and no commitment.
					</p>
				</div>
				<div class="cta-actions">
					<a class="btn primary md" href={site.bookingLink}>Book a free call</a>
					<a class="btn secondary md" href="mailto:{site.email}">Ask a question</a>
				</div>
			</div>
		</div>
	</section>

	<div class="mobile-sticky-book">
		<a class="btn primary md" href={site.bookingLink}>Book a free connection call</a>
	</div>
</div>

<style>
	.claims {
		background: var(--color-section-light);
	}
	.claims-grid {
		list-style: none;
		padding: 0;
		margin: 0;
		display: grid;
		gap: var(--space-6);
	}
	@media (min-width: 52rem) {
		.claims-grid {
			grid-template-columns: repeat(2, minmax(0, 1fr));
		}
	}
	.claim-card {
		display: flex;
		flex-direction: column;
		gap: var(--space-4);
		max-width: none;
		padding: clamp(var(--space-6), 2.2vw, var(--space-8));
		background: var(--color-white);
		border: 1px solid var(--color-border);
		border-radius: var(--radius-lg);
		box-shadow: var(--shadow-sm);
	}
	.claim-logo {
		display: flex;
		align-items: center;
		height: 3rem;
		padding-bottom: var(--space-4);
		margin-bottom: var(--space-1);
		box-sizing: content-box;
		border-bottom: 1px solid var(--color-border);
	}
	.claim-logo img {
		height: 100%;
		width: auto;
		max-width: 12rem;
		object-fit: contain;
	}
	.claim-card h3 {
		font-size: var(--font-size-600);
		letter-spacing: var(--tracking-snug);
	}
	.claim-card > p {
		color: var(--color-text-muted);
	}
	.claims-note {
		margin-top: var(--space-8);
		max-width: 60rem;
	}
</style>
