<script lang="ts">
	import type { Shape, Tone } from '#lib/data/services.ts';
	let { shape, tone, size = 'md' }: { shape: Shape; tone: Tone; size?: 'sm' | 'md' | 'lg' } =
		$props();
</script>

<span class="mark mark-{size} shape-{shape} tone-{tone}" aria-hidden="true"></span>
