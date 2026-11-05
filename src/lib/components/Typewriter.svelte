<script lang="ts">
	import { onMount } from 'svelte';
	let { phrases }: { phrases: string[] } = $props();
	let text = $state('');

	onMount(() => {
		if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
			text = phrases[0];
			return;
		}
		let i = 0;
		let pos = 0;
		let deleting = false;
		let timer: ReturnType<typeof setTimeout>;
		const tick = () => {
			const phrase = phrases[i];
			if (!deleting) {
				pos++;
				text = phrase.slice(0, pos);
				if (pos === phrase.length) {
					deleting = true;
					timer = setTimeout(tick, 2200);
					return;
				}
				timer = setTimeout(tick, 70);
			} else {
				pos--;
				text = phrase.slice(0, pos);
				if (pos === 0) {
					deleting = false;
					i = (i + 1) % phrases.length;
					timer = setTimeout(tick, 400);
					return;
				}
				timer = setTimeout(tick, 35);
			}
		};
		timer = setTimeout(tick, 400);
		return () => clearTimeout(timer);
	});
</script>

<p class="typewriter">
	<span class="sr-only">{phrases.join('. ')}</span>
	<span class="visible" aria-hidden="true"><span class="text">{text}</span><span class="caret"></span></span>
</p>
