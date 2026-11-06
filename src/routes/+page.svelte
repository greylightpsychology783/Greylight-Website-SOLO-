<script lang="ts">
	import Seo from '#lib/components/Seo.svelte';
	import Icon from '#lib/components/Icon.svelte';
	import Mark from '#lib/components/Mark.svelte';
	import Typewriter from '#lib/components/Typewriter.svelte';
	import Accordion from '#lib/components/Accordion.svelte';
	import { clusters, clusterHref, getCluster } from '#lib/data/services.ts';
	import { fees, site } from '#lib/data/site.ts';
	import '#lib/styles/home.css';

	const tag = (slug: string, id: string, label: string) => ({ href: clusterHref(getCluster(slug)!, id), label });
	const heroTags = [
		tag('anxiety', 'general-anxiety', 'General Anxiety'),
		tag('ocd', 'ocd', 'OCD'),
		tag('ocd', 'pure-o', 'Pure-O'),
		tag('anxiety', 'panic-attacks', 'Panic Attacks'),
		tag('depression', 'depression', 'Depression'),
		tag('trauma', 'ptsd', 'PTSD'),
		tag('self-direction', 'self-esteem', 'Self-esteem'),
		tag('relationships', 'relationship-patterns', 'Relationships'),
		tag('transitions', 'stress', 'Stress'),
		tag('self-direction', 'mens-issues', "Men's Issues")
	];
	const totalConcerns = clusters.reduce((n, c) => n + c.concerns.length, 0);
	const headline =
		"No matter what you're experiencing, I'm here to help you close the gap towards the life you seek.";

	const steps = [
		{
			title: 'Book a free connection call',
			body: 'A complimentary, confidential 15-minute chat to explore your needs and goals, and whether we are the right fit. No pressure and no commitment.'
		},
		{
			title: 'Get a Mental Health Treatment Plan (optional)',
			body: 'Visit your GP for a plan to access the Medicare rebate, then email it to me for onboarding. You are also welcome to attend privately.'
		},
		{
			title: 'Your initial session',
			body: "Your first session is a chance to talk about what's been happening and what you'd like to change. Together we develop a collaborative understanding of your story, goals and needs, and a tailored plan for therapy."
		},
		{
			title: 'Ongoing while you need it',
			body: 'Every journey is different. Some find a few sessions helpful for specific goals; others benefit from longer-term support. We regularly review your progress to make sure therapy keeps meeting your needs.'
		}
	];
</script>

<Seo
	title=""
	description="Greylight Psychology: warm, evidence-based therapy with clinical psychologist Jake Ciminelli. In person in Camberwell, Richmond and Malvern, and telehealth Australia-wide. Medicare rebates available."
/>

