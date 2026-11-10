<script lang="ts">
	import { onMount } from 'svelte';
	import Seo from '#lib/components/Seo.svelte';
	import Icon from '#lib/components/Icon.svelte';
	import Mark from '#lib/components/Mark.svelte';
	import Accordion from '#lib/components/Accordion.svelte';
	import EnquiryForm from '#lib/components/EnquiryForm.svelte';
	import { clusters } from '#lib/data/services.ts';
	import { site, fees } from '#lib/data/site.ts';
	import '#lib/styles/contact.css';
	import '#lib/styles/landing.css';

	let { form } = $props();

	/**
	 * Hero video. Drop the files in static/videos/ and fill these in; until then the poster image shows.
	 * Keep it muted, 15–30s, no essential speech (or burn in captions).
	 */
	const heroVideo: { mp4?: string; webm?: string } = {};
	const heroPoster = '/images/therapy-1.avif';

	let video = $state<HTMLVideoElement>();
	onMount(() => {
		if (video && matchMedia('(prefers-reduced-motion: reduce)').matches) video.pause();
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
			body: "A chance to talk about what's been happening and what you'd like to change. Together we build an understanding of your story, goals and needs, and a plan for therapy."
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
		<div class="lp-hero-media" style="background-image:url({heroPoster})" aria-hidden="true">
			{#if heroVideo.mp4 || heroVideo.webm}
				<video bind:this={video} autoplay muted loop playsinline preload="metadata" poster={heroPoster}>
					{#if heroVideo.webm}<source src={heroVideo.webm} type="video/webm" />{/if}
					{#if heroVideo.mp4}<source src={heroVideo.mp4} type="video/mp4" />{/if}
				</video>
			{/if}
		</div>
		<div class="container container-lg lp-hero-inner">
			<div class="lp-hero-copy">
				<p class="lp-eyebrow">Telehealth Australia-wide · In person in Melbourne</p>
				<h1 id="lp-title">Warm, evidence-based therapy for lasting change.</h1>
				<p class="lp-lede">
					I'm Jake, a clinical psychologist offering therapy tailored to your goals. Sessions are by
					secure telehealth anywhere in Australia, or in person in Camberwell, Richmond and Malvern.
				</p>
				<div class="lp-actions">
					<a class="btn primary md" href={site.bookingLink}>Book a free 15-minute call <Icon name="arrow" /></a>
					<a class="lp-text-link" href="#enquire">Prefer to email? Send an enquiry</a>
				</div>
				<ul class="lp-trust">
					<li><Icon name="check" /> Medicare rebates with a Mental Health Treatment Plan</li>
					<li><Icon name="check" /> Free, no-obligation 15-minute call</li>
					<li><Icon name="check" /> Telehealth or in person</li>
				</ul>
			</div>
		</div>
	</section>

	<!-- What I help with -->
	<section class="lp-section lp-help" aria-labelledby="lp-help-title">
		<div class="container container-lg">
			<div class="lp-head">
				<p class="eyebrow">How I help</p>
				<h2 id="lp-help-title">Support for teens and adults with a wide range of concerns.</h2>
			</div>
			<ul class="lp-areas">
				{#each clusters as c (c.slug)}
					<li>
						<Mark shape={c.shape} tone={c.tone} />
						<span class="lp-area-title">{c.title}</span>
						<span class="lp-area-concerns">{c.concerns.map((x) => x.title).join(' · ')}</span>
					</li>
				{/each}
			</ul>
		</div>
	</section>

	<!-- Meet Jake -->
	<section class="lp-section lp-meet" aria-labelledby="lp-meet-title">
		<div class="container container-lg lp-meet-grid">
			<img class="lp-portrait" src="/images/jake-ciminelli.jpg" alt="Jake Ciminelli, psychologist" loading="lazy" />
			<div class="lp-meet-copy">
				<p class="eyebrow">Meet your psychologist</p>
				<h2 id="lp-meet-title">Hi, I'm Jake.</h2>
				<p>
					My approach is grounded in warmth and a deep respect for your unique story. Your goals, needs
					and values guide our work together, and when you're ready, I'm here to walk alongside you.
				</p>
				<p>
					I use evidence-based approaches including Schema Therapy, Cognitive Behavioural Therapy (CBT),
					Acceptance and Commitment Therapy (ACT) and Exposure and Response Prevention (ERP), a
					first-line, evidence-based treatment for OCD.
				</p>
				<p>
					My goal is to make these first steps feel as safe and comfortable as possible. If you're curious
					about working together, I'd love to connect.
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
						Ask about fees, rebates, availability or whether I'm the right fit, and I'll reply by email within
						48 hours. Or <a href={site.bookingLink}>book a free 15-minute call</a> instead.
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
</div>
