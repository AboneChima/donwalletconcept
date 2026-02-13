<script lang="ts">
	import { fade, fly } from 'svelte/transition';
	import { createEventDispatcher } from 'svelte';
	import type { Project } from '$lib/data/projects';

	export let project: Project | null = null;
	export let isOpen: boolean = false;

	const dispatch = createEventDispatcher();

	let currentImageIndex = 0;

	function close() {
		dispatch('close');
		currentImageIndex = 0;
	}

	function nextImage() {
		if (project) {
			currentImageIndex = (currentImageIndex + 1) % project.images.length;
		}
	}

	function prevImage() {
		if (project) {
			currentImageIndex = (currentImageIndex - 1 + project.images.length) % project.images.length;
		}
	}

	function handleKeydown(e: KeyboardEvent) {
		if (!isOpen) return;
		if (e.key === 'Escape') close();
		if (e.key === 'ArrowRight') nextImage();
		if (e.key === 'ArrowLeft') prevImage();
	}
</script>

<svelte:window on:keydown={handleKeydown} />

{#if isOpen && project}
	<div
		class="fixed inset-0 z-[100] bg-black/90 overflow-y-auto"
		transition:fade={{ duration: 200 }}
		on:click={close}
		role="button"
		tabindex="0"
	>
		<div class="min-h-screen px-4 py-12 flex items-center justify-center">
			<div
				class="relative bg-white rounded-2xl max-w-4xl w-full shadow-2xl overflow-hidden"
				on:click|stopPropagation
				in:fly={{ y: 30, duration: 300 }}
				role="button"
				tabindex="0"
			>
				<!-- Close Button -->
				<button
					on:click={close}
					class="absolute top-3 right-3 z-10 w-9 h-9 bg-white/90 hover:bg-white rounded-full flex items-center justify-center transition-colors shadow-lg"
					aria-label="Close"
				>
					<svg class="w-5 h-5 text-charcoal" fill="none" stroke="currentColor" viewBox="0 0 24 24">
						<path
							stroke-linecap="round"
							stroke-linejoin="round"
							stroke-width="2"
							d="M6 18L18 6M6 6l12 12"
						/>
					</svg>
				</button>

				<!-- Image Gallery -->
				<div class="relative aspect-[16/9] bg-gray-100">
					{#each project.images as image, i}
						{#if i === currentImageIndex}
							<img
								src={image}
								alt="{project.title} - Image {i + 1}"
								class="absolute inset-0 w-full h-full object-cover"
								in:fade={{ duration: 300 }}
							/>
						{/if}
					{/each}

					<!-- Navigation Arrows -->
					{#if project.images.length > 1}
						<button
							on:click={prevImage}
							class="absolute left-3 top-1/2 -translate-y-1/2 w-9 h-9 bg-white/90 hover:bg-white rounded-full flex items-center justify-center shadow-lg transition-all duration-200 hover:scale-105"
							aria-label="Previous image"
						>
							<svg class="w-5 h-5 text-charcoal" fill="none" stroke="currentColor" viewBox="0 0 24 24">
								<path
									stroke-linecap="round"
									stroke-linejoin="round"
									stroke-width="2"
									d="M15 19l-7-7 7-7"
								/>
							</svg>
						</button>

						<button
							on:click={nextImage}
							class="absolute right-3 top-1/2 -translate-y-1/2 w-9 h-9 bg-white/90 hover:bg-white rounded-full flex items-center justify-center shadow-lg transition-all duration-200 hover:scale-105"
							aria-label="Next image"
						>
							<svg class="w-5 h-5 text-charcoal" fill="none" stroke="currentColor" viewBox="0 0 24 24">
								<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
							</svg>
						</button>

						<!-- Image Counter -->
						<div
							class="absolute bottom-3 left-1/2 -translate-x-1/2 px-3 py-1.5 bg-black/70 backdrop-blur-sm rounded-full text-white text-xs font-medium"
						>
							{currentImageIndex + 1} / {project.images.length}
						</div>
					{/if}
				</div>

				<!-- Project Details - Compact -->
				<div class="p-5 sm:p-6">
					<div class="mb-3">
						<h2 class="text-xl sm:text-2xl font-bold text-charcoal mb-2">{project.title}</h2>
						<div class="flex flex-wrap items-center gap-2 text-xs text-gray-500">
							<span class="flex items-center gap-1">
								<svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
									<path
										stroke-linecap="round"
										stroke-linejoin="round"
										stroke-width="2"
										d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
									/>
									<path
										stroke-linecap="round"
										stroke-linejoin="round"
										stroke-width="2"
										d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
									/>
								</svg>
								{project.location}
							</span>
							<span>•</span>
							<span>{project.year}</span>
							<span>•</span>
							<span class="px-2 py-0.5 bg-accent/10 text-accent rounded-full text-xs font-medium"
								>{project.category}</span
							>
							{#if project.size}
								<span>•</span>
								<span>{project.size}</span>
							{/if}
						</div>
					</div>

					<p class="text-sm text-gray-600 leading-relaxed mb-4">{project.description}</p>

					<!-- Thumbnail Strip - Compact -->
					{#if project.images.length > 1}
						<div class="flex gap-2 overflow-x-auto pb-1">
							{#each project.images as image, i}
								<button
									on:click={() => (currentImageIndex = i)}
									class="flex-shrink-0 w-16 h-16 rounded-lg overflow-hidden border-2 transition-all duration-200 {i ===
									currentImageIndex
										? 'border-accent scale-105'
										: 'border-gray-200 hover:border-gray-400 opacity-60 hover:opacity-100'}"
								>
									<img src={image} alt="Thumbnail {i + 1}" class="w-full h-full object-cover" />
								</button>
							{/each}
						</div>
					{/if}
				</div>
			</div>
		</div>
	</div>
{/if}
