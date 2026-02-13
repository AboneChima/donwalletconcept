<script lang="ts">
	import { fade, scale } from 'svelte/transition';
	import { createEventDispatcher } from 'svelte';

	export let images: string[] = [];
	export let currentIndex: number = 0;
	export let isOpen: boolean = false;

	const dispatch = createEventDispatcher();

	function close() {
		dispatch('close');
	}

	function next() {
		currentIndex = (currentIndex + 1) % images.length;
	}

	function prev() {
		currentIndex = (currentIndex - 1 + images.length) % images.length;
	}

	function handleKeydown(e: KeyboardEvent) {
		if (!isOpen) return;
		if (e.key === 'Escape') close();
		if (e.key === 'ArrowRight') next();
		if (e.key === 'ArrowLeft') prev();
	}
</script>

<svelte:window on:keydown={handleKeydown} />

{#if isOpen}
	<div
		class="fixed inset-0 z-[100] flex items-center justify-center bg-black/95 p-4"
		transition:fade={{ duration: 300 }}
		on:click={close}
		role="button"
		tabindex="0"
	>
		<!-- Close Button -->
		<button
			on:click={close}
			class="absolute top-4 right-4 w-12 h-12 flex items-center justify-center bg-white/10 hover:bg-white/20 rounded-full transition-colors z-10"
			aria-label="Close"
		>
			<svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
				<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
			</svg>
		</button>

		<!-- Image -->
		<div
			class="relative max-w-7xl max-h-[90vh] w-full"
			on:click|stopPropagation
			role="button"
			tabindex="0"
		>
			<img
				src={images[currentIndex]}
				alt="Project detail"
				class="w-full h-full object-contain"
				transition:scale={{ duration: 300 }}
			/>

			<!-- Navigation -->
			{#if images.length > 1}
				<button
					on:click={prev}
					class="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 flex items-center justify-center bg-white/10 hover:bg-white/20 rounded-full transition-colors"
					aria-label="Previous"
				>
					<svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
						<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" />
					</svg>
				</button>

				<button
					on:click={next}
					class="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 flex items-center justify-center bg-white/10 hover:bg-white/20 rounded-full transition-colors"
					aria-label="Next"
				>
					<svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
						<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
					</svg>
				</button>

				<!-- Counter -->
				<div
					class="absolute bottom-4 left-1/2 -translate-x-1/2 px-4 py-2 bg-white/10 backdrop-blur-md rounded-full text-white text-sm"
				>
					{currentIndex + 1} / {images.length}
				</div>
			{/if}
		</div>
	</div>
{/if}
