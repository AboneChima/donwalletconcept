<script lang="ts">
	import '../app.css';
	import Nav from '$lib/components/Nav.svelte';
	import Footer from '$lib/components/Footer.svelte';
	import PageLoader from '$lib/components/PageLoader.svelte';
	import WhatsAppFloat from '$lib/components/WhatsAppFloat.svelte';
</script>

<PageLoader />

<div class="min-h-screen flex flex-col">
	<Nav />
	<main class="flex-1">
		<slot />
	</main>
	<Footer />
	<WhatsAppFloat />
</div>
