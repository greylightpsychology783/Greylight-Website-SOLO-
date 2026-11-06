<script lang="ts">
	import { afterNavigate } from '$app/navigation';
	import { site } from '#lib/data/site.ts';
	import MegaMenu from './MegaMenu.svelte';
	import Icon from './Icon.svelte';

	let scrolled = $state(false);
	let mobileOpen = $state(false);
	let mobileView = $state<'main' | 'help'>('main');
	let megaLocked = $state(false);

	const links = [
		{ href: '/about', label: 'About' },
		{ href: '/how-i-help', label: 'How I Help', mega: true },
		{ href: '/books', label: 'Books' },
		{ href: '/fees', label: 'Pricing' },
		{ href: '/contact', label: 'Contact' }
	];

	afterNavigate((nav) => {
		mobileOpen = false;
		mobileView = 'main';
		// Close the hover mega panel after a click-through until the pointer leaves.
		if (nav.type !== 'enter') megaLocked = true;
	});

	$effect(() => {
		document.documentElement.style.overflow = mobileOpen ? 'hidden' : '';
	});
</script>

<svelte:window onscroll={() => (scrolled = window.scrollY > 4)} onkeydown={(e) => e.key === 'Escape' && (mobileOpen = false)} />

<header class="site-header" class:is-scrolled={scrolled}>
	<nav class="container container-lg" aria-label="Main">
		<div class="nav-shell">
			<a class="brand" href="/" aria-label="Greylight Psychology home"><span class="brand-logo" aria-hidden="true"></span></a>
			<ul class="nav-links">
				{#each links as link (link.href)}
					{#if link.mega}
						<li class="nav-mega" class:mega-menu-locked={megaLocked} onpointerleave={() => (megaLocked = false)}>
							<a class="nav-mega-trigger" href={link.href} aria-haspopup="true"
								>{link.label} <span class="nav-mega-chevron" aria-hidden="true"><Icon name="chevron-down" size={14} /></span></a
							>
							<div class="mega-panel" role="region" aria-label="How I help">
								<div class="container container-lg"><MegaMenu /></div>
							</div>
						</li>
					{:else}
						<li><a href={link.href}>{link.label}</a></li>
					{/if}
				{/each}
			</ul>
			<div class="nav-actions">
				<span class="nav-refer-action"
					><a class="btn light-blue sm" href={site.referralForm}>Refer</a></span
				>
				<a class="btn primary sm" href={site.bookingLink}>Book a Call</a>
				<button
					type="button"
					class="nav-menu-toggle"
					aria-expanded={mobileOpen}
					aria-controls="mobile-nav-panel"
					onclick={() => {
						mobileOpen = !mobileOpen;
						mobileView = 'main';
					}}
				>
					<span class="visually-hidden">{mobileOpen ? 'Close menu' : 'Open menu'}</span>
					<Icon name={mobileOpen ? 'close' : 'menu'} size={20} />
				</button>
			</div>
		</div>
	</nav>
</header>

{#if mobileOpen}
	<div id="mobile-nav-panel" class="mobile-nav-overlay" role="dialog" aria-modal="true" aria-label="Menu">
		{#if mobileView === 'main'}
			<div class="mobile-nav-overlay-inner--main">
				<ul class="mobile-nav-links">
					<li><a class="mobile-nav-link" href="/">Home <span class="mobile-nav-link-arrow"><Icon name="chevron-right" size={18} /></span></a></li>
					{#each links as link (link.href)}
						<li>
							{#if link.mega}
								<button type="button" class="mobile-nav-link" onclick={() => (mobileView = 'help')}
									>{link.label} <span class="mobile-nav-link-arrow"><Icon name="chevron-right" size={18} /></span></button
								>
							{:else}
								<a class="mobile-nav-link" href={link.href}
									>{link.label} <span class="mobile-nav-link-arrow"><Icon name="chevron-right" size={18} /></span></a
								>
							{/if}
						</li>
					{/each}
				</ul>
				<div class="mobile-nav-main-footer">
					<a class="btn primary md" href={site.bookingLink}>Book a free connection call</a>
					<a class="btn light-blue md" href={site.referralForm}>GP &amp; health professional referral</a>
				</div>
			</div>
		{:else}
			<div class="mobile-nav-overlay-inner--mega">
				<div class="mobile-nav-services-header">
					<button type="button" class="mobile-nav-back" onclick={() => (mobileView = 'main')}
						><Icon name="chevron-left" size={16} /> Back</button
					>
				</div>
				<div class="mobile-nav-mega-scroll">
					<div class="container container-lg"><MegaMenu idPrefix="mobile-mega" /></div>
				</div>
			</div>
		{/if}
	</div>
{/if}
