<script lang="ts">
	import { onMount } from 'svelte';
	import { fly, fade } from 'svelte/transition';
	import ImageCarousel from '$lib/components/ImageCarousel.svelte';

	let visible = false;
	let statsVisible = false;

	onMount(() => {
		setTimeout(() => (visible = true), 200);

		const observer = new IntersectionObserver(
			(entries) => {
				entries.forEach((entry) => {
					if (entry.isIntersecting && entry.target.id === 'stats') {
						statsVisible = true;
					}
				});
			},
			{ threshold: 0.3 }
		);

		const statsSection = document.getElementById('stats');
		if (statsSection) observer.observe(statsSection);

		return () => observer.disconnect();
	});

	const certificates = [
		{ src: '/images/certifications.jpg', alt: 'Professional Certifications' },
		{ src: '/images/certificate of ownership.jpg', alt: 'Certificate of Ownership' }
	];

	const stats = [
		{ number: '50+', label: 'Projects Completed', delay: 0 },
		{ number: '15+', label: 'Years Experience', delay: 100 },
		{ number: '100%', label: 'Client Satisfaction', delay: 200 },
		{ number: '25+', label: 'Awards Won', delay: 300 }
	];
</script>

<svelte:head>
	<title>About - Don Wallet Construction Company Limited</title>
</svelte:head>

