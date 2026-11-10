<script lang="ts">
	import { enhance } from '$app/forms';
	import Seo from '#lib/components/Seo.svelte';
	import Icon from '#lib/components/Icon.svelte';
	import UtmFields from '#lib/components/UtmFields.svelte';
	import { site, referralLimits } from '#lib/data/site.ts';
	import '#lib/styles/contact.css';

	let { form } = $props();
	let submitting = $state(false);
	let dragging = $state(false);
	let files = $state<File[]>([]);
	let fileInput = $state<HTMLInputElement>();

	const empty = { referrerName: '', referrerEmail: '', referrerPractice: '', patientFirstName: '', patientLastName: '', details: '' };
	const values = $derived<typeof empty>({ ...empty, ...(form?.values ?? {}) });
	const errors = $derived<Record<string, string | undefined>>(form?.errors ?? {});
	const accept = '.pdf,.doc,.docx,application/pdf,application/msword,application/vnd.openxmlformats-officedocument.wordprocessingml.document';

	const totalBytes = $derived(files.reduce((n, f) => n + f.size, 0));
	const fileError = $derived(
		files.length > referralLimits.maxFiles
			? `Please upload no more than ${referralLimits.maxFiles} files.`
			: totalBytes > referralLimits.maxTotalBytes
				? `Files must total ${referralLimits.maxTotalLabel} or less. Larger documents can be emailed to ${site.email}.`
				: files.some((f) => !/\.(pdf|docx?)$/i.test(f.name))
					? 'Please upload PDF, DOC or DOCX files only.'
					: ''
	);
	const formatSize = (b: number) => (b < 1024 * 1024 ? `${Math.max(1, Math.round(b / 1024))} KB` : `${(b / 1024 / 1024).toFixed(1)} MB`);

	function syncInput() {
		const dt = new DataTransfer();
		files.forEach((f) => dt.items.add(f));
		if (fileInput) fileInput.files = dt.files;
	}
	function addFiles(list: FileList | null) {
		if (!list) return;
		const seen = new Set(files.map((f) => f.name + f.size));
		files = [...files, ...[...list].filter((f) => !seen.has(f.name + f.size))];
		syncInput();
	}
	function removeFile(i: number) {
		files = files.filter((_, j) => j !== i);
		syncInput();
	}
</script>

<Seo
	title="Health Professional Referral"
	description="GPs, psychiatrists and other health professionals can securely refer a patient to Greylight Psychology and upload a Mental Health Treatment Plan."
/>

