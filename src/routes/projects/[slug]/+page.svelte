<script lang="ts">
	import { onMount } from 'svelte';
	import { fade, fly } from 'svelte/transition';
	import ImageLightbox from '$lib/components/ImageLightbox.svelte';
	import type { PageData } from './$types';

	export let data: PageData;
	const { project } = data;

	let visible = false;
	let lightboxOpen = false;
	let lightboxIndex = 0;

	onMount(() => {
		setTimeout(() => (visible = true), 200);
	});

	function openLightbox(index: number) {
		lightboxIndex = index;
		lightboxOpen = true;
	}
</script>

<svelte:head>
	<title>{project.title} - Don Wallet Concept</title>
</svelte:head>

<!-- Hero Image -->
<div class="pt-16 sm:pt-20">
	<div class="h-[50vh] sm:h-[60vh] lg:h-[70vh] overflow-hidden">
		<img
			src={project.hero}
			alt={project.title}
			class="w-full h-full object-cover"
			in:fade={{ duration: 800 }}
		/>
	</div>
</div>

<!-- Project Details -->
<div class="max-w-5xl mx-auto px-4 sm:px-6 lg:px-12 py-12 sm:py-16 lg:py-24">
	{#if visible}
		<div in:fly={{ y: 30, duration: 800 }} class="mb-12 sm:mb-16">
			<h1 class="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold mb-6 sm:mb-8 text-charcoal">
				{project.title}
			</h1>

			<div
				class="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6 lg:gap-8 mb-8 sm:mb-12 pb-8 sm:pb-12 border-b"
			>
				<div>
					<p class="text-xs sm:text-sm text-gray-accent mb-2">Location</p>
					<p class="font-medium text-sm sm:text-base">{project.location}</p>
				</div>
				<div>
					<p class="text-xs sm:text-sm text-gray-accent mb-2">Year</p>
					<p class="font-medium text-sm sm:text-base">{project.year}</p>
				</div>
				<div>
					<p class="text-xs sm:text-sm text-gray-accent mb-2">Category</p>
					<p class="font-medium text-sm sm:text-base">{project.category}</p>
				</div>
				{#if project.size}
					<div>
						<p class="text-xs sm:text-sm text-gray-accent mb-2">Size</p>
						<p class="font-medium text-sm sm:text-base">{project.size}</p>
					</div>
				{/if}
			</div>

			<div class="prose prose-sm sm:prose-base lg:prose-lg max-w-none">
				<p class="text-base sm:text-lg lg:text-xl leading-relaxed text-gray-600">
					{project.description}
				</p>
			</div>
		</div>

		<!-- Image Gallery -->
		<div class="space-y-8 sm:space-y-12 lg:space-y-16">
			{#each project.images as image, i}
				<button
					on:click={() => openLightbox(i)}
					in:fly={{ y: 50, duration: 800, delay: i * 200 }}
					class="overflow-hidden rounded-2xl cursor-pointer group block w-full"
				>
					<img
						src={image}
						alt="{project.title} detail"
						class="w-full transition-transform duration-500 group-hover:scale-105"
					/>
				</button>
			{/each}
		</div>

		<!-- Lightbox -->
		<ImageLightbox
			images={project.images}
			bind:currentIndex={lightboxIndex}
			bind:isOpen={lightboxOpen}
			on:close={() => (lightboxOpen = false)}
		/>

		<!-- Navigation -->
		<div in:fly={{ y: 30, duration: 800, delay: 600 }} class="mt-16 sm:mt-20 lg:mt-24 pt-12 border-t">
			<a
				href="/projects"
				class="inline-flex items-center gap-2 text-gray-accent hover:text-charcoal transition-colors group"
			>
				<svg
					class="w-5 h-5 transform group-hover:-translate-x-1 transition-transform"
					fill="none"
					stroke="currentColor"
					viewBox="0 0 24 24"
				>
					<path
						stroke-linecap="round"
						stroke-linejoin="round"
						stroke-width="2"
						d="M15 19l-7-7 7-7"
					/>
				</svg>
				Back to Projects
			</a>
		</div>
	{/if}
</div>
