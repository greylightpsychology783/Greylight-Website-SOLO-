<script lang="ts">
	import type { Snippet } from 'svelte';
	import Icon from './Icon.svelte';
	let { question, children }: { question: string; children: Snippet } = $props();
	let open = $state(false);
	const id = $derived('accordion-' + question.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, ''));
</script>

<div class="accordion" class:open>
	<button
		id="{id}-button"
		class="accordion-trigger"
		type="button"
		aria-expanded={open}
		aria-controls="{id}-panel"
		onclick={() => (open = !open)}
	>
		<span class="accordion-question">{question}</span>
		<span class="accordion-icon"><Icon name="chevron-down" size={20} /></span>
	</button>
	<div
		id="{id}-panel"
		class="accordion-panel"
		role="region"
		aria-labelledby="{id}-button"
		aria-hidden={!open}
	>
		<div class="accordion-content">{@render children()}</div>
	</div>
</div>
