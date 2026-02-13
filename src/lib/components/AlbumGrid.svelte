<script lang="ts">
	import { fly } from 'svelte/transition';

	export let images: { src: string; alt: string; span?: string }[] = [];
	let visible = true;
</script>

<div class="album-grid">
	{#each images as image, i}
		<div
			class="album-item {image.span || ''} group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2"
			in:fly={{ y: 50, duration: 800, delay: i * 150 }}
		>
			<img
				src={image.src}
				alt={image.alt}
				class="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
			/>
			<!-- Hover Overlay -->
			<div
				class="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-4"
			>
				<p class="text-white text-sm font-medium">{image.alt}</p>
			</div>
		</div>
	{/each}
</div>

<style>
	.album-grid {
		display: grid;
		grid-template-columns: repeat(2, 1fr);
		gap: 1rem;
		grid-auto-rows: 200px;
	}

	@media (min-width: 640px) {
		.album-grid {
			grid-template-columns: repeat(3, 1fr);
			gap: 1.5rem;
			grid-auto-rows: 220px;
		}
	}

	@media (min-width: 1024px) {
		.album-grid {
			grid-template-columns: repeat(4, 1fr);
			gap: 2rem;
			grid-auto-rows: 250px;
		}
	}

	.album-item {
		position: relative;
	}

	/* Span classes for interesting layouts */
	.album-item.span-2 {
		grid-column: span 2;
	}

	.album-item.span-row-2 {
		grid-row: span 2;
	}

	.album-item.span-2-row-2 {
		grid-column: span 2;
		grid-row: span 2;
	}

	@media (max-width: 639px) {
		.album-item.span-2,
		.album-item.span-2-row-2 {
			grid-column: span 2;
		}
		.album-item.span-row-2,
		.album-item.span-2-row-2 {
			grid-row: span 1;
		}
	}
</style>
