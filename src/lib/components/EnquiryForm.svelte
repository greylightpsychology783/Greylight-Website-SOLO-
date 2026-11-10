<script lang="ts">
	import { enhance } from '$app/forms';
	import UtmFields from './UtmFields.svelte';
	import { site } from '#lib/data/site.ts';

	interface EnquiryState {
		success?: boolean;
		formError?: boolean;
		values?: { name: string; email: string; message: string };
		errors?: Record<string, string | undefined>;
	}

	let {
		form,
		idPrefix = 'enquiry',
		action = undefined,
		messageLabel = 'How can I help?'
	}: { form?: EnquiryState | null; idPrefix?: string; action?: string; messageLabel?: string } = $props();

	let submitting = $state(false);
	const values = $derived(form?.values ?? { name: '', email: '', message: '' });
	const errors = $derived<Record<string, string | undefined>>(form?.errors ?? {});
	const id = (k: string) => `${idPrefix}-${k}`;
</script>

{#if form?.success}
	<div class="surface-card success-card flow" role="status">
		<p class="eyebrow">Enquiry sent</p>
		<h2>Thanks, your enquiry is on its way.</h2>
		<p>I'll reply by email within 48 hours.</p>
	</div>
{:else}
	<form
		class="surface-card form flow"
		style="--flow-space: var(--space-4);"
		method="post"
		{action}
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
		<UtmFields />
		<div class="field">
			<label for={id('name')} class="field-label">Full name</label>
			<input id={id('name')} type="text" name="name" required value={values.name} aria-invalid={!!errors.name} aria-describedby={errors.name ? id('name-error') : undefined} autocomplete="name" />
			{#if errors.name}<p class="field-error" id={id('name-error')}>{errors.name}</p>{/if}
		</div>
		<div class="field">
			<label for={id('email')} class="field-label">Email address</label>
			<input id={id('email')} type="email" name="email" required value={values.email} aria-invalid={!!errors.email} aria-describedby={errors.email ? id('email-error') : undefined} autocomplete="email" />
			{#if errors.email}<p class="field-error" id={id('email-error')}>{errors.email}</p>{/if}
		</div>
		<div class="field">
			<label for={id('message')} class="field-label">{messageLabel}</label>
			<textarea id={id('message')} name="message" required rows="5" aria-invalid={!!errors.message} aria-describedby="{id('message-meta')}{errors.message ? ` ${id('message-error')}` : ''}">{values.message}</textarea>
			<p class="field-meta" id={id('message-meta')}>Avoid including urgent safety concerns in this form.</p>
			{#if errors.message}<p class="field-error" id={id('message-error')}>{errors.message}</p>{/if}
		</div>
		<button class="btn primary md" type="submit" disabled={submitting}>{submitting ? 'Sending…' : 'Send enquiry'}</button>
	</form>
{/if}