<section class="hero">
	<div class="container container-lg">
		<div class="hero-grid">
			<div class="hero-left">
				<div class="hero-headline flow" style="--flow-space: var(--space-4);">
					<p class="eyebrow">Melbourne in-person &amp; telehealth Australia-wide.</p>
					<h1>Warm, evidence-based therapy for lasting change.</h1>
					<p>
						I'm Jake, a clinical psychologist offering warm, evidence-informed therapy tailored to your
						goals. Genuine connection, informed care, and therapy that supports lasting change, delivered
						with insight, courage and growth at its core.
					</p>
				</div>
				<div class="hero-picker">
					<div class="picker-label">
						<Typewriter phrases={["What's on your mind?", 'What are you working on?', 'Where could you use support?', 'What brings you here today?']} />
					</div>
					<div class="hero-tags">
						{#each heroTags as t (t.href)}<a class="tag-btn" href={t.href}>{t.label}</a>{/each}
						<a class="show-more-btn" href="/how-i-help">+{totalConcerns - heroTags.length} more</a>
					</div>
					<a class="hero-finder-cta" href={site.bookingLink}><span>Book a free connection call</span> <Icon name="arrow" /></a>
				</div>
			</div>
			<div class="hero-bento">
				<div class="bento-hero">
					<div class="bento-frame">
						<div class="bento">
							<div class="cell shape-tl" aria-hidden="true"></div>
							<div class="cell shape-tm" role="img" aria-label="A lush indoor garden wall in a warm therapy space"></div>
							<div class="cell shape-tr"><span class="tagline">Change<br />starts here.</span></div>
							<div class="cell photo-wide" role="img" aria-label="A therapy session in a warm, plant-filled room"></div>
							<div class="cell shape-mtr"></div>
							<div class="cell shape-mbl" aria-hidden="true"></div>
							<div class="cell shape-mbm" aria-hidden="true"></div>
							<div class="cell shape-mbr" role="img" aria-label="A comfortable therapy room"></div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</section>

<section class="statement" aria-label="How I help">
	<div class="container container-lg">
		<h2 class="headline">{headline}</h2>
		<div class="cluster-group">
			<ul class="clusters">
				{#each clusters as c (c.slug)}
					<li>
						<div class="theme-group"><Mark shape={c.shape} tone={c.tone} /> <span class="theme">{c.title}</span></div>
						<p class="tags">
							{#each c.concerns as concern (concern.id)}<a class="tag-link" href={clusterHref(c, concern.id)}>{concern.title}</a>{/each}
						</p>
					</li>
				{/each}
			</ul>
		</div>
		<a class="see-all" href="/how-i-help">See all I help with <span class="arrow" aria-hidden="true">→</span></a>
		<div class="break-end">
			<p class="break-line">Finding the right fit matters. Let's start with a quick, free chat.</p>
			<div class="break-cta"><a class="btn primary md" href={site.bookingLink}>Book a connection call</a></div>
		</div>
	</div>
</section>

<section class="section meet" aria-labelledby="meet-heading">
	<div class="container container-lg">
		<div class="meet-grid">
			<div class="meet-portrait">
				<img src="/images/jake-ciminelli.jpg" alt="Portrait of Jake Ciminelli" loading="lazy" />
			</div>
			<div class="meet-copy flow" style="--flow-space: var(--space-4);">
				<p class="eyebrow">Meet your psychologist</p>
				<h2 id="meet-heading" class="section-title">Jake Ciminelli</h2>
				<p class="meet-title">Principal Clinical Psychologist · BA (Psych), GDipPsych(Adv), MClinPsych</p>
				<p>
					I'm a registered clinical psychologist based in Melbourne. With an abundance of clinical
					experience and therapeutic precision, I endeavour to understand your unique needs, history
					and present circumstances in service of supporting you on your journey towards a
					self-actualised and fulfilling life.
				</p>
				<ul class="meet-chips" aria-label="Areas of focus">
					{#each ['OCD & Pure-O', 'Anxiety', 'Trauma', 'Self-esteem'] as s (s)}<li><span class="chip">{s}</span></li>{/each}
				</ul>
				<div class="meet-actions">
					<a class="btn primary md" href="/about">Meet Jake <Icon name="arrow" /></a>
					<a class="btn secondary md" href={site.bookingLink}>Book a free call</a>
				</div>
			</div>
		</div>
	</div>
</section>

<section class="why">
	<div class="container container-lg">
		<div class="why-grid why-full">
			<div class="why-copy why-copy--full">
				<div class="why-intro flow" style="--flow-space: var(--space-4);">
					<p class="eyebrow">Why Greylight</p>
					<h2 class="headline">Compassionate, evidence-based therapy that creates real change.</h2>
				</div>
				<ul class="pillars pillars--row">
					<li class="pillar">
						<span class="shape shape-quarter-tl tone-warm" aria-hidden="true"></span>
						<div class="pillar-text">
							<strong>Quality.</strong>
							<span>I use only the most effective, evidence-based methods, including Schema Therapy, CBT, ACT and ERP, in service of your goals.</span>
						</div>
					</li>
					<li class="pillar">
						<span class="shape shape-circle tone-ink" aria-hidden="true"></span>
						<div class="pillar-text">
							<strong>Convenience.</strong>
							<span>See me in person in {site.locations.join(', ').replace(/, ([^,]*)$/, ' or $1')}, or entirely online, flexible and secure, from anywhere in Australia.</span>
						</div>
					</li>
					<li class="pillar">
						<span class="shape shape-leaf-tr tone-blue" aria-hidden="true"></span>
						<div class="pillar-text">
							<strong>Versatility.</strong>
							<span>Every session is tailored to your goals, preferences and pace, offering support that evolves with your needs and story.</span>
						</div>
					</li>
				</ul>
				<div class="why-actions">
					<a class="btn primary md" href={site.bookingLink}>Book a free call <Icon name="arrow" /></a>
					<a class="btn secondary md" href="/about">About me</a>
				</div>
			</div>
		</div>
	</div>
</section>

<section class="process" aria-labelledby="process-heading">
	<div class="container container-lg">
		<div class="process-layout">
			<div class="process-intro flow" style="--flow-space: var(--space-4);">
				<p class="eyebrow">What to expect</p>
				<h2 class="h1" id="process-heading">Starting therapy, step by step.</h2>
				<p class="process-lead">
					Each session is collaborative, confidential, and focused on helping you make meaningful,
					lasting progress.
				</p>
				<div class="process-actions">
					<a class="btn primary md" href={site.bookingLink}>Book a free call <Icon name="arrow" /></a>
					<a class="btn secondary md" href="/fees">Fees &amp; rebates</a>
				</div>
			</div>
			<ol class="process-cards">
				{#each steps as step, i (step.title)}
					<li class="process-card">
						<span class="process-card-index" aria-hidden="true">{i + 1}</span>
						<div class="process-card-body"><h3>{step.title}</h3><p>{step.body}</p></div>
					</li>
				{/each}
			</ol>
		</div>
	</div>
</section>

<section class="section section-bg-light section-tight">
	<div class="container container-lg">
		<div class="faq-grid">
			<header class="faq-header flow" style="--flow-space: var(--space-3);"><h2>Frequently Asked Questions</h2></header>
			<div class="faq-list">
				<Accordion question="How do online therapy sessions work?">
					<p>
						Online (telehealth) sessions work much like in-person therapy, just from the comfort and
						privacy of your own space. You'll receive a secure video link before each appointment, and
						with one click you'll be connected face-to-face with me. All sessions are confidential,
						Medicare-rebated, and designed to help you access professional support wherever you live.
					</p>
				</Accordion>
				<Accordion question="Is online therapy as effective as in-person?">
					<p>
						Yes. Research consistently shows that online therapy is just as effective as face-to-face
						sessions for most mental health concerns, including anxiety, depression, trauma, and OCD.
						Many people even find it easier to open up and stay consistent when therapy fits naturally
						into their day.
					</p>
				</Accordion>
				<Accordion question="Which issues do you work with?">
					<p>
						I work with teens and adults experiencing anxiety, OCD (including Pure-O), depression,
						trauma, relationship concerns, self-esteem, and stress and life transitions. See <a href="/how-i-help">everything I help with</a>.
					</p>
				</Accordion>
				<Accordion question="What are your fees?">
					<p>
						With a Mental Health Treatment Plan, your out-of-pocket cost is {fees.outOfPocket} per
						50-minute session after the {fees.rebate} Medicare rebate. Without a plan, the full fee is
						{fees.sessionFee}. See <a href="/fees">fees &amp; availability</a> for more detail.
					</p>
				</Accordion>
				<Accordion question="Where are you located?">
					<p>
						I see clients in person in {site.locations.join(', ').replace(/, ([^,]*)$/, ' and $1')}, Melbourne, and via
						telehealth anywhere in Australia, with broad availability throughout the week.
					</p>
				</Accordion>
				<Accordion question="How do I book an appointment?">
					<p>
						To book, <a href={site.bookingLink}>choose a time for a free 15-minute connection call</a>, <a href="/contact">submit an enquiry form</a> or email
						<a href="mailto:{site.email}">{site.email}</a>.
					</p>
					<p>
						For GPs and other medical/health professionals, <a href={site.referralForm}>send a patient referral form</a>.
					</p>
				</Accordion>
			</div>
		</div>
	</div>
</section>

<style>
	.why-full {
		display: block;
	}
	.why-copy--full {
		max-width: none;
		gap: var(--space-10);
	}
	.why-copy--full :global(.why-intro) {
		max-width: 44rem;
	}
	@media (min-width: 52rem) {
		.pillars--row {
			grid-template-columns: repeat(3, minmax(0, 1fr));
			gap: var(--space-10);
		}
	}
	.meet {
		background: var(--color-section-white);
	}
	.meet-grid {
		display: grid;
		gap: var(--space-10);
		align-items: center;
	}
	.meet-portrait {
		width: min(100%, 26rem);
		aspect-ratio: 1;
		overflow: hidden;
		border-radius: clamp(2.5rem, 6vw, 5rem) var(--radius-lg) clamp(2.5rem, 6vw, 5rem) var(--radius-lg);
		background: color-mix(in oklab, var(--color-brand-warm), white 12%);
	}
	.meet-portrait img {
		width: 100%;
		height: 100%;
		object-fit: cover;
	}
	.meet-title {
		color: var(--color-brand-ink);
		font-weight: var(--font-weight-medium);
		font-size: var(--font-size-200);
	}
	.meet-chips {
		list-style: none;
		padding: 0;
		display: flex;
		flex-wrap: wrap;
		gap: var(--space-2);
	}
	.meet-actions {
		display: flex;
		flex-wrap: wrap;
		gap: var(--space-3);
		padding-top: var(--space-2);
	}
	@media (min-width: 52rem) {
		.meet-grid {
			grid-template-columns: minmax(0, 0.9fr) minmax(0, 1.1fr);
			gap: var(--space-16);
		}
	}
	.tag-btn,
	.show-more-btn {
		text-decoration: none;
	}
</style>
