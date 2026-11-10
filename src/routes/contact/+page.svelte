<script lang="ts">
	import Seo from '#lib/components/Seo.svelte';
	import Icon from '#lib/components/Icon.svelte';
	import EnquiryForm from '#lib/components/EnquiryForm.svelte';
	import { site } from '#lib/data/site.ts';
	import '#lib/styles/contact.css';

	let { form } = $props();
</script>

<Seo
	title="Contact"
	description="Send an enquiry to Greylight Psychology about fees, rebates or availability, or book a free 15-minute connection call. Telehealth and in-person sessions available Australia-wide."
/>

<div class="pg-contact">
	<div class="contact-page">
		<section class="section">
			<div class="container container-lg">
				<div class="layout-sidebar-form">
					<div class="flow" style="--flow-space: var(--space-5);">
						<p class="eyebrow">Contact</p>
						<h1 class="text-wrap-balance">Send an enquiry.</h1>
						<p>
							Have a question about fees, rebates, availability or whether I'm the right fit? Send me a
							message and I'll reply by email. Prefer to talk it through?
							<a href={site.bookingLink}>Book a free 15-minute connection call</a> instead.
						</p>
						<div class="meta flow" style="--flow-space: var(--space-3);">
							<div class="meta-row"><Icon name="mail" size={20} /> <a href="mailto:{site.email}">{site.email}</a></div>
							<div class="meta-row"><Icon name="phone" size={20} /> <p>Telehealth and in-person sessions available Australia-wide.</p></div>
						</div>
						<div id="crisis-support" class="surface-card notice flow">
							<h2>Emergency and crisis support</h2>
							<p>
								This website and contact form are not monitored for urgent risk situations. If you or
								someone else is in immediate danger, call <strong>000</strong> now or go to your
								nearest emergency department.
							</p>
							<p>For 24-hour crisis support, contact Lifeline on <strong>13 11 14</strong>.</p>
						</div>
					</div>

					<EnquiryForm {form} idPrefix="contact" />
				</div>
			</div>
		</section>
	</div>
</div>
