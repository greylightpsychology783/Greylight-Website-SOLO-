<script lang="ts">
	import { onMount } from 'svelte';
	import Seo from '#lib/components/Seo.svelte';
	import Icon from '#lib/components/Icon.svelte';
	import Mark from '#lib/components/Mark.svelte';
	import Accordion from '#lib/components/Accordion.svelte';
	import EnquiryForm from '#lib/components/EnquiryForm.svelte';
	import { clusters, type Shape, type Tone } from '#lib/data/services.ts';
	import { site, fees } from '#lib/data/site.ts';
	import '#lib/styles/contact.css';
	import '#lib/styles/landing.css';

	let { form } = $props();


	/** Intro video: only the poster loads at first; the video file downloads when someone presses play. */
	const intro = { src: '/videos/jake-intro.mp4', poster: '/videos/jake-intro-poster.jpg' };
	let introPlaying = $state(false);

	/**
	 * "How I help" cards for this landing page only (the main site keeps its own order and groupings).
	 * Ordered by focus, with Men's issues pulled out of "Self & direction" into its own card.
	 */
	type Area = { key: string; title: string; shape: Shape; tone: Tone; concerns: string[] };
	const area = (slug: string, title?: string): Area => {
		const c = clusters.find((x) => x.slug === slug)!;
		return {
			key: slug,
			title: title ?? c.title,
			shape: c.shape,
			tone: c.tone,
			concerns: c.concerns.filter((x) => x.id !== 'mens-issues').map((x) => x.title)
		};
	};
	const helpAreas: Area[] = [
		area('ocd'),
		area('anxiety'),
		area('trauma', 'Trauma & CPTSD'),
		{ key: 'mens', title: "Men's issues", shape: 'quarter-tl', tone: 'terracotta', concerns: ['Stress', 'Relationships', 'Identity', 'Expectations'] },
		area('transitions', 'Life changes & transitions'),
		area('depression'),
		area('relationships'),
		area('self-direction')
	];

	const badges = ['No waitlist: appointments this week', 'Medicare rebates available', 'Free 15-min call'];

	/** Mobile: a sticky booking button once the hero's button has scrolled away (hidden at the enquiry form). */
	let heroCta = $state<HTMLElement>();
	let pastHero = $state(false);
	let atForm = $state(false);
	const showSticky = $derived(pastHero && !atForm);

	onMount(() => {
		const enquire = document.getElementById('enquire');
		if (!heroCta || !enquire || !('IntersectionObserver' in window)) return;
		const io = new IntersectionObserver((entries) => {
			for (const e of entries) {
				if (e.target === heroCta) pastHero = !e.isIntersecting && e.boundingClientRect.top < 0;
				else atForm = e.isIntersecting;
			}
		});
		io.observe(heroCta);
		io.observe(enquire);
		return () => io.disconnect();
	});

	const training = [
		'Master of Psychology (Clinical)',
		'Graduate Diploma in Psychology (Advanced)',
		'Graduate Diploma in Psychological Science',
		'Bachelor of Applied Science (Psychology)'
	];

	const steps = [
		{
			title: 'Book a free connection call',
			body: "A free, no-obligation 15-minute phone chat to talk about what's going on and whether we're a good fit. It isn't a therapy session, and there's no pressure to continue."
		},
		{
			title: 'Get a Mental Health Treatment Plan (optional)',
			body: 'Visit your GP for a plan to access the Medicare rebate, then email it to me. You are also welcome to attend privately.'
		},
		{
			title: 'Your first session',
			body: "We start by understanding what's happening for you and what you'd like to change. From there, we co-design a tailored, evidence-based plan to help you move toward the life you want to live."
		}
	];

	const year = new Date().getFullYear();
</script>

<Seo
	title=""
	fullTitle="Talk to a psychologist | Greylight Psychology"
	description="Warm, evidence-based therapy with Jake Ciminelli, by telehealth anywhere in Australia or in person in Melbourne. Book a free 15-minute connection call or send an enquiry."
	noindex
/>

