<script lang="ts">
	import { onMount } from 'svelte';
	import { fade } from 'svelte/transition';
	import { quintOut } from 'svelte/easing';
	import type { Project } from '$lib/data/projects';
	import ProjectModal from './ProjectModal.svelte';

	export let projects: Project[];

	let currentIndex = 0;
	let autoplayInterval: any;
	let isPaused = false;
	let selectedProject: Project | null = null;
	let isModalOpen = false;

	onMount(() => {
		startAutoplay();
		return () => stopAutoplay();
	});

	function startAutoplay() {
		autoplayInterval = setInterval(() => {
			if (!isPaused) {
				next();
			}
		}, 5000);
	}

	function stopAutoplay() {
		if (autoplayInterval) clearInterval(autoplayInterval);
	}

	function next() {
		currentIndex = (currentIndex + 1) % projects.length;
	}

	function prev() {
		currentIndex = (currentIndex - 1 + projects.length) % projects.length;
	}

	function goTo(index: number) {
		currentIndex = index;
	}

	function openProject(project: Project) {
		selectedProject = project;
		isModalOpen = true;
		isPaused = true;
	}

	function closeModal() {
		isModalOpen = false;
		isPaused = false;
	}
</script>

<div class="relative group" on:mouseenter={() => (isPaused = true)} on:mouseleave={() => (isPaused = false)}>
	<!-- Main Slider - Smooth & Clean -->
	<div class="relative aspect-[21/9] rounded-2xl overflow-hidden bg-gray-100 shadow-lg">
		{#each projects as project, i}
			{#if i === currentIndex}
				<button
					on:click={() => openProject(project)}
					class="absolute inset-0 group/item cursor-pointer"
					in:fade={{ duration: 800, easing: quintOut }}
				>
					<!-- Image with smooth zoom -->
					<div class="relative w-full h-full overflow-hidden">
						<img
							src={project.thumbnail}
							alt={project.title}
							class="w-full h-full object-cover transition-transform duration-[3000ms] ease-out group-hover/item:scale-110"
						/>
						
						<!-- Gradient overlay - subtle on hover -->
						<div class="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover/item:opacity-100 transition-opacity duration-500"></div>
					</div>

					<!-- Content - Smooth reveal on hover -->
					<div class="absolute inset-0 flex flex-col justify-end p-6 sm:p-8 opacity-0 group-hover/item:opacity-100 transition-all duration-500">
						<div class="transform translate-y-6 group-hover/item:translate-y-0 transition-transform duration-500 ease-out">
							<!-- Category badge -->
							<div class="flex items-center gap-2 mb-3">
								<span class="px-3 py-1.5 bg-white/95 backdrop-blur-sm text-charcoal text-xs font-semibold rounded-full shadow-lg">
									{project.category}
								</span>
								<span class="text-white text-sm font-medium">{project.year}</span>
								{#if project.size}
									<span class="text-white/80 text-sm">• {project.size}</span>
								{/if}
							</div>
							
							<!-- Title -->
							<h3 class="text-2xl sm:text-3xl font-bold mb-2 text-white tracking-tight">
								{project.title}
							</h3>
							
							<!-- Location -->
							<p class="text-white/90 text-sm flex items-center gap-1.5">
								<svg class="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
									<path fill-rule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clip-rule="evenodd" />
								</svg>
								{project.location}
							</p>
						</div>
					</div>

					<!-- View icon - smooth appearance -->
					<div class="absolute top-4 right-4 opacity-0 group-hover/item:opacity-100 transition-all duration-500 transform scale-90 group-hover/item:scale-100">
						<div class="w-10 h-10 bg-white/95 backdrop-blur-sm rounded-full flex items-center justify-center shadow-xl">
							<svg class="w-5 h-5 text-charcoal" fill="none" stroke="currentColor" viewBox="0 0 24 24">
								<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
								<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
							</svg>
						</div>
					</div>
				</button>
			{/if}
		{/each}

		<!-- Navigation Arrows - Smooth appearance -->
		<button
			on:click={prev}
			class="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-white/95 hover:bg-white rounded-full flex items-center justify-center transition-all duration-300 shadow-xl opacity-0 group-hover:opacity-100 hover:scale-110"
			aria-label="Previous"
		>
			<svg class="w-5 h-5 text-charcoal" fill="none" stroke="currentColor" viewBox="0 0 24 24">
				<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M15 19l-7-7 7-7" />
			</svg>
		</button>

		<button
			on:click={next}
			class="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-white/95 hover:bg-white rounded-full flex items-center justify-center transition-all duration-300 shadow-xl opacity-0 group-hover:opacity-100 hover:scale-110"
			aria-label="Next"
		>
			<svg class="w-5 h-5 text-charcoal" fill="none" stroke="currentColor" viewBox="0 0 24 24">
				<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M9 5l7 7-7 7" />
			</svg>
		</button>
	</div>

	<!-- Progress Indicators - Smooth & Modern -->
	<div class="flex justify-center gap-2 mt-5">
		{#each projects as _, i}
			<button
				on:click={() => goTo(i)}
				class="relative h-1.5 rounded-full transition-all duration-500 ease-out {i === currentIndex
					? 'w-10 bg-accent shadow-lg shadow-accent/30'
					: 'w-6 bg-gray-300 hover:bg-gray-400 hover:w-8'}"
				aria-label="Go to slide {i + 1}"
			>
				{#if i === currentIndex}
					<div class="absolute inset-0 bg-accent rounded-full animate-pulse"></div>
				{/if}
			</button>
		{/each}
	</div>
</div>

<!-- Project Modal -->
<ProjectModal project={selectedProject} bind:isOpen={isModalOpen} on:close={closeModal} />