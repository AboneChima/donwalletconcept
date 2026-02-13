<script lang="ts">
	import { onMount } from 'svelte';
	import { fade } from 'svelte/transition';

	const slides = [
		{
			image: '/images/hero section image banner.jpg',
			title: 'Designing Spaces',
			subtitle: 'With Precision'
		},
		{
			image: '/images/project1.jpg',
			title: 'Modern Architecture',
			subtitle: 'Timeless Design'
		},
		{
			image: '/images/project10.jpg',
			title: 'Structural Elegance',
			subtitle: 'Built to Inspire'
		}
	];

	let currentSlide = 0;
	let isAutoPlaying = true;

	onMount(() => {
		const interval = setInterval(() => {
			if (isAutoPlaying) {
				currentSlide = (currentSlide + 1) % slides.length;
			}
		}, 5000);

		return () => clearInterval(interval);
	});

	function goToSlide(index: number) {
		currentSlide = index;
		isAutoPlaying = false;
		setTimeout(() => (isAutoPlaying = true), 10000);
	}
</script>

<div class="relative h-screen w-full overflow-hidden bg-black">
	<!-- Slides -->
	{#each slides as slide, i}
		{#if i === currentSlide}
			<div
				class="absolute inset-0"
				in:fade={{ duration: 1000 }}
				out:fade={{ duration: 1000 }}
			>
				<img
					src={slide.image}
					alt={slide.title}
					class="w-full h-full object-cover scale-105 animate-[zoomOut_10s_ease-out_forwards]"
				/>
				<div class="absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-black/60"></div>
			</div>
		{/if}
	{/each}

	<!-- Content -->
	<div class="relative z-10 h-full flex items-center justify-center px-6">
		<div class="text-center max-w-5xl">
			{#key currentSlide}
				<div in:fade={{ duration: 800, delay: 300 }}>
					<h1
						class="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold text-white mb-4 tracking-tight leading-[0.95]"
					>
						{slides[currentSlide].title}
					</h1>
					<p class="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-light text-white/90 mb-12">
						{slides[currentSlide].subtitle}
					</p>
				</div>
			{/key}

			<div in:fade={{ duration: 800, delay: 600 }}>
				<a
					href="/projects"
					class="inline-flex items-center gap-3 px-8 py-4 bg-white text-charcoal text-sm font-medium tracking-wide rounded-full hover:bg-accent hover:text-white transition-all duration-500 transform hover:scale-105 shadow-2xl"
				>
					Explore Our Work
					<svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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
	</div>

	<!-- Slide Indicators -->
	<div class="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20 flex gap-2">
		{#each slides as _, i}
			<button
				on:click={() => goToSlide(i)}
				class="w-2 h-2 rounded-full transition-all duration-500 {i === currentSlide
					? 'bg-white w-8'
					: 'bg-white/40 hover:bg-white/60'}"
				aria-label="Go to slide {i + 1}"
			></button>
		{/each}
	</div>

	<!-- Scroll Indicator -->
	<div class="absolute bottom-8 right-8 animate-bounce hidden lg:block">
		<svg class="w-6 h-6 text-white/60" fill="none" stroke="currentColor" viewBox="0 0 24 24">
			<path
				stroke-linecap="round"
				stroke-linejoin="round"
				stroke-width="2"
				d="M19 14l-7 7m0 0l-7-7m7 7V3"
			/>
		</svg>
	</div>
</div>

<style>
	@keyframes zoomOut {
		from {
			transform: scale(1.05);
		}
		to {
			transform: scale(1);
		}
	}
</style>
