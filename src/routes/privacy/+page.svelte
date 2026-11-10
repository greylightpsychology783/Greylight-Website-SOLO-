<script lang="ts">
	import Seo from '#lib/components/Seo.svelte';
	import { site } from '#lib/data/site.ts';

	const updated = 'November 2026';
	/** Generated from this page by `npm run pdf:privacy`. Regenerate whenever the policy changes. */
	const pdfPath = '/docs/greylight-privacy-policy.pdf';

	const sections = [
		{ id: 'about', title: 'About this policy' },
		{ id: 'collect', title: 'Information I collect' },
		{ id: 'anonymity', title: 'Anonymity and pseudonyms' },
		{ id: 'how', title: 'How information is collected' },
		{ id: 'why', title: 'Why I collect it' },
		{ id: 'software', title: 'Practice software, session recordings and AI' },
		{ id: 'disclosure', title: 'Use and disclosure' },
		{ id: 'overseas', title: 'Overseas disclosure' },
		{ id: 'security', title: 'Storage and security' },
		{ id: 'breaches', title: 'Data breaches' },
		{ id: 'retention', title: 'How long records are kept' },
		{ id: 'access', title: 'Access and correction' },
		{ id: 'website', title: 'This website, cookies and analytics' },
		{ id: 'automated', title: 'Automated decision-making' },
		{ id: 'complaints', title: 'Complaints' },
		{ id: 'changes', title: 'Changes to this policy' },
		{ id: 'contact', title: 'Contact' }
	];
</script>

<Seo
	title="Privacy Policy"
	description="How Greylight Psychology collects, uses, discloses and protects your personal and health information under the Privacy Act 1988 (Cth) and the Health Records Act 2001 (Vic)."
/>

