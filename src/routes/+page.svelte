<script lang="ts">
	import { onMount } from 'svelte';
	import { fade, fly } from 'svelte/transition';
	import ProjectCard from '$lib/components/ProjectCard.svelte';
	import ProjectModal from '$lib/components/ProjectModal.svelte';
	import { projects } from '$lib/data/projects';
	import type { Project } from '$lib/data/projects';

	let visible = false;
	let projectsVisible = false;
	let aboutVisible = false;
	let selectedProject: Project | null = null;
	let isModalOpen = false;

	onMount(() => {
		setTimeout(() => (visible = true), 300);

		const observer = new IntersectionObserver(
			(entries) => {
				entries.forEach((entry) => {
					if (entry.isIntersecting) {
						if (entry.target.id === 'projects') projectsVisible = true;
						if (entry.target.id === 'about') aboutVisible = true;
					}
				});
			},
			{ threshold: 0.1 }
		);

		const projectsSection = document.getElementById('projects');
		const aboutSection = document.getElementById('about');
		if (projectsSection) observer.observe(projectsSection);
		if (aboutSection) observer.observe(aboutSection);

		return () => {
			observer.disconnect();
		};
	});

	const featuredProjects = projects.filter(p => 
		p.thumbnail === '/images/project7.jpg' || 
		p.thumbnail === '/images/project22.jpg' || 
		p.thumbnail === '/images/project9.jpg'
	);

	function handleProjectClick(event: CustomEvent<Project>) {
		selectedProject = event.detail;
		isModalOpen = true;
	}
</script>

<svelte:head>
	<title>Don Wallet Concept - Designing Spaces With Precision</title>
</svelte:head>

