<script lang="ts">
	import { enhance } from '$app/forms';
	import Seo from '#lib/components/Seo.svelte';
	import Icon from '#lib/components/Icon.svelte';
	import { site } from '#lib/data/site.ts';
	import '#lib/styles/contact.css';

	let { form } = $props();
	let submitting = $state(false);
	const values = $derived(form?.values ?? { name: '', email: '', message: '' });
	const errors = $derived<Record<string, string | undefined>>(form?.errors ?? {});
</script>

<Seo
	title="Contact"
	description="Book a free 15-minute connection call with Greylight Psychology. Telehealth and in-person sessions available Australia-wide."
/>

<div class="pg-contact">
	<div class="contact-page">
		<section class="section">
			<div class="container container-lg">
				<div class="layout-sidebar-form">
					<div class="flow" style="--flow-space: var(--space-5);">
						<p class="eyebrow">Contact</p>
						<h1 class="text-wrap-balance">Book a free 15-minute connection call.</h1>
						<p>
							Share your goals and preferred appointment type. We will discuss suitable next steps and
							answer practical questions about sessions, fees and rebates.
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

					{#if form?.success}
						<div class="surface-card success-card flow" role="status">
							<p class="eyebrow">Enquiry sent</p>
							<h2>Thanks, your enquiry is on its way.</h2>
							<p>We'll be in touch within 48 hours to arrange your free connection call.</p>
						</div>
					{:else}
						<form
							class="surface-card form flow"
							style="--flow-space: var(--space-4);"
							method="post"
							novalidate
							use:enhance={() => {
								submitting = true;
								return async ({ update }) => {
									await update({ reset: false });
									submitting = false;
								};
							}}
						>
							{#if form?.formError}
								<p class="form-alert error" role="alert">
									Sorry, your enquiry couldn't be sent right now. Please try again, or email
									<a href="mailto:{site.email}">{site.email}</a>.
								</p>
							{/if}
							<div class="field">
								<label for="name" class="field-label">Full name</label>
								<input id="name" type="text" name="name" placeholder="" required value={values.name} aria-invalid={!!errors.name} aria-describedby={errors.name ? 'name-error' : undefined} autocomplete="name" />
								{#if errors.name}<p class="field-error" id="name-error">{errors.name}</p>{/if}
							</div>
							<div class="field">
								<label for="email" class="field-label">Email address</label>
								<input id="email" type="email" name="email" placeholder="" required value={values.email} aria-invalid={!!errors.email} aria-describedby={errors.email ? 'email-error' : undefined} autocomplete="email" />
								{#if errors.email}<p class="field-error" id="email-error">{errors.email}</p>{/if}
							</div>
							<div class="field">
								<label for="message" class="field-label">Anything we should know before the call?</label>
								<textarea id="message" name="message" placeholder="" required rows="5" aria-invalid={!!errors.message} aria-describedby="message-meta{errors.message ? ' message-error' : ''}">{values.message}</textarea>
								<p class="field-meta" id="message-meta">Avoid including urgent safety concerns in this form.</p>
								{#if errors.message}<p class="field-error" id="message-error">{errors.message}</p>{/if}
							</div>
							<button class="btn primary md" type="submit" disabled={submitting}>{submitting ? 'Sending…' : 'Send enquiry'}</button>
						</form>
					{/if}
				</div>
			</div>
		</section>
	</div>
</div>
