<script lang="ts">
	import { onMount } from 'svelte';
	import { fly } from 'svelte/transition';
	import type { Project } from '$lib/data/projects';
	import ProjectModal from './ProjectModal.svelte';

	export let projects: Project[];

	let visible = false;
	let selectedProject: Project | null = null;
	let isModalOpen = false;

	onMount(() => {
		setTimeout(() => (visible = true), 200);
	});

	function openProject(project: Project) {
		selectedProject = project;
		isModalOpen = true;
	}
</script>

<div class="masonry-grid">
	{#if visible}
		{#each projects as project, i}
			<button
				on:click={() => openProject(project)}
				class="masonry-item group relative overflow-hidden rounded-xl shadow-sm hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 cursor-pointer"
				in:fly={{ y: 30, duration: 600, delay: i * 50 }}
			>
				<!-- Image -->
				<div class="relative w-full h-full">
					<img
						src={project.thumbnail}
						alt={project.title}
						class="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
					/>
					<!-- Subtle gradient overlay -->
					<div
						class="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"
					></div>
				</div>

				<!-- Content - Clean and minimal -->
				<div
					class="absolute inset-0 flex flex-col justify-end p-3 sm:p-4 text-white"
				>
					<h3
						class="text-sm sm:text-base font-semibold mb-1 line-clamp-1 group-hover:text-accent transition-colors"
					>
						{project.title}
					</h3>
					<div class="flex items-center gap-2 text-xs text-white/80">
						<span class="truncate">{project.location}</span>
						<span>•</span>
						<span>{project.year}</span>
					</div>
				</div>

				<!-- View Icon - minimal -->
				<div
					class="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-all duration-300"
				>
					<div
						class="w-7 h-7 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center shadow-lg"
					>
						<svg class="w-4 h-4 text-charcoal" fill="none" stroke="currentColor" viewBox="0 0 24 24">
							<path
								stroke-linecap="round"
								stroke-linejoin="round"
								stroke-width="2"
								d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
							/>
							<path
								stroke-linecap="round"
								stroke-linejoin="round"
								stroke-width="2"
								d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
							/>
						</svg>
					</div>
				</div>
			</button>
		{/each}
	{/if}
</div>

<!-- Project Modal -->
<ProjectModal
	project={selectedProject}
	bind:isOpen={isModalOpen}
	on:close={() => (isModalOpen = false)}
/>

<style>
	.masonry-grid {
		display: grid;
		grid-template-columns: repeat(1, 1fr);
		gap: 0.75rem;
		grid-auto-rows: 180px;
	}

	@media (min-width: 640px) {
		.masonry-grid {
			grid-template-columns: repeat(2, 1fr);
			gap: 1rem;
			grid-auto-rows: 200px;
		}
	}

	@media (min-width: 1024px) {
		.masonry-grid {
			grid-template-columns: repeat(3, 1fr);
			gap: 1.25rem;
			grid-auto-rows: 220px;
		}
	}

	/* Complex pattern - every 6 items */
	.masonry-item:nth-child(6n + 1) {
		grid-row: span 2;
	}

	.masonry-item:nth-child(6n + 2) {
		grid-row: span 1;
	}

	.masonry-item:nth-child(6n + 3) {
		grid-row: span 1;
	}

	.masonry-item:nth-child(6n + 4) {
		grid-row: span 2;
	}

	.masonry-item:nth-child(6n + 5) {
		grid-row: span 1;
	}

	.masonry-item:nth-child(6n) {
		grid-row: span 1;
	}

	/* On mobile, simpler pattern */
	@media (max-width: 639px) {
		.masonry-item:nth-child(4n + 1) {
			grid-row: span 2;
		}

		.masonry-item:nth-child(4n + 2) {
			grid-row: span 1;
		}

		.masonry-item:nth-child(4n + 3) {
			grid-row: span 1;
		}

		.masonry-item:nth-child(4n) {
			grid-row: span 2;
		}
	}

	/* On tablet, medium pattern */
	@media (min-width: 640px) and (max-width: 1023px) {
		.masonry-item:nth-child(5n + 1) {
			grid-row: span 2;
		}

		.masonry-item:nth-child(5n + 2) {
			grid-row: span 1;
		}

		.masonry-item:nth-child(5n + 3) {
			grid-row: span 2;
		}

		.masonry-item:nth-child(5n + 4) {
			grid-row: span 1;
		}

		.masonry-item:nth-child(5n) {
			grid-row: span 1;
		}
	}
</style>
