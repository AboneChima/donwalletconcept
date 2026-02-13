<script lang="ts">
	import { onMount } from 'svelte';
	import { fly } from 'svelte/transition';
	import AnimatedProjectSlider from '$lib/components/AnimatedProjectSlider.svelte';
	import MasonryGrid from '$lib/components/MasonryGrid.svelte';
	import ProjectFilter from '$lib/components/ProjectFilter.svelte';
	import { projects } from '$lib/data/projects';

	let visible = false;
	let activeCategory = 'All';
	let filteredProjects = projects;

	// Get unique categories
	const categories = [...new Set(projects.map((p) => p.category))];

	// Featured projects for slider - project 1, 13, 5, 2
	const sliderProjects = projects.filter(p => 
		p.thumbnail === '/images/project1.jpg' || 
		p.thumbnail === '/images/project13.jpg' || 
		p.thumbnail === '/images/project5.jpg' || 
		p.thumbnail === '/images/project2.jpg'
	);

	onMount(() => {
		setTimeout(() => (visible = true), 200);
	});

	function handleFilterChange(category: string) {
		activeCategory = category;
		if (category === 'All') {
			filteredProjects = projects;
		} else {
			filteredProjects = projects.filter((p) => p.category === category);
		}
	}
</script>

<svelte:head>
	<title>Projects - Don Wallet Construction Company Limited</title>
</svelte:head>

<div class="pt-24 sm:pt-28 pb-16 sm:pb-20 px-4 sm:px-6 lg:px-12">
	<div class="max-w-7xl mx-auto">
		{#if visible}
			<div in:fly={{ y: 20, duration: 600 }} class="mb-12 text-center">
				<span class="text-accent text-xs font-semibold tracking-wider uppercase mb-3 inline-block">Portfolio</span>
				<h1 class="text-4xl sm:text-5xl lg:text-6xl font-bold mb-5 text-charcoal tracking-tight">
					Our <span class="text-accent">Work</span>
				</h1>
				<p class="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
					A collection of spaces designed with precision, purpose, and passion.
				</p>
			</div>

			<!-- Animated Slider -->
			<div class="mb-12" in:fly={{ y: 30, duration: 600, delay: 100 }}>
				<AnimatedProjectSlider projects={sliderProjects} />
			</div>

			<!-- Filter -->
			<ProjectFilter {categories} {activeCategory} onFilterChange={handleFilterChange} />

			<!-- Masonry Grid -->
			<MasonryGrid projects={filteredProjects} />
		{/if}
	</div>
</div>