<div class="pt-20 sm:pt-24 pb-16 sm:pb-20">
	{#if visible}
		<!-- Hero - Minimal -->
		<div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-12 mb-16 text-center">
			<div in:fly={{ y: 20, duration: 600 }}>
				<span class="text-accent text-xs font-semibold tracking-wider uppercase mb-3 inline-block">About</span>
				<h1 class="text-4xl sm:text-5xl lg:text-6xl font-bold mb-5 text-charcoal tracking-tight">About Us</h1>
				<p class="text-base sm:text-lg text-gray-600 leading-relaxed max-w-2xl mx-auto">
					Creating architecture that stands the test of time through precision and elegance.
				</p>
			</div>
		</div>

		<!-- Portrait & Bio - Minimal & Modern -->
		<div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-12 mb-16">
			<div class="bg-white rounded-2xl p-6 sm:p-10 shadow-lg">
				<div class="grid grid-cols-1 lg:grid-cols-5 gap-8 lg:gap-12 items-center">
					<!-- Image - Takes 2 columns -->
					<div class="lg:col-span-2" in:fly={{ x: -30, duration: 600, delay: 100 }}>
						<div class="relative">
							<img
								src="/images/the client new photo.jpg"
								alt="Don Wallet - Architect"
								class="w-full h-[400px] sm:h-[450px] object-cover object-top rounded-xl shadow-lg"
							/>
							<!-- Badge at bottom - doesn't block face -->
							<div class="absolute bottom-4 left-4 right-4 bg-white/95 backdrop-blur-sm p-4 rounded-xl shadow-lg">
								<p class="text-charcoal text-base font-bold">Lead Architect</p>
							</div>
						</div>
					</div>

					<!-- Content - Takes 3 columns -->
					<div class="lg:col-span-3 space-y-6" in:fly={{ x: 30, duration: 600, delay: 200 }}>
						<div>
							<h2 class="text-3xl sm:text-4xl font-bold mb-3 text-charcoal">
								Don Wallet Construction Company Limited
							</h2>
							<p class="text-accent font-semibold text-base mb-4">Principal Architect & Founder</p>
							<h3 class="text-2xl sm:text-3xl font-extrabold mb-3 text-charcoal">
								Don Wallet
							</h3>
							<p class="text-base text-gray-600 leading-relaxed">
								A visionary architect specializing in residential design, bringing over 15 years of
								expertise in creating exceptional living spaces across Nigeria.
							</p>
						</div>
						<div class="grid grid-cols-2 gap-4">
							<div class="p-4 bg-gray-50 rounded-xl">
								<p class="text-2xl font-bold text-accent mb-1">RIBA</p>
								<p class="text-xs text-gray-600 font-medium">Certified Professional</p>
							</div>
							<div class="p-4 bg-gray-50 rounded-xl">
								<p class="text-2xl font-bold text-accent mb-1">AIA</p>
								<p class="text-xs text-gray-600 font-medium">Active Member</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>

		<!-- Stats Section - Minimal -->
		<div id="stats" class="bg-charcoal py-12 sm:py-14">
			<div class="max-w-5xl mx-auto px-4 sm:px-6 lg:px-12">
				<div class="grid grid-cols-2 lg:grid-cols-4 gap-6">
					{#if statsVisible}
						{#each stats as stat}
							<div
								class="text-center"
								in:fly={{ y: 20, duration: 600, delay: stat.delay }}
							>
								<div class="text-3xl sm:text-4xl font-bold text-accent mb-1">
									{stat.number}
								</div>
								<div class="text-sm text-white/80">{stat.label}</div>
							</div>
						{/each}
					{/if}
				</div>
			</div>
		</div>

		<!-- Philosophy - Minimal -->
		<div class="py-16">
			<div class="max-w-5xl mx-auto px-4 sm:px-6 lg:px-12">
				<div in:fly={{ y: 30, duration: 600 }}>
					<div class="text-center mb-12">
						<span class="text-accent text-xs font-semibold tracking-wider uppercase mb-3 inline-block">Our Approach</span>
						<h3 class="text-2xl sm:text-3xl font-bold mb-3 text-charcoal">
							Don Wallet Construction Company Limited
						</h3>
						<h2 class="text-3xl sm:text-4xl font-bold mb-5 text-charcoal">
							Design <span class="text-accent">Philosophy</span>
						</h2>
					</div>
					<div class="space-y-6 text-base text-gray-600 leading-relaxed">
						<p class="text-center max-w-2xl mx-auto">
							Architecture is not about adding—it's about refining until only the essential remains.
							Each project is an opportunity to create spaces that enhance human experience.
						</p>
						<div class="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
							<div class="text-center p-6 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300">
								<div class="w-12 h-12 bg-accent/10 rounded-xl flex items-center justify-center mx-auto mb-4">
									<svg class="w-6 h-6 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
										<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
									</svg>
								</div>
								<h3 class="font-bold text-base mb-2 text-charcoal">Innovation</h3>
								<p class="text-sm text-gray-600">Pushing boundaries with modern design</p>
							</div>
							<div class="text-center p-6 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300">
								<div class="w-12 h-12 bg-accent/10 rounded-xl flex items-center justify-center mx-auto mb-4">
									<svg class="w-6 h-6 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
										<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
									</svg>
								</div>
								<h3 class="font-bold text-base mb-2 text-charcoal">Timeless</h3>
								<p class="text-sm text-gray-600">Designs that endure generations</p>
							</div>
							<div class="text-center p-6 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300">
								<div class="w-12 h-12 bg-accent/10 rounded-xl flex items-center justify-center mx-auto mb-4">
									<svg class="w-6 h-6 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
										<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
									</svg>
								</div>
								<h3 class="font-bold text-base mb-2 text-charcoal">Excellence</h3>
								<p class="text-sm text-gray-600">Uncompromising quality standards</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>

		<!-- Certifications - Minimal -->
		<div class="bg-gray-50 py-12 sm:py-14">
			<div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-12">
				<div in:fly={{ y: 30, duration: 600 }}>
					<h2 class="text-3xl sm:text-4xl font-bold mb-3 text-charcoal text-center">
						Certifications
					</h2>
					<p class="text-center text-gray-600 mb-8 max-w-xl mx-auto text-sm">
						Professional certifications validating our expertise and commitment to excellence.
					</p>

					<!-- Certificate Carousel -->
					<ImageCarousel images={certificates} />
				</div>
			</div>
		</div>
	{/if}
</div>
