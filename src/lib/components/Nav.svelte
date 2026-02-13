<script lang="ts">
	import { page } from '$app/stores';
	import { onMount } from 'svelte';

	let scrolled = false;
	let mobileMenuOpen = false;

	onMount(() => {
		const handleScroll = () => {
			scrolled = window.scrollY > 20;
		};
		window.addEventListener('scroll', handleScroll);
		return () => window.removeEventListener('scroll', handleScroll);
	});

	const links = [
		{ href: '/', label: 'Home' },
		{ href: '/projects', label: 'Projects' },
		{ href: '/about', label: 'About' },
		{ href: '/services', label: 'Services' },
		{ href: '/contact', label: 'Contact' }
	];
</script>

<nav
	class="fixed top-0 left-0 right-0 z-50 transition-all duration-700 {scrolled
		? 'bg-white/90 backdrop-blur-2xl shadow-sm border-b border-gray-100'
		: 'bg-transparent'}"
>
	<div class="max-w-[1400px] mx-auto px-6 lg:px-8">
		<div class="flex items-center justify-between h-14 lg:h-16">
			<!-- Minimal Logo -->
			<a href="/" class="flex items-center gap-2.5 group">
				<div
					class="w-8 h-8 bg-charcoal rounded-lg flex items-center justify-center transform transition-all duration-300 group-hover:scale-110 group-hover:bg-accent"
				>
					<span class="text-white font-bold text-sm">DW</span>
				</div>
				<div class="hidden sm:block">
					<div class="text-xs font-bold tracking-tight text-charcoal leading-none">
						<span class="font-extrabold">DON WALLET</span> CONSTRUCTION
					</div>
					<div class="text-[9px] tracking-[0.15em] text-gray-400 uppercase leading-none mt-0.5">
						Company Limited
					</div>
				</div>
			</a>

			<!-- Desktop Nav - Ultra Clean -->
			<div class="hidden md:flex items-center gap-0.5">
				{#each links as link}
					<a
						href={link.href}
						class="px-4 py-1.5 text-[13px] font-medium tracking-wide transition-all duration-300 rounded-full {$page
							.url.pathname === link.href
							? 'text-charcoal bg-gray-100'
							: 'text-gray-500 hover:text-charcoal hover:bg-gray-50'}"
					>
						{link.label}
					</a>
				{/each}
			</div>

			<!-- Mobile Menu Button -->
			<button
				class="md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
				on:click={() => (mobileMenuOpen = !mobileMenuOpen)}
				aria-label="Toggle menu"
			>
				<svg class="w-5 h-5 text-charcoal" fill="none" stroke="currentColor" viewBox="0 0 24 24">
					{#if mobileMenuOpen}
						<path
							stroke-linecap="round"
							stroke-linejoin="round"
							stroke-width="2"
							d="M6 18L18 6M6 6l12 12"
						/>
					{:else}
						<path
							stroke-linecap="round"
							stroke-linejoin="round"
							stroke-width="2"
							d="M4 6h16M4 12h16M4 18h16"
						/>
					{/if}
				</svg>
			</button>
		</div>
	</div>

	<!-- Mobile Menu -->
	{#if mobileMenuOpen}
		<div class="md:hidden bg-white/95 backdrop-blur-2xl border-t border-gray-100 animate-fadeIn">
			<div class="px-6 py-4 space-y-1">
				{#each links as link}
					<a
						href={link.href}
						class="block px-4 py-2.5 text-sm font-medium tracking-wide transition-all duration-300 rounded-xl {$page
							.url.pathname === link.href
							? 'text-charcoal bg-gray-100'
							: 'text-gray-500 hover:text-charcoal hover:bg-gray-50'}"
						on:click={() => (mobileMenuOpen = false)}
					>
						{link.label}
					</a>
				{/each}
			</div>
		</div>
	{/if}
</nav>