<div class="pg-landing">
	<!-- Hero -->
	<section class="lp-hero" aria-labelledby="lp-title">
		<div class="container container-lg lp-hero-inner">
			<div class="lp-hero-copy">
				<p class="lp-eyebrow">Telehealth anywhere in Australia · In person in Melbourne</p>
				<h1 id="lp-title">Feeling stuck, overwhelmed or anxious? I'm glad you're here.</h1>
				<p class="lp-lede">
					I'm Jake, a clinical psychologist helping people 15+ with OCD (including Pure-O), anxiety, complex
					trauma (CPTSD), men's issues and life changes. Sessions by secure telehealth from anywhere in
					Australia, or in person in Camberwell, Richmond or Malvern.
				</p>
				<ul class="lp-badges">
					{#each badges as b (b)}<li><Icon name="check" /> {b}</li>{/each}
				</ul>
				<div class="lp-actions" bind:this={heroCta}>
					<a class="btn primary md" href={site.bookingLink}>Book a free 15-min call <Icon name="arrow" /></a>
					<a class="lp-text-link" href="#enquire">Or send a message</a>
				</div>
			</div>
			<figure class="lp-intro" aria-label="A quick hello from Jake">
				<span class="lp-intro-accent" aria-hidden="true"></span>
				<span class="lp-intro-dot" aria-hidden="true"></span>
				<div class="lp-intro-frame">
					{#if introPlaying}
						<!-- svelte-ignore a11y_media_has_caption (captions are burned into the video) -->
						<video src={intro.src} poster={intro.poster} controls autoplay playsinline preload="auto"></video>
					{:else}
						<button type="button" class="lp-intro-play" onclick={() => (introPlaying = true)} aria-label="Play a 15-second hello from Jake (with captions)">
							<img src={intro.poster} alt="" width="720" height="1280" loading="lazy" decoding="async" />
							<span class="lp-intro-icon" aria-hidden="true"><svg viewBox="0 0 24 24" width="28" height="28"><path d="M8 5.5v13l11-6.5z" fill="currentColor" /></svg></span>
							<span class="lp-intro-len" aria-hidden="true">0:15</span>
						</button>
					{/if}
				</div>
			</figure>
		</div>
	</section>

	<!-- Meet Jake -->
	<section class="lp-section lp-meet" aria-labelledby="lp-meet-title">
		<div class="container container-md lp-meet-inner">
			<div class="lp-meet-head">
				<img class="lp-portrait" src="/images/jake-ciminelli.jpg" alt="Jake Ciminelli, psychologist" width="160" height="160" loading="lazy" decoding="async" />
				<div>
					<p class="eyebrow">Meet your psychologist</p>
					<h2 id="lp-meet-title">Hi, I'm Jake.</h2>
				</div>
			</div>
			<div class="lp-meet-copy">
				<p>
					My approach is grounded in warmth and a deep respect for your unique story. Your goals, needs
					and values guide our work together, and when you're ready, I'm here to walk alongside you.
				</p>
				<p>
					I support people 15+ with anxiety, OCD (including Pure-O), depression, trauma, relationship
					difficulties and life transitions. I use evidence-based approaches including Schema Therapy,
					Cognitive Behavioural Therapy (CBT), Acceptance and Commitment Therapy (ACT) and Exposure and
					Response Prevention (ERP), a first-line, evidence-based treatment for OCD.
				</p>
				<p class="lp-meet-quote">
					You don't have to do this alone. Together we'll make sense of your story and help you move toward
					calm, balance and self-trust.
				</p>
				<p>
					My goal is to make these first, often difficult steps feel as safe and comfortable as possible. If
					you're curious about working together, I'd love to connect and help you explore what genuine,
					lasting change could look like for you.
				</p>
				<div class="lp-quals">
					<p class="lp-quals-label">Qualifications</p>
					<ul>
						{#each training as t (t)}<li>{t}</li>{/each}
					</ul>
				</div>
			</div>
		</div>
	</section>

	<!-- What I help with -->
	<section class="lp-section lp-help" aria-labelledby="lp-help-title">
		<div class="container container-lg">
			<div class="lp-head">
				<p class="eyebrow">How I help</p>
				<h2 id="lp-help-title">Support for people 15+ with a wide range of concerns.</h2>
			</div>
			<ul class="lp-areas">
				{#each helpAreas as a (a.key)}
					<li>
						<Mark shape={a.shape} tone={a.tone} />
						<span class="lp-area-title">{a.title}</span>
						<span class="lp-area-concerns">{a.concerns.join(' · ')}</span>
					</li>
				{/each}
			</ul>
		</div>
	</section>

	<!-- How it works -->
	<section class="lp-section lp-steps" aria-labelledby="lp-steps-title">
		<div class="container container-lg">
			<div class="lp-head">
				<p class="eyebrow">Getting started</p>
				<h2 id="lp-steps-title">Three simple steps.</h2>
			</div>
			<ol class="lp-step-list">
				{#each steps as s, i (s.title)}
					<li class="lp-step">
						<span class="lp-step-num" aria-hidden="true">{String(i + 1).padStart(2, '0')}</span>
						<h3>{s.title}</h3>
						<p>{s.body}</p>
					</li>
				{/each}
			</ol>
			<div class="lp-actions lp-actions--center">
				<a class="btn primary md" href={site.bookingLink}>Book a free 15-minute call <Icon name="arrow" /></a>
				<a class="lp-text-link" href="#enquire">Prefer to email? Send an enquiry</a>
			</div>
		</div>
	</section>

	<!-- Fees -->
	<section class="lp-section lp-fees" aria-labelledby="lp-fees-title">
		<div class="container container-lg">
			<div class="lp-head">
				<p class="eyebrow">Fees</p>
				<h2 id="lp-fees-title">Clear fees, with Medicare rebates available.</h2>
			</div>
			<div class="lp-fee-grid">
				<div class="lp-fee lp-fee--feature">
					<p class="lp-fee-label">With a Mental Health Treatment Plan</p>
					<p class="lp-fee-price">{fees.outOfPocket} <span>/ {fees.sessionLength} session</span></p>
					<p class="lp-fee-note">
						Out of pocket after the {fees.rebate} Medicare rebate (rebate as of {fees.rebateFrom}). Up to 10
						rebated sessions per calendar year under the Better Access initiative, by telehealth or in person.
					</p>
				</div>
				<div class="lp-fee">
					<p class="lp-fee-label">Without a plan</p>
					<p class="lp-fee-price">{fees.sessionFee} <span>/ {fees.sessionLength} session</span></p>
					<p class="lp-fee-note">The full session fee. Private health may cover part of it, depending on your policy.</p>
				</div>
				<div class="lp-fee">
					<p class="lp-fee-label">Connection call</p>
					<p class="lp-fee-price">Free <span>/ 15 min</span></p>
					<p class="lp-fee-note">A phone chat to see if we're a good fit. Not a therapy session, and no obligation.</p>
				</div>
			</div>
		</div>
	</section>

	<!-- Enquiry -->
	<section id="enquire" class="lp-section lp-enquire pg-contact" aria-labelledby="lp-enquire-title">
		<div class="container container-lg">
			<div class="layout-sidebar-form">
				<div class="lp-enquire-copy">
					<p class="eyebrow">Send an enquiry</p>
					<h2 id="lp-enquire-title">Not ready for a call? Send me a message.</h2>
					<p>
						Ask about fees, rebates, availability or whether I'm the right fit. I'll reply within 1 business
						day. Or <a href={site.bookingLink}>book a free 15-minute call</a> instead.
					</p>
					<div id="crisis-support" class="surface-card notice flow">
						<h3>Emergency and crisis support</h3>
						<p>
							This website and form are not monitored for urgent risk situations. If you or someone else is
							in immediate danger, call <strong>000</strong> now or go to your nearest emergency department.
						</p>
						<p>For 24-hour crisis support, contact Lifeline on <strong>13 11 14</strong>.</p>
					</div>
				</div>
				<EnquiryForm {form} idPrefix="lp" action="#enquire" />
			</div>
		</div>
	</section>

	<!-- FAQ -->
	<section class="lp-section lp-faq" aria-labelledby="lp-faq-title">
		<div class="container container-md">
			<div class="lp-head lp-head--center">
				<p class="eyebrow">Questions</p>
				<h2 id="lp-faq-title">Good to know.</h2>
			</div>
			<div class="lp-faq-list">
				<Accordion question="What happens on the free call?">
					<p>
						It's a relaxed 15-minute phone chat. We'll talk briefly about what's going on for you, what you're
						hoping for, and practical details like fees and availability. It isn't a therapy session, and
						there's no obligation to book afterwards.
					</p>
				</Accordion>
				<Accordion question="Do I need a GP referral?">
					<p>
						Not to book the call or to start sessions privately. To claim the Medicare rebate you'll need a
						Mental Health Treatment Plan from your GP, psychiatrist or paediatrician.
					</p>
				</Accordion>
				<Accordion question="What will I pay?">
					<p>
						With a Mental Health Treatment Plan, your out-of-pocket cost is {fees.outOfPocket} per 50-minute
						session after the {fees.rebate} Medicare rebate. Without a plan, the full fee is {fees.sessionFee}.
						The connection call is free.
					</p>
				</Accordion>
				<Accordion question="Is telehealth effective?">
					<p>
						Research supports telehealth as an effective option for many common concerns, including anxiety
						and depression. Many people also find it easier to fit therapy into their week. Telehealth sessions
						are Medicare-rebatable with a plan, just like in-person sessions.
					</p>
				</Accordion>
			</div>
		</div>
	</section>

	<!-- Closing CTA -->
	<section class="lp-cta" aria-labelledby="lp-cta-title">
		<div class="container container-lg">
			<h2 id="lp-cta-title">Finding the right fit matters. Let's start with a quick, free chat.</h2>
			<div class="lp-actions lp-actions--center">
				<a class="btn primary md" href={site.bookingLink}>Book a free 15-minute call <Icon name="arrow" /></a>
				<a class="lp-text-link lp-text-link--light" href="#enquire">Prefer to email? Send an enquiry</a>
			</div>
		</div>
	</section>

	<footer class="lp-footer">
		<div class="container container-lg lp-footer-inner">
			<p>
				© {year} Greylight Psychology · Jake Ciminelli, Psychologist{#if site.ahpraNumber}
					· AHPRA registration {site.ahpraNumber}{/if}
			</p>
			<p>
				In an emergency call <strong>000</strong>. Lifeline <strong>13 11 14</strong>. ·
				<a href="/privacy">Privacy policy</a> · <a href="mailto:{site.email}">{site.email}</a>
			</p>
		</div>
	</footer>

	<div class="lp-sticky" class:is-visible={showSticky} aria-hidden={!showSticky} inert={!showSticky}>
		<a class="btn primary md" href={site.bookingLink}>Book a free 15-min call <Icon name="arrow" /></a>
	</div>
</div>
