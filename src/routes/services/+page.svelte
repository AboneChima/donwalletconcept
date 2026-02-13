<script lang="ts">
	import { onMount } from 'svelte';
	import { fly, fade } from 'svelte/transition';

	let visible = false;

	onMount(() => {
		setTimeout(() => (visible = true), 200);
	});

	const services = [
		{
			icon: 'M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4',
			title: 'Architectural Design',
			description: 'Complete design services from concept to construction documentation.',
			features: ['Concept Development', 'Technical Drawings', 'Material Selection']
		},
		{
			icon: 'M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2',
			title: 'Building Planning',
			description: 'Strategic planning and feasibility studies for viable projects.',
			features: ['Site Analysis', 'Regulatory Compliance', 'Budget Planning']
		},
		{
			icon: 'M15 12a3 3 0 11-6 0 3 3 0 016 0z M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z',
			title: '3D Visualization',
			description: 'Photorealistic renderings that bring your project to life.',
			features: ['3D Modeling', 'Virtual Tours', 'Lighting Studies']
		},
		{
			icon: 'M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15',
			title: 'Renovation Consulting',
			description: 'Expert guidance on transforming existing spaces.',
			features: ['Space Assessment', 'Design Solutions', 'Heritage Preservation']
		},
		{
			icon: 'M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z',
			title: 'Site Supervision',
			description: 'On-site oversight ensuring quality and timelines.',
			features: ['Quality Control', 'Progress Monitoring', 'Contractor Coordination']
		},
		{
			icon: 'M13 10V3L4 14h7v7l9-11h-7z',
			title: 'Sustainable Design',
			description: 'Eco-friendly solutions for modern living.',
			features: ['Energy Efficiency', 'Green Materials', 'Climate Adaptation']
		}
	];
</script>

<svelte:head>
	<title>Services - Don Wallet Construction Company Limited</title>
</svelte:head>

<div class="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-50">
	<!-- Hero Section -->
	<div class="pt-24 sm:pt-28 pb-12 sm:pb-16 px-4 sm:px-6 lg:px-12">
		{#if visible}
			<div class="max-w-6xl mx-auto text-center">
				<div in:fly={{ y: 30, duration: 800 }}>
					<span class="inline-block px-4 py-2 bg-accent/10 text-accent text-xs font-semibold rounded-full tracking-wider uppercase mb-4">
						What We Offer
					</span>
					<h1 class="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 text-charcoal tracking-tight">
						Our <span class="text-accent">Services</span>
					</h1>
					<p class="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
						Comprehensive architectural solutions designed to transform your vision into reality
					</p>
				</div>
			</div>
		{/if}
	</div>

	<!-- Services Grid -->
	<div class="pb-16 sm:pb-20 px-4 sm:px-6 lg:px-12">
		<div class="max-w-7xl mx-auto">
			<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
				{#each services as service, i}
					<div
						in:fly={{ y: 50, duration: 600, delay: i * 100 }}
						class="group relative bg-white rounded-2xl p-6 shadow-sm hover:shadow-2xl transition-all duration-500 border border-gray-100 hover:border-accent/20 overflow-hidden"
					>
						<!-- Gradient background on hover -->
						<div class="absolute inset-0 bg-gradient-to-br from-accent/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
						
						<div class="relative z-10">
							<!-- Icon -->
							<div class="w-14 h-14 mb-5 flex items-center justify-center bg-gradient-to-br from-accent/10 to-accent/5 rounded-xl group-hover:scale-110 transition-transform duration-300">
								<svg
									class="w-7 h-7 text-accent"
									fill="none"
									stroke="currentColor"
									viewBox="0 0 24 24"
								>
									<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d={service.icon} />
								</svg>
							</div>

							<!-- Title -->
							<h3 class="text-xl font-bold mb-3 text-charcoal group-hover:text-accent transition-colors duration-300">
								{service.title}
							</h3>

							<!-- Description -->
							<p class="text-sm text-gray-600 mb-4 leading-relaxed">
								{service.description}
							</p>

							<!-- Features -->
							<ul class="space-y-2">
								{#each service.features as feature}
									<li class="flex items-center gap-2 text-xs text-gray-500">
										<svg class="w-4 h-4 text-accent flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
											<path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
										</svg>
										{feature}
									</li>
								{/each}
							</ul>
						</div>

						<!-- Decorative element -->
						<div class="absolute -right-8 -bottom-8 w-32 h-32 bg-accent/5 rounded-full blur-2xl group-hover:bg-accent/10 transition-colors duration-500"></div>
					</div>
				{/each}
			</div>
		</div>
	</div>

	<!-- CTA Section -->
	<div class="pb-16 sm:pb-20 px-4 sm:px-6 lg:px-12">
		<div class="max-w-4xl mx-auto">
			{#if visible}
				<div
					in:fly={{ y: 50, duration: 800, delay: 600 }}
					class="relative bg-gradient-to-br from-charcoal to-charcoal/90 rounded-3xl p-8 sm:p-12 text-center overflow-hidden shadow-xl"
				>
					<!-- Decorative elements -->
					<div class="absolute top-0 right-0 w-64 h-64 bg-accent/10 rounded-full blur-3xl"></div>
					<div class="absolute bottom-0 left-0 w-64 h-64 bg-accent/10 rounded-full blur-3xl"></div>
					
					<div class="relative z-10">
						<h2 class="text-3xl sm:text-4xl font-bold mb-4 text-white">
							Ready to Start Your Project?
						</h2>
						<p class="text-base sm:text-lg text-white/80 mb-8 max-w-2xl mx-auto">
							Let's collaborate to create something extraordinary together
						</p>
						<div class="flex flex-col sm:flex-row gap-4 justify-center">
							<a
								href="/contact"
								class="inline-flex items-center justify-center gap-2 px-8 py-4 bg-accent text-white text-sm font-semibold rounded-full hover:bg-accent/90 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
							>
								Get In Touch
								<svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
									<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
								</svg>
							</a>
							<a
								href="/projects"
								class="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-charcoal text-sm font-semibold rounded-full hover:bg-gray-50 transition-all duration-300 transform hover:scale-105"
							>
								View Our Work
							</a>
						</div>
					</div>
				</div>
			{/if}
		</div>
	</div>
</div>
