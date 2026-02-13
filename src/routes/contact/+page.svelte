<script lang="ts">
	import { onMount } from 'svelte';
	import { fly } from 'svelte/transition';

	let formData = {
		name: '',
		email: '',
		message: ''
	};

	let submitted = false;
	let visible = false;

	onMount(() => {
		setTimeout(() => (visible = true), 200);
	});

	function handleSubmit(e: Event) {
		e.preventDefault();
		// Handle form submission here (connect to backend/API)
		console.log('Form submitted:', formData);
		submitted = true;
		setTimeout(() => {
			submitted = false;
			formData = { name: '', email: '', message: '' };
		}, 3000);
	}
</script>

<svelte:head>
	<title>Contact - Don Wallet Concept</title>
</svelte:head>

<div class="pt-24 sm:pt-28 lg:pt-36 pb-16 sm:pb-20 lg:pb-24 px-4 sm:px-6 lg:px-12">
	{#if visible}
		<div class="max-w-5xl mx-auto mb-16 sm:mb-20 lg:mb-24">
			<div in:fly={{ y: 30, duration: 800 }}>
				<h1 class="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 sm:mb-8 text-charcoal">
					Get In Touch
				</h1>
				<p class="text-base sm:text-lg lg:text-2xl text-gray-accent leading-relaxed">
					Let's discuss your project and explore how we can create something exceptional together.
				</p>
			</div>
		</div>

		<div class="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 sm:gap-16">
			<!-- Contact Form -->
			<div in:fly={{ x: -50, duration: 800, delay: 200 }}>
				<form on:submit={handleSubmit} class="space-y-6">
					<div>
						<label for="name" class="block text-sm font-medium mb-2 text-charcoal">Name</label>
						<input
							type="text"
							id="name"
							bind:value={formData.name}
							required
							class="w-full px-4 py-3 sm:py-4 border border-gray-300 rounded-xl focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/20 transition-all text-sm sm:text-base"
							placeholder="Your name"
						/>
					</div>

					<div>
						<label for="email" class="block text-sm font-medium mb-2 text-charcoal">Email</label>
						<input
							type="email"
							id="email"
							bind:value={formData.email}
							required
							class="w-full px-4 py-3 sm:py-4 border border-gray-300 rounded-xl focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/20 transition-all text-sm sm:text-base"
							placeholder="your@email.com"
						/>
					</div>

					<div>
						<label for="message" class="block text-sm font-medium mb-2 text-charcoal">Message</label>
						<textarea
							id="message"
							bind:value={formData.message}
							required
							rows="6"
							class="w-full px-4 py-3 sm:py-4 border border-gray-300 rounded-xl focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/20 transition-all resize-none text-sm sm:text-base"
							placeholder="Tell us about your project..."
						></textarea>
					</div>

					<button
						type="submit"
						class="w-full px-6 sm:px-8 py-3 sm:py-4 bg-charcoal text-white text-sm sm:text-base font-medium tracking-wide rounded-full hover:bg-accent transition-all duration-300 transform hover:scale-105 shadow-lg"
					>
						Send Message
					</button>

					{#if submitted}
						<p class="text-green-600 text-center text-sm sm:text-base animate-fadeIn">
							Thank you! We'll be in touch soon.
						</p>
					{/if}
				</form>
			</div>

			<!-- Contact Information -->
			<div class="space-y-8 sm:space-y-12" in:fly={{ x: 50, duration: 800, delay: 400 }}>
				<div>
					<h2 class="text-2xl sm:text-3xl font-bold mb-4 sm:mb-6 text-charcoal">
						Contact Information
					</h2>
					<div class="space-y-4 sm:space-y-6">
						<div class="flex items-start gap-4">
							<div class="w-10 h-10 bg-off-white rounded-lg flex items-center justify-center flex-shrink-0">
								<svg class="w-5 h-5 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
									<path
										stroke-linecap="round"
										stroke-linejoin="round"
										stroke-width="2"
										d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
									/>
								</svg>
							</div>
							<div>
								<p class="text-xs sm:text-sm text-gray-accent mb-1">Email</p>
								<a
									href="mailto:info@donwallet.com"
									class="text-base sm:text-lg hover:text-accent transition-colors break-all"
									>info@donwallet.com</a
								>
							</div>
						</div>

						<div class="flex items-start gap-4">
							<div class="w-10 h-10 bg-off-white rounded-lg flex items-center justify-center flex-shrink-0">
								<svg class="w-5 h-5 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
									<path
										stroke-linecap="round"
										stroke-linejoin="round"
										stroke-width="2"
										d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
									/>
								</svg>
							</div>
							<div>
								<p class="text-xs sm:text-sm text-gray-accent mb-1">Phone</p>
								<a
									href="tel:+1234567890"
									class="text-base sm:text-lg hover:text-accent transition-colors">+123 456 7890</a
								>
							</div>
						</div>

						<div class="flex items-start gap-4">
							<div class="w-10 h-10 bg-off-white rounded-lg flex items-center justify-center flex-shrink-0">
								<svg class="w-5 h-5 text-accent" fill="currentColor" viewBox="0 0 24 24">
									<path
										d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"
									/>
								</svg>
							</div>
							<div>
								<p class="text-xs sm:text-sm text-gray-accent mb-1">WhatsApp</p>
								<a
									href="https://wa.me/1234567890"
									target="_blank"
									rel="noopener noreferrer"
									class="text-base sm:text-lg hover:text-accent transition-colors">+123 456 7890</a
								>
							</div>
						</div>
					</div>
				</div>

				<div>
					<h2 class="text-2xl sm:text-3xl font-bold mb-4 sm:mb-6 text-charcoal">Office Hours</h2>
					<div class="space-y-2 text-sm sm:text-base text-gray-600">
						<p>Monday - Friday: 9:00 AM - 6:00 PM</p>
						<p>Saturday: 10:00 AM - 2:00 PM</p>
						<p>Sunday: Closed</p>
					</div>
				</div>

				<div>
					<h2 class="text-2xl sm:text-3xl font-bold mb-4 sm:mb-6 text-charcoal">Location</h2>
					<p class="text-sm sm:text-base text-gray-600 mb-4">
						123 Architecture Lane<br />
						Design District<br />
						New York, NY 10001
					</p>
					<div
						class="w-full h-48 sm:h-64 bg-off-white rounded-2xl flex items-center justify-center text-gray-accent text-sm"
					>
						[Map Placeholder]
					</div>
				</div>
			</div>
		</div>
	{/if}
</div>
