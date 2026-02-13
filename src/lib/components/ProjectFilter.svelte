<script lang="ts">
	import { fly } from 'svelte/transition';
	import { cubicOut } from 'svelte/easing';

	export let categories: string[] = [];
	export let activeCategory: string = 'All';
	export let onFilterChange: (category: string) => void;

	const allCategories = ['All', ...categories];
</script>

<div class="flex flex-wrap gap-2 justify-center mb-12" in:fly={{ y: 20, duration: 600, delay: 200, easing: cubicOut }}>
	{#each allCategories as category, i}
		<button
			on:click={() => onFilterChange(category)}
			in:fly={{ y: 15, duration: 400, delay: 250 + i * 30, easing: cubicOut }}
			class="px-5 py-2.5 text-sm font-semibold rounded-full transition-all duration-300 ease-out {activeCategory ===
			category
				? 'bg-charcoal text-white shadow-lg'
				: 'bg-white text-gray-700 hover:bg-gray-100 shadow-sm hover:shadow-md'}"
		>
			{category}
		</button>
	{/each}
</div>