<!-- Hero Section - Minimal & Modern with Animations -->
<section class="relative min-h-screen flex items-center bg-white overflow-hidden">
	<!-- Animated background decoration -->
	<div class="absolute top-20 right-10 w-64 h-64 bg-accent/5 rounded-full blur-3xl animate-float"></div>
	<div class="absolute bottom-20 left-10 w-80 h-80 bg-gray-100 rounded-full blur-3xl" style="animation: float 8s ease-in-out infinite 2s;"></div>
	
	<div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 py-16 lg:py-0 w-full relative z-10">
		<div class="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
			<!-- Text Content - Enhanced Animations -->
			<div class="order-2 lg:order-1 text-center lg:text-left">
				{#if visible}
					<div in:fly={{ y: 30, duration: 1000, delay: 100 }}>
						<div class="inline-block mb-6" in:fly={{ y: 20, duration: 800, delay: 200 }}>
							<span
								class="px-4 py-2 bg-gray-100 text-charcoal text-xs font-semibold rounded-full tracking-wider uppercase"
							>
								Architecture & Design
							</span>
						</div>
						<h1
							class="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-charcoal mb-6 tracking-tight leading-tight"
							in:fly={{ y: 30, duration: 1000, delay: 300 }}
						>
							Designing Spaces<br /><span class="text-accent">With Precision</span>
						</h1>
						<p
							class="text-base sm:text-lg lg:text-xl text-gray-600 mb-8 leading-relaxed max-w-xl mx-auto lg:mx-0"
							in:fly={{ y: 30, duration: 1000, delay: 400 }}
						>
							Where architecture meets intention. Creating timeless spaces through thoughtful design.
						</p>
						<div class="flex flex-col sm:flex-row gap-3 justify-center lg:justify-start" in:fly={{ y: 30, duration: 1000, delay: 500 }}>
							<a
								href="/projects"
								class="group inline-flex items-center justify-center gap-2 px-6 py-3 bg-charcoal text-white text-sm font-semibold rounded-full hover:bg-accent transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
							>
								View Projects
								<svg class="w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
									<path
										stroke-linecap="round"
										stroke-linejoin="round"
										stroke-width="2"
										d="M17 8l4 4m0 0l-4 4m4-4H3"
									/>
								</svg>
							</a>
							<a
								href="/contact"
								class="inline-flex items-center justify-center gap-2 px-6 py-3 border-2 border-gray-200 text-charcoal text-sm font-semibold rounded-full hover:border-charcoal hover:bg-gray-50 transition-all duration-300 transform hover:scale-105"
							>
								Get In Touch
							</a>
						</div>
					</div>
				{/if}
			</div>

			<!-- Modern Architecture Photo with Animation -->
			<div class="order-1 lg:order-2">
				{#if visible}
					<div in:fly={{ x: 50, duration: 1200, delay: 200 }} class="relative">
						<div class="relative rounded-2xl overflow-hidden shadow-xl transform transition-transform duration-700 hover:scale-[1.02]">
							<!-- High-quality architectural photo from Unsplash -->
							<img
								src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&q=80"
								alt="Modern Architecture"
								class="w-full h-[350px] sm:h-[450px] lg:h-[550px] object-cover"
							/>
							<!-- Subtle overlay on hover -->
							<div class="absolute inset-0 bg-gradient-to-t from-charcoal/20 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-500"></div>
						</div>
						<!-- Decorative floating element -->
						<div class="absolute -bottom-4 -right-4 w-32 h-32 bg-accent/10 rounded-2xl -z-10 blur-xl animate-float"></div>
					</div>
				{/if}
			</div>
		</div>
	</div>

	<!-- Animated Scroll Indicator -->
	<div class="absolute bottom-8 left-1/2 transform -translate-x-1/2 hidden lg:block">
		<div class="flex flex-col items-center gap-2 animate-bounce opacity-40">
			<svg class="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
				<path
					stroke-linecap="round"
					stroke-linejoin="round"
					stroke-width="2"
					d="M19 14l-7 7m0 0l-7-7m7 7V3"
				/>
			</svg>
		</div>
	</div>
</section>

<!-- Featured Projects - Minimal -->
<section id="projects" class="py-16 sm:py-20 px-4 sm:px-6 lg:px-12 bg-white">
	<div class="max-w-7xl mx-auto">
		{#if projectsVisible}
			<div in:fly={{ y: 30, duration: 800 }} class="mb-12 text-center">
				<span class="text-accent text-xs font-semibold tracking-wider uppercase mb-3 inline-block">Portfolio</span>
				<h2 class="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 text-charcoal tracking-tight">
					Featured <span class="text-accent">Work</span>
				</h2>
				<p class="text-gray-600 text-base sm:text-lg max-w-2xl mx-auto">
					Selected projects that define our approach
				</p>
			</div>

			<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
				{#each featuredProjects as project, i}
					<div in:fly={{ y: 30, duration: 600, delay: i * 100 }}>
						<ProjectCard {project} on:click={handleProjectClick} />
					</div>
				{/each}
			</div>

			<div class="text-center mt-10" in:fly={{ y: 20, duration: 600, delay: 400 }}>
				<a
					href="/projects"
					class="group inline-flex items-center gap-2 px-6 py-3 border-2 border-gray-200 text-charcoal text-sm font-semibold rounded-full hover:border-charcoal hover:bg-gray-50 transition-all duration-300"
				>
					View All Projects
					<svg class="w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
						<path
							stroke-linecap="round"
							stroke-linejoin="round"
							stroke-width="2"
							d="M17 8l4 4m0 0l-4 4m4-4H3"
						/>
					</svg>
				</a>
			</div>
		{/if}
	</div>
</section>

<!-- About Preview - Minimal & Modern -->
<section id="about" class="py-16 sm:py-20 px-4 sm:px-6 lg:px-12 bg-gray-50">
	<div class="max-w-6xl mx-auto">
		{#if aboutVisible}
			<div
				class="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center"
				in:fade={{ duration: 800 }}
			>
				<div class="order-2 lg:order-1">
					<div in:fly={{ x: -30, duration: 600, delay: 100 }}>
						<span class="text-accent text-xs font-semibold tracking-wider uppercase mb-3 inline-block">About Us</span>
						<h2 class="text-3xl sm:text-4xl lg:text-5xl font-bold mb-5 text-charcoal tracking-tight">
							Design <span class="text-accent">Philosophy</span>
						</h2>
						<p class="text-base sm:text-lg text-gray-600 mb-4 leading-relaxed">
							Every project begins with understanding the space, the context, and the people who will
							inhabit it. We believe in architecture that speaks through silence.
						</p>
						<p class="text-base sm:text-lg text-gray-600 mb-6 leading-relaxed">
							Our approach combines modern aesthetics with timeless principles, creating spaces that
							are both beautiful and functional.
						</p>
						<a
							href="/about"
							class="group inline-flex items-center gap-2 px-6 py-3 border-2 border-gray-200 text-charcoal text-sm font-semibold rounded-full hover:border-charcoal hover:bg-gray-100 transition-all duration-300"
						>
							Learn More
							<svg class="w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
								<path
									stroke-linecap="round"
									stroke-linejoin="round"
									stroke-width="2"
									d="M17 8l4 4m0 0l-4 4m4-4H3"
								/>
							</svg>
						</a>
					</div>
				</div>
				<div class="order-1 lg:order-2" in:fly={{ x: 30, duration: 600, delay: 200 }}>
					<div class="relative group">
						<img
							src="/images/the client new photo.jpg"
							alt="Architect"
							class="w-full aspect-square object-cover object-center rounded-2xl shadow-xl"
						/>
						<!-- Floating badge - positioned at top to avoid face -->
						<div class="absolute top-4 left-4 right-4 bg-white/95 backdrop-blur-sm p-4 rounded-xl shadow-lg">
							<p class="text-charcoal font-bold text-base">Don Wallet</p>
							<p class="text-accent text-sm font-semibold">Principal Architect</p>
						</div>
					</div>
				</div>
			</div>
		{/if}
	</div>
</section>

<!-- CTA Section - Minimal -->
<section class="py-16 sm:py-20 px-4 sm:px-6 text-center bg-gray-50">
	<div class="max-w-3xl mx-auto">
		<h2
			class="text-3xl sm:text-4xl lg:text-5xl font-bold mb-5 text-charcoal leading-tight tracking-tight"
		>
			Let's Build Something <span class="text-accent">Exceptional</span>
		</h2>
		<p class="text-base sm:text-lg text-gray-600 mb-8 leading-relaxed max-w-2xl mx-auto">
			Ready to bring your vision to life? Let's discuss your project.
		</p>
		<a
			href="/contact"
			class="group inline-flex items-center gap-2 px-8 py-4 bg-charcoal text-white text-sm font-semibold rounded-full hover:bg-accent transition-all duration-300 shadow-lg"
		>
			Get In Touch
			<svg class="w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
				<path
					stroke-linecap="round"
					stroke-linejoin="round"
					stroke-width="2"
					d="M17 8l4 4m0 0l-4 4m4-4H3"
				/>
			</svg>
		</a>
	</div>
</section>

<!-- Project Modal -->
<ProjectModal
	project={selectedProject}
	bind:isOpen={isModalOpen}
	on:close={() => (isModalOpen = false)}
/>
