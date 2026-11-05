<script lang="ts">
	let {
		name,
		size = 16,
		class: className = ''
	}: { name: 'arrow' | 'check' | 'chevron-down' | 'chevron-right' | 'chevron-left' | 'mail' | 'phone' | 'menu' | 'close' | 'pin' | 'clock' | 'video'; size?: number; class?: string } = $props();
</script>

<svg
	viewBox="0 0 24 24"
	width={size}
	height={size}
	fill="none"
	stroke="currentColor"
	stroke-width="1.8"
	stroke-linecap="round"
	stroke-linejoin="round"
	aria-hidden="true"
	class={className}
>
	{#if name === 'arrow'}<path d="M5 12h14"></path><path d="m13 5 7 7-7 7"></path>
	{:else if name === 'check'}<path d="M20 6 9 17l-5-5"></path>
	{:else if name === 'chevron-down'}<path d="m6 9 6 6 6-6"></path>
	{:else if name === 'chevron-right'}<path d="m9 6 6 6-6 6"></path>
	{:else if name === 'chevron-left'}<path d="m15 6-6 6 6 6"></path>
	{:else if name === 'mail'}<path d="M4 4h16a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2z"></path><path d="m22 6-10 7L2 6"></path>
	{:else if name === 'phone'}<path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.9 19.9 0 0 1-8.6-3.1 19.6 19.6 0 0 1-6-6 19.9 19.9 0 0 1-3.1-8.6A2 2 0 0 1 4 2h3a2 2 0 0 1 2 1.7c.1.9.3 1.8.6 2.6a2 2 0 0 1-.4 2.1l-1.2 1.2a16 16 0 0 0 6 6l1.2-1.2a2 2 0 0 1 2.1-.4c.8.3 1.7.5 2.6.6A2 2 0 0 1 22 16.9z"></path>
	{:else if name === 'menu'}<path d="M4 6h16"></path><path d="M4 12h16"></path><path d="M4 18h16"></path>
	{:else if name === 'close'}<path d="M18 6 6 18"></path><path d="m6 6 12 12"></path>
	{:else if name === 'pin'}<path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"></path><circle cx="12" cy="10" r="3"></circle>
	{:else if name === 'clock'}<circle cx="12" cy="12" r="10"></circle><path d="M12 6v6l4 2"></path>
	{:else if name === 'video'}<path d="m22 8-6 4 6 4V8Z"></path><rect x="2" y="6" width="14" height="12" rx="2"></rect>
	{/if}
</svg>
