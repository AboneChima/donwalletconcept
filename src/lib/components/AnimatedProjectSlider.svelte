<script lang="ts">
	import { onMount } from 'svelte';
	import { fade, fly } from 'svelte/transition';
	import { cubicOut } from 'svelte/easing';
	import type { Project } from '$lib/data/projects';
	import ProjectModal from './ProjectModal.svelte';

	export let projects: Project[];

	let currentIndex = 0;
	let autoplayInterval: any;
	let isPaused = false;
	let selectedProject: Project | null = null;
	let isModalOpen = false;
	let direction = 1;

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
		direction = 1;
		currentIndex = (currentIndex + 1) % projects.length;
	}

	function prev() {
		direction = -1;
		currentIndex = (currentIndex - 1 + projects.length) % projects.length;
	}

	function goTo(index: number) {
		direction = index > currentIndex ? 1 : -1;
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
	<!-- Main Slider - Compact & Clean -->
	<div class="relative aspect-[21/9] rounded-xl overflow-hidden bg-gray-100 shadow-md">
		{#each projects as project, i}
			{#if i === currentIndex}
				<button
					on:click={() => openProject(project)}
					class="absolute inset-0 group/item cursor-pointer"
					in:fly={{ x: direction * 50, duration: 600, easing: cubicOut }}
				>
					<!-- Image - Clean, no overlay by default -->
					<div class="relative w-full h-full overflow-hidden">
						<img
							src={project.thumbnail}
							alt={project.title}
							class="w-full h-full object-cover transition-all duration-500 ease-out group-hover/item:scale-105"
						/>
						
						<!-- Subtle gradient overlay - only on hover -->
						<div class="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent opacity-0 group-hover/item:opacity-100 transition-opacity duration-300"></div>
					</div>

					<!-- Content - Only visible on hover -->
					<div class="absolute inset-0 flex flex-col justify-end p-5 sm:p-6 opacity-0 group-hover/item:opacity-100 transition-all duration-300">
						<div class="transform translate-y-4 group-hover/item:translate-y-0 transition-transform duration-300">
							<!-- Category badge -->
							<div class="flex items-center gap-2 mb-2">
								<span class="px-2.5 py-1 bg-white/95 backdrop-blur-sm text-charcoal text-xs font-semibold rounded-full">
									{project.category}
								</span>
								<span class="text-white text-xs">{project.year}</span>
								{#if project.size}
									<span class="text-white text-xs">• {project.size}</span>
								{/if}
							</div>
							
							<!-- Title -->
							<h3 class="text-xl sm:text-2xl font-bold mb-1.5 text-white tracking-tight">
								{project.title}
							</h3>
							
							<!-- Location -->
							<p class="text-white/90 text-sm flex items-center gap-1">
								<svg class="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 20 20">
									<path fill-rule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clip-rule="evenodd" />
								</svg>
								{project.location}
							</p>
						</div>
					</div>

					<!-- View icon - appears on hover -->
					<div class="absolute top-3 right-3 opacity-0 group-hover/item:opacity-100 transition-opacity duration-300">
						<div class="w-8 h-8 bg-white/95 backdrop-blur-sm rounded-full flex items-center justify-center shadow-lg">
							<svg class="w-4 h-4 text-charcoal" fill="none" stroke="currentColor" viewBox="0 0 24 24">
								<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
								<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
							</svg>
						</div>
					</div>
				</button>
			{/if}
		{/each}

		<!-- Navigation Arrows - Minimal -->
		<button
			on:click={prev}
			class="absolute left-3 top-1/2 -translate-y-1/2 w-9 h-9 bg-white/95 hover:bg-white rounded-full flex items-center justify-center transition-all duration-200 shadow-lg opacity-0 group-hover:opacity-100"
			aria-label="Previous"
		>
			<svg class="w-4 h-4 text-charcoal" fill="none" stroke="currentColor" viewBox="0 0 24 24">
				<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M15 19l-7-7 7-7" />
			</svg>
		</button>

		<button
			on:click={next}
			class="absolute right-3 top-1/2 -translate-y-1/2 w-9 h-9 bg-white/95 hover:bg-white rounded-full flex items-center justify-center transition-all duration-200 shadow-lg opacity-0 group-hover:opacity-100"
			aria-label="Next"
		>
			<svg class="w-4 h-4 text-charcoal" fill="none" stroke="currentColor" viewBox="0 0 24 24">
				<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M9 5l7 7-7 7" />
			</svg>
		</button>
	</div>

	<!-- Progress Indicators - Minimal -->
	<div class="flex justify-center gap-1.5 mt-4">
		{#each projects as _, i}
			<button
				on:click={() => goTo(i)}
				class="relative h-1 rounded-full transition-all duration-300 ease-out {i === currentIndex
					? 'w-8 bg-accent'
					: 'w-6 bg-gray-300 hover:bg-gray-400'}"
				aria-label="Go to slide {i + 1}"
			></button>
		{/each}
	</div>

	<!-- Thumbnail Strip - Compact -->
	<div class="mt-5 overflow-hidden">
		<div class="marquee-container">
			<div class="marquee-content">
				{#each [...projects, ...projects] as project, i}
					<button
						on:click={() => goTo(i % projects.length)}
						class="marquee-item flex-shrink-0 w-20 h-20 rounded-lg overflow-hidden transition-all duration-300 ease-out {(i %
							projects.length) ===
						currentIndex
							? 'ring-2 ring-accent scale-105 shadow-md'
							: 'ring-1 ring-gray-200 hover:ring-gray-300 opacity-60 hover:opacity-100'}"
					>
						<img src={project.thumbnail} alt={project.title} class="w-full h-full object-cover" />
					</button>
				{/each}
			</div>
		</div>
	</div>
</div>

<!-- Project Modal -->
<ProjectModal project={selectedProject} bind:isOpen={isModalOpen} on:close={closeModal} />

<style>
	@keyframes marquee {
		0% {
			transform: translateX(0);
		}
		100% {
			transform: translateX(-50%);
		}
	}

	.marquee-container {
		position: relative;
		width: 100%;
		overflow: hidden;
	}

	.marquee-content {
		display: flex;
		gap: 0.75rem;
		animation: marquee 35s linear infinite;
		will-change: transform;
	}

	.marquee-content:hover {
		animation-play-state: paused;
	}

	.marquee-item {
		position: relative;
		transition: all 0.5s cubic-bezier(0.4, 0, 0.2, 1);
	}
</style>
