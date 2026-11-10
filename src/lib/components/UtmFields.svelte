<script lang="ts">
	import { onMount } from 'svelte';
	import { UTM_KEYS, emptyUtm, getUtm, captureUtm } from '#lib/utm.ts';

	/** Hidden campaign-tag fields for any enquiry form. Filled in the browser from this visit's UTMs. */
	let utm = $state(emptyUtm());
	onMount(() => {
		captureUtm();
		utm = getUtm();
	});
</script>

{#each UTM_KEYS as key (key)}
	<input type="hidden" name={key} value={utm[key]} />
{/each}
