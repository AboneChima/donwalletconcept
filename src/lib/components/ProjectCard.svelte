<script lang="ts">
	import type { Project } from '$lib/data/projects';
	import { createEventDispatcher } from 'svelte';

	export let project: Project;

	const dispatch = createEventDispatcher();

	function handleClick() {
		dispatch('click', project);
	}
</script>

<button
	on:click={handleClick}
	class="group block relative overflow-hidden bg-white rounded-xl shadow-sm hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 h-full w-full text-left cursor-pointer"
>
	<div class="relative aspect-[4/3] overflow-hidden">
		<img
			src={project.thumbnail}
			alt={project.title}
			class="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
		/>
		<!-- Subtle gradient overlay -->
		<div
			class="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"
		></div>

		<!-- View Icon - minimal -->
		<div
			class="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-all duration-300"
		>
			<div
				class="w-8 h-8 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center shadow-lg"
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
	</div>

	<div class="p-4">
		<h3
			class="text-base sm:text-lg font-semibold mb-1 group-hover:text-accent transition-colors line-clamp-1"
		>
			{project.title}
		</h3>
		<div class="flex items-center gap-2 text-xs text-gray-500">
			<span class="truncate">{project.location}</span>
			<span>•</span>
			<span>{project.year}</span>
		</div>
	</div>
</button>
