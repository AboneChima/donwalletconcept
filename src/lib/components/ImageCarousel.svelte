<script lang="ts">
	import { onMount } from 'svelte';
	import { fade, fly } from 'svelte/transition';

	export let images: { src: string; alt: string }[] = [];

	let currentIndex = 0;
	let autoplayInterval: any;
	let isModalOpen = false;
	let modalImage = '';

	onMount(() => {
		startAutoplay();
		return () => stopAutoplay();
	});

	function startAutoplay() {
		autoplayInterval = setInterval(() => {
			next();
		}, 5000);
	}

	function stopAutoplay() {
		if (autoplayInterval) clearInterval(autoplayInterval);
	}

	function next() {
		currentIndex = (currentIndex + 1) % images.length;
	}

	function prev() {
		currentIndex = (currentIndex - 1 + images.length) % images.length;
	}

	function goTo(index: number) {
		currentIndex = index;
		stopAutoplay();
		startAutoplay();
	}

	function openModal(src: string) {
		modalImage = src;
		isModalOpen = true;
	}

	function closeModal() {
		isModalOpen = false;
	}
</script>

<div class="relative max-w-4xl mx-auto">
	<!-- Main Image Display -->
	<div class="relative aspect-[16/10] rounded-2xl overflow-hidden shadow-xl bg-white">
		{#each images as image, i}
			{#if i === currentIndex}
				<button
					on:click={() => openModal(image.src)}
					class="absolute inset-0 cursor-pointer group"
					in:fade={{ duration: 600 }}
				>
					<img
						src={image.src}
						alt={image.alt}
						class="w-full h-full object-contain p-4 transition-transform duration-500 group-hover:scale-105"
					/>
					<!-- Hover Overlay -->
					<div
						class="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300 flex items-center justify-center"
					>
						<div
							class="opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-white/90 backdrop-blur-sm px-4 py-2 rounded-full"
						>
							<span class="text-sm font-medium text-charcoal">Click to view</span>
						</div>
					</div>
				</button>
			{/if}
		{/each}

		<!-- Navigation Arrows -->
		{#if images.length > 1}
			<button
				on:click={prev}
				class="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-white/90 hover:bg-white rounded-full flex items-center justify-center shadow-lg transition-all duration-300 hover:scale-110"
				aria-label="Previous"
			>
				<svg class="w-5 h-5 text-charcoal" fill="none" stroke="currentColor" viewBox="0 0 24 24">
					<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" />
				</svg>
			</button>

			<button
				on:click={next}
				class="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-white/90 hover:bg-white rounded-full flex items-center justify-center shadow-lg transition-all duration-300 hover:scale-110"
				aria-label="Next"
			>
				<svg class="w-5 h-5 text-charcoal" fill="none" stroke="currentColor" viewBox="0 0 24 24">
					<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
				</svg>
			</button>
		{/if}
	</div>

	<!-- Dots Indicator -->
	{#if images.length > 1}
		<div class="flex justify-center gap-2 mt-6">
			{#each images as _, i}
				<button
					on:click={() => goTo(i)}
					class="w-2 h-2 rounded-full transition-all duration-300 {i === currentIndex
						? 'bg-accent w-8'
						: 'bg-gray-300 hover:bg-gray-400'}"
					aria-label="Go to slide {i + 1}"
				/>
			{/each}
		</div>
	{/if}

	<!-- Thumbnails -->
	{#if images.length > 1}
		<div class="flex gap-3 mt-6 justify-center">
			{#each images as image, i}
				<button
					on:click={() => goTo(i)}
					class="relative w-20 h-20 rounded-lg overflow-hidden border-2 transition-all duration-300 {i ===
					currentIndex
						? 'border-accent scale-110'
						: 'border-gray-200 hover:border-gray-400 opacity-60 hover:opacity-100'}"
				>
					<img src={image.src} alt={image.alt} class="w-full h-full object-cover" />
				</button>
			{/each}
		</div>
	{/if}
</div>

<!-- Modal Overlay -->
{#if isModalOpen}
	<div
		class="fixed inset-0 z-[100] bg-black/95 flex items-center justify-center p-4"
		on:click={closeModal}
		transition:fade={{ duration: 300 }}
		role="button"
		tabindex="0"
	>
		<button
			on:click={closeModal}
			class="absolute top-4 right-4 w-12 h-12 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center transition-colors"
			aria-label="Close"
		>
			<svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
				<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
			</svg>
		</button>

		<div
			class="max-w-5xl max-h-[90vh] w-full"
			on:click|stopPropagation
			role="button"
			tabindex="0"
			in:fly={{ y: 50, duration: 400 }}
		>
			<img src={modalImage} alt="Certificate" class="w-full h-full object-contain" />
		</div>
	</div>
{/if}