<div class="pg-contact pg-referral">
	<div class="contact-page">
		<section class="section">
			<div class="container container-lg">
				<div class="layout-sidebar-form">
					<div class="flow" style="--flow-space: var(--space-5);">
						<p class="eyebrow">Health professional referral</p>
						<h1 class="text-wrap-balance">Refer a patient to Greylight Psychology.</h1>
						<p>
							Share patient information and any supporting documents. PDF and Word files are accepted for
							Mental Health Treatment Plans, referral letters and relevant reports.
						</p>
						<div class="meta flow" style="--flow-space: var(--space-3);">
							<div class="meta-row"><Icon name="mail" size={20} /> <a href="mailto:{site.email}">{site.email}</a></div>
							<div class="meta-row"><Icon name="pin" size={20} /> <p>In person in {site.locations.join(', ').replace(/, ([^,]*)$/, ' and $1')}, and telehealth Australia-wide.</p></div>
						</div>
						<ul class="bullet-list referral-points">
							<li>Suitable for GPs, psychiatrists, paediatricians, allied health clinicians and care coordinators.</li>
							<li>Supporting files are uploaded with the referral form.</li>
							<li>Patient consent is required before clinical information is shared.</li>
						</ul>
					</div>

					{#if form?.success}
						<div class="surface-card success-card flow" role="status">
							<p class="eyebrow">Referral received</p>
							<h2>Thank you for your referral.</h2>
							<p>
								I'll be in touch with your patient to arrange their first appointment, and will contact you
								if I need anything further.
							</p>
							<p><a href="/health-professional-referral" data-sveltekit-reload>Submit another referral</a></p>
						</div>
					{:else}
						<form
							class="surface-card form flow"
							style="--flow-space: var(--space-4);"
							method="post"
							enctype="multipart/form-data"
							novalidate
							use:enhance={({ cancel }) => {
								if (fileError) return cancel();
								submitting = true;
								return async ({ update }) => {
									await update({ reset: false });
									submitting = false;
								};
							}}
						>
							<UtmFields />
							{#if form?.formError}
								<p class="form-alert error" role="alert">
									Sorry, your referral couldn't be sent right now. Please try again, or email it to
									<a href="mailto:{site.email}">{site.email}</a>.
								</p>
							{/if}

							<h2 class="form-section">Your details</h2>
							<div class="field-row">
								<div class="field">
									<label for="referrerName" class="field-label">Your name *</label>
									<input id="referrerName" name="referrerName" type="text" required autocomplete="name" value={values.referrerName} aria-invalid={!!errors.referrerName} />
									{#if errors.referrerName}<p class="field-error">{errors.referrerName}</p>{/if}
								</div>
								<div class="field">
									<label for="referrerEmail" class="field-label">Your email *</label>
									<input id="referrerEmail" name="referrerEmail" type="email" required autocomplete="email" value={values.referrerEmail} aria-invalid={!!errors.referrerEmail} />
									{#if errors.referrerEmail}<p class="field-error">{errors.referrerEmail}</p>{/if}
								</div>
							</div>
							<div class="field">
								<label for="referrerPractice" class="field-label">Practice and role (optional)</label>
								<input id="referrerPractice" name="referrerPractice" type="text" autocomplete="organization" placeholder="e.g. GP, Camberwell Medical Centre" value={values.referrerPractice} />
							</div>

							<h2 class="form-section">Patient details</h2>
							<div class="field-row">
								<div class="field">
									<label for="patientFirstName" class="field-label">First name *</label>
									<input id="patientFirstName" name="patientFirstName" type="text" required autocomplete="off" value={values.patientFirstName} aria-invalid={!!errors.patientFirstName} />
									{#if errors.patientFirstName}<p class="field-error">{errors.patientFirstName}</p>{/if}
								</div>
								<div class="field">
									<label for="patientLastName" class="field-label">Last name *</label>
									<input id="patientLastName" name="patientLastName" type="text" required autocomplete="off" value={values.patientLastName} aria-invalid={!!errors.patientLastName} />
									{#if errors.patientLastName}<p class="field-error">{errors.patientLastName}</p>{/if}
								</div>
							</div>
							<div class="field">
								<label for="details" class="field-label">Additional patient details (optional)</label>
								<textarea id="details" name="details" rows="4" aria-invalid={!!errors.details}>{values.details}</textarea>
								{#if errors.details}<p class="field-error">{errors.details}</p>{/if}
							</div>

							<div class="field">
								<span class="field-label" id="documents-label">Please upload documentation relevant to your patient (MHTP etc.)</span>
								<label
									class="dropzone"
									class:dragging
									ondragover={(e) => {
										e.preventDefault();
										dragging = true;
									}}
									ondragleave={() => (dragging = false)}
									ondrop={(e) => {
										e.preventDefault();
										dragging = false;
										addFiles(e.dataTransfer?.files ?? null);
									}}
								>
									<input
										bind:this={fileInput}
										class="visually-hidden"
										type="file"
										name="documents"
										multiple
										{accept}
										aria-labelledby="documents-label"
										aria-describedby="documents-meta"
										onchange={(e) => {
											const input = e.currentTarget;
											const picked = input.files;
											addFiles(picked);
										}}
									/>
									<span class="btn secondary sm" aria-hidden="true">Browse files</span>
									<span class="dropzone-hint">Drag and drop files here, or choose files.</span>
								</label>
								<p class="field-meta" id="documents-meta">
									PDF, DOC or DOCX. Up to {referralLimits.maxFiles} files, {referralLimits.maxTotalLabel} in total.
								</p>
								{#if files.length}
									<ul class="file-list">
										{#each files as f, i (f.name + f.size)}
											<li>
												<span class="file-name">{f.name}</span>
												<span class="file-size">{formatSize(f.size)}</span>
												<button type="button" class="file-remove" onclick={() => removeFile(i)} aria-label="Remove {f.name}"><Icon name="close" size={16} /></button>
											</li>
										{/each}
									</ul>
								{/if}
								{#if fileError || errors.documents}<p class="field-error" role="alert">{fileError || errors.documents}</p>{/if}
							</div>

							<div class="privacy-box flow" style="--flow-space: var(--space-2);">
								<h3>Privacy and confidentiality</h3>
								<p>
									Greylight Psychology takes the privacy of your patient's health information seriously.
									This referral form is submitted securely using SSL/TLS encryption and delivered directly to
									the practice inbox, where it is accessed only by authorised clinicians for intake and ongoing care.
								</p>
								<p>
									By submitting this form, you confirm you have obtained the patient's consent to share their
									Mental Health Treatment Plan and relevant health information with Greylight Psychology in
									accordance with the Privacy Act 1988 (Cth) and the Australian Privacy Principles. You can
									read the <a href="/privacy">privacy policy</a>.
								</p>
							</div>

							<div class="field">
								<label class="consent">
									<input type="checkbox" name="consent" required aria-invalid={!!errors.consent} />
									<span>I confirm I have patient consent to share this referral information.</span>
								</label>
								{#if errors.consent}<p class="field-error">{errors.consent}</p>{/if}
							</div>

							<button class="btn primary md" type="submit" disabled={submitting || !!fileError}>
								{submitting ? 'Sending…' : 'Submit referral'}
							</button>
						</form>
					{/if}
				</div>
			</div>
		</section>
	</div>
</div>

<style>
	.referral-points {
		max-width: 38rem;
		margin-top: var(--space-6);
	}
	.form-section {
		font-size: var(--font-size-500);
		letter-spacing: var(--tracking-snug);
	}
	.form-section:not(:first-of-type) {
		padding-top: var(--space-2);
	}
	.field-row {
		display: grid;
		gap: var(--space-4);
	}
	@media (min-width: 36rem) {
		.field-row {
			grid-template-columns: 1fr 1fr;
		}
	}
	.dropzone {
		display: flex;
		flex-wrap: wrap;
		align-items: center;
		gap: var(--space-3);
		padding: var(--space-5);
		border: 1.5px dashed var(--color-border);
		border-radius: var(--radius-md);
		background: var(--color-surface);
		cursor: pointer;
		transition:
			border-color var(--duration-fast) var(--ease-standard),
			background-color var(--duration-fast) var(--ease-standard);
	}
	.dropzone:hover,
	.dropzone.dragging {
		border-color: var(--color-primary);
		background: color-mix(in oklab, var(--color-primary), white 94%);
	}
	.dropzone:focus-within {
		outline: 3px solid color-mix(in oklab, var(--color-focus-ring), white 38%);
		outline-offset: 2px;
	}
	.dropzone-hint {
		font-size: var(--font-size-200);
		color: var(--color-text-muted);
	}
	.file-list {
		list-style: none;
		padding: 0;
		display: grid;
		gap: var(--space-2);
	}
	.file-list li {
		display: flex;
		align-items: center;
		gap: var(--space-3);
		max-width: none;
		padding: var(--space-2) var(--space-3);
		border: 1px solid var(--color-border);
		border-radius: var(--radius-sm);
		font-size: var(--font-size-200);
		color: var(--color-text);
	}
	.file-name {
		flex: 1;
		min-width: 0;
		overflow: hidden;
		text-overflow: ellipsis;
		white-space: nowrap;
	}
	.file-size {
		color: var(--color-text-muted);
	}
	.file-remove {
		display: inline-flex;
		padding: var(--space-1);
		border: 0;
		border-radius: var(--radius-xs);
		background: transparent;
		color: var(--color-text-muted);
	}
	.file-remove:hover {
		color: var(--color-danger);
	}
	.privacy-box {
		padding: var(--space-4);
		border-radius: var(--radius-md);
		background: color-mix(in oklab, var(--color-brand-warm), white 70%);
	}
	.privacy-box h3 {
		font-size: var(--font-size-400);
	}
	.privacy-box p {
		font-size: var(--font-size-200);
	}
	.consent {
		display: flex;
		align-items: flex-start;
		gap: var(--space-3);
		font-size: var(--font-size-200);
		font-weight: var(--font-weight-medium);
		color: var(--color-brand-ink);
		cursor: pointer;
	}
	.consent input {
		width: 1.15rem;
		height: 1.15rem;
		margin-top: 0.15rem;
		flex-shrink: 0;
		accent-color: var(--color-primary);
	}
</style>
