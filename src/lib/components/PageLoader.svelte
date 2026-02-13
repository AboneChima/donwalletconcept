<script lang="ts">
	import { onMount } from 'svelte';
	import { fade } from 'svelte/transition';

	let loading = true;

	onMount(() => {
		setTimeout(() => {
			loading = false;
		}, 1500);
	});
</script>

{#if loading}
	<div
		class="fixed inset-0 z-[9999] bg-white flex items-center justify-center"
		transition:fade={{ duration: 400 }}
	>
		<div class="text-center">
			<div class="relative w-16 h-16 mx-auto mb-4">
				<div class="absolute inset-0 border-4 border-gray-200 rounded-full"></div>
				<div
					class="absolute inset-0 border-4 border-accent border-t-transparent rounded-full animate-spin"
				></div>
			</div>
			<p class="text-sm font-bold text-charcoal tracking-tight">
				<span class="font-extrabold">DON WALLET</span> CONSTRUCTION
			</p>
			<p class="text-xs text-gray-500 tracking-wider mt-1">Company Limited</p>
		</div>
	</div>
{/if}
