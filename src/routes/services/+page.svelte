<script lang="ts">
	import { onMount } from 'svelte';
	import { fly } from 'svelte/transition';

	let visible = false;

	onMount(() => {
		setTimeout(() => (visible = true), 200);
	});

	const services = [
		{
			icon: 'M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4',
			title: 'Architectural Design',
			description:
				'Complete architectural design services from concept to construction documentation. We create spaces that are both beautiful and functional, tailored to your specific needs.'
		},
		{
			icon: 'M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2',
			title: 'Building Planning',
			description:
				'Strategic planning and feasibility studies to ensure your project is viable, sustainable, and aligned with local regulations and your long-term goals.'
		},
		{
			icon: 'M15 12a3 3 0 11-6 0 3 3 0 016 0z M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z',
			title: '3D Visualization',
			description:
				'Photorealistic renderings and virtual walkthroughs that bring your project to life before construction begins. See every detail and make informed decisions.'
		},
		{
			icon: 'M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15',
			title: 'Renovation Consulting',
			description:
				'Expert guidance on renovating and transforming existing spaces. We respect the original character while introducing modern functionality and aesthetics.'
		},
		{
			icon: 'M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z',
			title: 'Site Supervision',
			description:
				'On-site oversight to ensure your project is built to specification, on time, and within budget. We maintain the highest standards of quality throughout construction.'
		}
	];
</script>

<svelte:head>
	<title>Services - Don Wallet Concept</title>
</svelte:head>

<div class="pt-24 sm:pt-28 lg:pt-36 pb-16 sm:pb-20 lg:pb-24 px-4 sm:px-6 lg:px-12">
	{#if visible}
		<div class="max-w-5xl mx-auto mb-16 sm:mb-20 lg:mb-24">
			<div in:fly={{ y: 30, duration: 800 }}>
				<h1 class="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 sm:mb-8 text-charcoal">
					Services
				</h1>
				<p class="text-base sm:text-lg lg:text-2xl text-gray-accent leading-relaxed">
					Comprehensive architectural services tailored to bring your vision to life.
				</p>
			</div>
		</div>

		<div class="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-10 lg:gap-12">
			{#each services as service, i}
				<div
					in:fly={{ y: 50, duration: 800, delay: i * 150 }}
					class="group p-6 sm:p-8 bg-white rounded-2xl shadow-sm hover:shadow-xl transition-all duration-500 transform hover:-translate-y-2"
				>
					<div
						class="w-14 h-14 sm:w-16 sm:h-16 mb-4 sm:mb-6 flex items-center justify-center bg-off-white group-hover:bg-accent rounded-xl transition-colors duration-300"
					>
						<svg
							class="w-7 h-7 sm:w-8 sm:h-8 text-charcoal group-hover:text-white transition-colors"
							fill="none"
							stroke="currentColor"
							viewBox="0 0 24 24"
						>
							<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d={service.icon} />
						</svg>
					</div>
					<h2 class="text-xl sm:text-2xl font-bold mb-3 sm:mb-4 text-charcoal">
						{service.title}
					</h2>
					<p class="text-sm sm:text-base text-gray-600 leading-relaxed">
						{service.description}
					</p>
				</div>
			{/each}
		</div>

		<!-- CTA -->
		<div class="max-w-4xl mx-auto mt-20 sm:mt-28 lg:mt-32 text-center">
			<div in:fly={{ y: 50, duration: 800, delay: 800 }}>
				<h2 class="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4 sm:mb-6 text-charcoal">
					Ready to Start Your Project?
				</h2>
				<p class="text-base sm:text-lg lg:text-xl text-gray-accent mb-6 sm:mb-8 leading-relaxed">
					Let's discuss how we can bring your architectural vision to life.
				</p>
				<a
					href="/contact"
					class="inline-flex items-center gap-2 px-6 sm:px-8 py-3 sm:py-4 bg-charcoal text-white text-sm sm:text-base font-medium tracking-wide rounded-full hover:bg-accent transition-all duration-300 transform hover:scale-105 shadow-lg"
				>
					Get In Touch
					<svg class="w-4 h-4 sm:w-5 sm:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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
	{/if}
</div>
