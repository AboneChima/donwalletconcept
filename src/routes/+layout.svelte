<script lang="ts">
	import '../app.css';
	import Nav from '$lib/components/Nav.svelte';
	import Footer from '$lib/components/Footer.svelte';
	import PageLoader from '$lib/components/PageLoader.svelte';
	import WhatsAppFloat from '$lib/components/WhatsAppFloat.svelte';
	import { page } from '$app/stores';

	$: isAdminPage = $page.url.pathname === '/admin';
</script>

<PageLoader />

<div class="min-h-screen flex flex-col">
	{#if !isAdminPage}
		<Nav />
	{/if}
	<main class="flex-1">
		<slot />
	</main>
	{#if !isAdminPage}
		<Footer />
		<WhatsAppFloat />
	{/if}
</div>