<div class="pg-privacy">
	<section class="page-hero page-hero--compact">
		<div class="container container-md">
			<div class="hero-text flow" style="--flow-space: var(--space-5);">
				<img class="print-only print-logo" src="/brand/greylight-logo.svg" alt="Greylight Psychology" />
				<h1>Privacy policy</h1>
				<p>
					How I collect, use, disclose and protect your personal and health information. Last updated
					{updated}.
				</p>
				<div class="hero-actions no-print">
					<a class="btn primary md" href={pdfPath} target="_blank" rel="noopener">View PDF</a>
				</div>
			</div>
		</div>
	</section>

	<section class="section section-tight">
		<div class="container container-lg">
			<div class="policy-layout">
				<nav class="toc surface-card no-print" aria-label="Contents">
					<p class="label-eyebrow">Contents</p>
					<ol>
						{#each sections as s, i (s.id)}<li><a href="#{s.id}">{i + 1}. {s.title}</a></li>{/each}
					</ol>
				</nav>

				<article class="policy flow">
					<section id="about">
						<h2>1. About this policy</h2>
						<p>
							This privacy policy explains how Jake J Ciminelli (ABN 50 779 562 383), trading as Greylight
							Psychology, collects, holds, uses and discloses your personal information, including health
							information. In this policy, "I", "me" and "my" refer to me and my practice.
						</p>
						<p>
							I handle personal information in accordance with the <em>Privacy Act 1988</em> (Cth) and the
							Australian Privacy Principles (APPs), the <em>Health Records Act 2001</em> (Vic) and its Health
							Privacy Principles, and my professional obligations of confidentiality as a registered
							psychologist.
						</p>
					</section>

					<section id="collect">
						<h2>2. Information I collect</h2>
						<p>The kinds of personal information I may collect and hold include:</p>
						<ul class="bullet-list">
							<li>your name, date of birth, address, phone number and email address</li>
							<li>emergency contact details</li>
							<li>Medicare number, Mental Health Treatment Plan and referral details, and private health insurance details</li>
							<li>WorkSafe Victoria (WorkCover) or TAC claim numbers and case manager details, where relevant</li>
							<li>medical, psychological and family history, and other health information you share with me</li>
							<li>session notes, assessments, outcome measures, treatment plans and correspondence</li>
							<li>reports and referrals from other health professionals</li>
							<li>appointment and booking history, including free connection calls booked online</li>
							<li>billing and payment records</li>
							<li>session audio, transcripts and draft notes, where you consent to a session being recorded (see section 6)</li>
							<li>reflections, completed tasks and questionnaire responses (such as the K10, DASS-21, PHQ-9 or GAD-7) that you submit through the client app or secure assessment links</li>
							<li>information you submit through this website's contact or referral forms</li>
						</ul>
						<p>
							Health information is sensitive information under the Privacy Act. I only collect it with your
							consent, or where otherwise permitted or required by law, and only where it is reasonably
							necessary to provide my services.
						</p>
					</section>

					<section id="anonymity">
						<h2>3. Anonymity and pseudonyms</h2>
						<p>
							You can make a general enquiry without identifying yourself, or using a pseudonym. To provide
							psychological treatment, process Medicare rebates or bill an insurer or scheme, I need to know
							who you are, so it isn't practical to receive ongoing care anonymously.
						</p>
					</section>

					<section id="how">
						<h2>4. How information is collected</h2>
						<p>Where possible, I collect information directly from you, for example when you:</p>
						<ul class="bullet-list">
							<li>contact me by phone, email or through this website</li>
							<li>book an appointment or a free connection call online through Halaxy</li>
							<li>complete intake, consent or assessment forms</li>
							<li>attend sessions in person or by telehealth</li>
							<li>use the InterSession client app or complete an assessment through a secure link</li>
						</ul>
						<p>
							I may also receive information from others, such as your GP, psychiatrist or other treating
							practitioners (including through the health professional referral form on this website), your
							WorkSafe or TAC case manager, or a parent or guardian. I only do this with your consent or where
							it is otherwise permitted by law.
						</p>
					</section>

					<section id="why">
						<h2>5. Why I collect it</h2>
						<p>I collect, hold and use your information to:</p>
						<ul class="bullet-list">
							<li>assess your needs and provide psychological services</li>
							<li>keep accurate and complete clinical records</li>
							<li>manage bookings and send appointment confirmations and reminders</li>
							<li>communicate with you about appointments, fees and your care</li>
							<li>process Medicare rebates and invoices, and manage WorkSafe, TAC or insurer claims</li>
							<li>communicate with your referrer and other treating practitioners, with your consent</li>
							<li>meet my legal, regulatory and professional obligations</li>
							<li>respond to enquiries made through this website</li>
						</ul>
					</section>

					<section id="software">
						<h2>6. Practice software, session recordings and AI</h2>
						<h3>Practice management (Halaxy)</h3>
						<p>
							I use <strong>Halaxy</strong> (Halaxy Pty Ltd), an Australian practice management system, to keep your
							client record and to manage appointments and online bookings, confirmations and reminders,
							invoices and payments, and claims to Medicare, health funds, WorkSafe and the TAC.
						</p>
						<ul class="bullet-list">
							<li>Halaxy stores its data in Australia, encrypted at rest and in transit, with daily backups.</li>
							<li>Card details are held by Halaxy's payment partners, not by Halaxy or by me.</li>
							<li>
								Halaxy may use de-identified, aggregated data (which does not identify you) to analyse and improve
								its services. Halaxy states that it never sells identifiable personal information.
							</li>
						</ul>
						<h3>Clinical notes and between-session support (InterSession)</h3>
						<p>
							I use <strong>InterSession</strong> (InterSession Group Pty Ltd), an Australian practice platform built
							for mental health professionals, to keep clinical notes, draft session notes and documents, send
							questionnaires, and share between-session materials with you through its client app.
						</p>
						<h3>Session recordings</h3>
						<ul class="bullet-list">
							<li>
								I only record a session with your consent. You can say no, or change your mind at any time, and it
								won't affect your care.
							</li>
							<li>
								Audio is used only to create a transcript. It is processed briefly by InterSession's transcription
								providers and <strong>is not stored</strong> once the transcript is made.
							</li>
							<li>The transcript and the notes I finalise form part of your clinical record.</li>
						</ul>
						<h3>AI-assisted notes and materials</h3>
						<ul class="bullet-list">
							<li>
								InterSession uses artificial intelligence to draft transcripts, session notes, summaries, letters and
								between-session materials from the record.
							</li>
							<li>
								I review, edit and approve everything before it becomes part of your record or is shared with you.
								AI does not make clinical decisions; I do.
							</li>
							<li>Your information is <strong>never used to train AI models</strong>.</li>
						</ul>
						<h3>The client app</h3>
						<p>
							If you use the InterSession client app, you sign in with a secure link or one-time code sent to your
							email. I only see what you choose to submit. The app has no third-party analytics, tracking or
							advertising, and any voice-to-text reflections are converted on your own device, so no audio is sent.
						</p>
						<p>
							Using recordings, AI-assisted notes or the client app is optional. Let me know if you'd prefer I don't
							use them, and I'll keep notes the traditional way.
						</p>
					</section>

					<section id="disclosure">
						<h2>7. Use and disclosure</h2>
						<p>
							Everything discussed in therapy is confidential. I only use or disclose your information for the
							purpose it was collected, for a directly related purpose you would reasonably expect, or with
							your consent. I may disclose information without your consent only where permitted or required
							by law, for example:
						</p>
						<ul class="bullet-list">
							<li>where there is a serious threat to your life, health or safety, or that of another person</li>
							<li>under mandatory reporting obligations, such as child protection</li>
							<li>in response to a subpoena, court order or other legal requirement</li>
							<li>to Medicare, WorkSafe Victoria, the TAC or your insurer, to the extent needed to process a claim you have made</li>
							<li>to regulators such as the Psychology Board of Australia and AHPRA where required</li>
						</ul>
						<p>
							I also use trusted service providers to run my practice, such as practice management, telehealth,
							email and website hosting services. They handle information only to provide those services to me,
							under confidentiality and security obligations. I do not sell, rent or trade personal information,
							and I do not use it for direct marketing.
						</p>
					</section>

					<section id="overseas">
						<h2>8. Overseas disclosure</h2>
						<p>
							Your records are stored in Australia: your client, appointment and billing records in Halaxy, and
							your clinical notes on InterSession's servers in Sydney. Halaxy only sends information overseas
							through integrations I choose to connect, such as accounting software. Some of my other service
							providers process information outside Australia, mainly in the <strong>United States</strong>:
						</p>
						<ul class="bullet-list">
							<li>
								<strong>Session transcription:</strong> recorded audio is transcribed by Soniox (with Deepgram as a
								backup) in the United States. Audio is processed transiently and not stored.
							</li>
							<li>
								<strong>AI-assisted notes:</strong> transcripts and notes may be sent to OpenAI in the United States to
								generate draft documentation. OpenAI does not train on this data, but may keep it for up to
								approximately 30 days for abuse monitoring before deleting it.
							</li>
							<li>
								<strong>This website:</strong> the site is hosted by Vercel, and messages and attachments sent through its
								contact and referral forms are delivered to my practice inbox by Resend. Both may process this
								information in the United States and other countries where they operate.
							</li>
						</ul>
						<p>
							Before using an overseas provider, I take reasonable steps to make sure it handles personal
							information in a way that is consistent with the APPs. If you would prefer not to send
							information through the website, you can email me directly instead.
						</p>
					</section>

					<section id="security">
						<h2>9. Storage and security</h2>
						<p>I take reasonable steps to protect your information from misuse, interference, loss, and unauthorised access, modification or disclosure, including:</p>
						<ul class="bullet-list">
							<li>storing client, appointment and billing records in Halaxy, on Australian servers, encrypted and backed up daily</li>
							<li>storing clinical notes in InterSession, on Australian servers, encrypted at rest (AES-256) and in transit (TLS 1.3)</li>
							<li>not keeping session audio once it has been transcribed</li>
							<li>using an encrypted telehealth platform</li>
							<li>keeping any paper records in a locked filing cabinet</li>
							<li>sending website form submissions over an encrypted (SSL/TLS) connection</li>
							<li>limiting access to your clinical records to me, and to service providers only as needed to operate their systems</li>
						</ul>
					</section>

					<section id="breaches">
						<h2>10. Data breaches</h2>
						<p>
							If a data breach occurs that is likely to result in serious harm, I will notify you and the Office
							of the Australian Information Commissioner (OAIC) in line with the Notifiable Data Breaches scheme,
							and take steps to contain the breach and reduce any harm.
						</p>
					</section>

					<section id="retention">
						<h2>11. How long records are kept</h2>
						<p>
							As required by the <em>Health Records Act 2001</em> (Vic), I keep health records for at least
							7 years after my last contact with you or, if you were under 18 when I last provided a service,
							until you turn 25, whichever is later. After that, records are securely destroyed or de-identified.
						</p>
						<p>
							Website enquiries from people who don't go on to become clients are deleted once they're no
							longer needed.
						</p>
					</section>

					<section id="access">
						<h2>12. Access and correction</h2>
						<p>
							You can ask to access the personal information I hold about you, or ask me to correct information
							you believe is inaccurate, out of date, incomplete or misleading. Please email
							<a href="mailto:{site.email}">{site.email}</a>. There is no charge to make a request, and I will
							respond within 30 days.
						</p>
						<p>
							In limited circumstances the law allows me to refuse access, for example where giving access
							would pose a serious threat to someone's life, health or safety. If I refuse, I will explain why in
							writing and let you know how to complain.
						</p>
					</section>

					<section id="website">
						<h2>13. This website, cookies and analytics</h2>
						<p>
							This website does not use analytics, advertising or tracking cookies. Like most websites, the host
							automatically records basic technical information (such as your IP address and browser type) to
							keep the site secure and running. Fonts are loaded from Google Fonts, which means your browser
							shares your IP address with Google.
						</p>
						<p>
							Some links to this website, such as those in online advertisements, include campaign tags that
							show which ad or link you followed. Your browser keeps these tags only for your current visit,
							and if you send an enquiry or referral, they are included with it so I can see which campaign
							it came from. No advertising pixels or tracking scripts are used, and this information is not
							shared with advertising platforms.
						</p>
						<p>
							Please don't include urgent safety concerns in website forms. They are not monitored for urgent
							situations. If you or someone else is in immediate danger, call 000.
						</p>
					</section>

					<section id="automated">
						<h2>14. Automated decision-making</h2>
						<p>
							I use AI to help draft documentation (see section 6), but I do not use computer programs, including
							artificial intelligence, to make decisions, or to substantially and directly assist in making
							decisions, that could reasonably be expected to significantly affect your rights or interests.
							Every draft is reviewed by me, and all clinical decisions about your care are made by me.
						</p>
					</section>

					<section id="complaints">
						<h2>15. Complaints</h2>
						<p>
							If you have a concern about how your information has been handled, please contact me first so I can
							try to resolve it. I will acknowledge your complaint promptly and respond within 30 days.
						</p>
						<p>If you're not satisfied with my response, you can contact:</p>
						<ul class="bullet-list">
							<li>
								the <strong>Office of the Australian Information Commissioner</strong>:
								<a href="https://www.oaic.gov.au" target="_blank" rel="noopener noreferrer">oaic.gov.au</a>, 1300 363 992
							</li>
							<li>
								the <strong>Health Complaints Commissioner (Victoria)</strong>, for health information handled under the
								<em>Health Records Act 2001</em> (Vic):
								<a href="https://hcc.vic.gov.au" target="_blank" rel="noopener noreferrer">hcc.vic.gov.au</a>, 1300 582 113
							</li>
						</ul>
					</section>

					<section id="changes">
						<h2>16. Changes to this policy</h2>
						<p>
							I review this policy regularly and may update it to reflect changes in the law or my practice. The
							current version is always available on this page, and the date at the top shows when it was last updated.
						</p>
					</section>

					<section id="contact">
						<h2>17. Contact</h2>
						<address class="contact-card surface-card">
							<strong>Jake J Ciminelli</strong><br />
							Greylight Psychology<br />
							Email: <a href="mailto:{site.email}">{site.email}</a><br />
							Website: <a href={site.url}>greylightpsychology.com.au</a>
						</address>
					</section>
				</article>
			</div>
		</div>
	</section>
</div>

<style>
	.policy-layout {
		display: grid;
		gap: var(--space-8);
		align-items: start;
	}
	@media (min-width: 62rem) {
		.policy-layout {
			grid-template-columns: 16rem minmax(0, 1fr);
			gap: var(--space-12);
		}
		.toc {
			position: sticky;
			top: calc(var(--nav-height) + var(--space-6));
		}
	}
	.toc {
		padding: var(--space-5);
	}
	.toc ol {
		list-style: none;
		padding: 0;
		margin-top: var(--space-3);
		display: grid;
		gap: var(--space-1);
	}
	.toc li {
		max-width: none;
	}
	.toc a {
		font-size: var(--font-size-200);
		color: var(--color-text-muted);
		text-decoration: none;
	}
	.toc a:hover {
		color: var(--color-primary-active);
		text-decoration: underline;
	}
	.policy {
		--flow-space: var(--space-10);
		max-width: 46rem;
	}
	.policy section {
		scroll-margin-top: calc(var(--nav-height) + var(--space-6));
	}
	.policy section > :global(* + *) {
		margin-top: var(--space-4);
	}
	.policy h2 {
		font-size: var(--font-size-600);
		letter-spacing: var(--tracking-snug);
		padding-top: var(--space-4);
		border-top: 1px solid var(--color-border);
	}
	.policy h3 {
		font-family: var(--font-family-base);
		font-size: var(--font-size-300);
		font-weight: var(--font-weight-semibold);
		padding-top: var(--space-2);
	}
	.policy p,
	.policy li {
		color: var(--color-text);
	}
	.contact-card {
		display: block;
		font-style: normal;
		padding: var(--space-5);
		line-height: 1.8;
	}
	.print-only {
		display: none;
	}
	@media print {
		:global(.site-header),
		:global(.site-footer),
		.no-print {
			display: none !important;
		}
		:global(main) {
			padding-top: 0 !important;
		}
		.print-only {
			display: block;
		}
		@page {
			size: A4;
			margin: 16mm 18mm;
		}
		:global(html) {
			font-size: 14px !important;
			-webkit-print-color-adjust: exact;
			print-color-adjust: exact;
		}
		.print-logo {
			width: 9rem;
			margin: 0 auto var(--space-4);
		}
		:global(.section) {
			padding-block: var(--space-4) !important;
		}
		.policy h2 {
			break-after: avoid-page;
		}
		.policy-layout {
			display: block;
		}
		.policy {
			max-width: none;
		}
		:global(.page-hero) {
			padding-top: var(--space-6) !important;
			background: none !important;
		}
	}
</style>
