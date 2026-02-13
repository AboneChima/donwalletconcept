<script lang="ts">
	import { onMount } from 'svelte';
	import { fly, fade } from 'svelte/transition';

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
		console.log('Form submitted:', formData);
		submitted = true;
		setTimeout(() => {
			submitted = false;
			formData = { name: '', email: '', message: '' };
		}, 3000);
	}
</script>

<svelte:head>
	<title>Contact - Don Wallet Construction Company Limited</title>
</svelte:head>

<div class="min-h-screen bg-white">
	<!-- Hero Section - Minimal -->
	<div class="pt-24 sm:pt-28 pb-12 px-4 sm:px-6 lg:px-12">
		{#if visible}
			<div class="max-w-4xl mx-auto text-center" in:fly={{ y: 30, duration: 800 }}>
				<span class="inline-block px-4 py-2 bg-gray-50 text-charcoal text-xs font-semibold rounded-full tracking-wider uppercase mb-4">
					Get In Touch
				</span>
				<h1 class="text-4xl sm:text-5xl lg:text-6xl font-bold mb-4 text-charcoal tracking-tight">
					Let's Create Together
				</h1>
				<p class="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto">
					Ready to bring your vision to life? We'd love to hear from you.
				</p>
			</div>
		{/if}
	</div>

	<!-- Main Content -->
	<div class="pb-16 sm:pb-20 px-4 sm:px-6 lg:px-12">
		<div class="max-w-6xl mx-auto">
			<div class="grid grid-cols-1 lg:grid-cols-5 gap-8 lg:gap-12">
				<!-- Contact Form - Takes 3 columns -->
				<div class="lg:col-span-3" in:fly={{ y: 30, duration: 600, delay: 100 }}>
					<div class="bg-gray-50 rounded-3xl p-6 sm:p-8 lg:p-10">
						<form on:submit={handleSubmit} class="space-y-5">
							<div class="grid grid-cols-1 sm:grid-cols-2 gap-5">
								<div>
									<label for="name" class="block text-xs font-medium mb-2 text-gray-600 uppercase tracking-wide">Name</label>
									<input
										type="text"
										id="name"
										bind:value={formData.name}
										required
										class="w-full px-4 py-3.5 bg-white border border-gray-200 rounded-2xl focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/10 transition-all text-sm placeholder:text-gray-400"
										placeholder="John Doe"
									/>
								</div>

								<div>
									<label for="email" class="block text-xs font-medium mb-2 text-gray-600 uppercase tracking-wide">Email</label>
									<input
										type="email"
										id="email"
										bind:value={formData.email}
										required
										class="w-full px-4 py-3.5 bg-white border border-gray-200 rounded-2xl focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/10 transition-all text-sm placeholder:text-gray-400"
										placeholder="john@example.com"
									/>
								</div>
							</div>

							<div>
								<label for="message" class="block text-xs font-medium mb-2 text-gray-600 uppercase tracking-wide">Message</label>
								<textarea
									id="message"
									bind:value={formData.message}
									required
									rows="6"
									class="w-full px-4 py-3.5 bg-white border border-gray-200 rounded-2xl focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/10 transition-all resize-none text-sm placeholder:text-gray-400"
									placeholder="Tell us about your project..."
								></textarea>
							</div>

							<button
								type="submit"
								class="w-full px-6 py-4 bg-charcoal text-white text-sm font-semibold rounded-full hover:bg-accent transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-[1.02]"
							>
								Send Message
							</button>

							{#if submitted}
								<div in:fade class="text-center">
									<div class="inline-flex items-center gap-2 px-4 py-2 bg-green-50 text-green-700 rounded-full text-sm">
										<svg class="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
											<path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
										</svg>
										Message sent successfully!
									</div>
								</div>
							{/if}
						</form>
					</div>
				</div>

				<!-- Contact Info - Takes 2 columns -->
				<div class="lg:col-span-2 space-y-6" in:fly={{ y: 30, duration: 600, delay: 200 }}>
					<!-- Contact Cards -->
					<div class="space-y-4">
						<a href="mailto:ugoobiorah@gmail.com" class="block group">
							<div class="bg-gray-50 rounded-2xl p-5 hover:bg-gray-100 transition-all duration-300">
								<div class="flex items-start gap-4">
									<div class="w-10 h-10 bg-white rounded-xl flex items-center justify-center flex-shrink-0 group-hover:bg-accent group-hover:scale-110 transition-all duration-300">
										<svg class="w-5 h-5 text-accent group-hover:text-white transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
											<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
										</svg>
									</div>
									<div class="flex-1 min-w-0">
										<p class="text-xs text-gray-500 mb-1 uppercase tracking-wide">Email</p>
										<p class="text-sm text-charcoal font-medium truncate">ugoobiorah@gmail.com</p>
									</div>
								</div>
							</div>
						</a>

						<a href="tel:+2348137706136" class="block group">
							<div class="bg-gray-50 rounded-2xl p-5 hover:bg-gray-100 transition-all duration-300">
								<div class="flex items-start gap-4">
									<div class="w-10 h-10 bg-white rounded-xl flex items-center justify-center flex-shrink-0 group-hover:bg-accent group-hover:scale-110 transition-all duration-300">
										<svg class="w-5 h-5 text-accent group-hover:text-white transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
											<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
										</svg>
									</div>
									<div>
										<p class="text-xs text-gray-500 mb-1 uppercase tracking-wide">Phone</p>
										<p class="text-sm text-charcoal font-medium">+234 813 770 6136</p>
									</div>
								</div>
							</div>
						</a>

						<a href="https://wa.me/2348137706136" target="_blank" rel="noopener noreferrer" class="block group">
							<div class="bg-gray-50 rounded-2xl p-5 hover:bg-gray-100 transition-all duration-300">
								<div class="flex items-start gap-4">
									<div class="w-10 h-10 bg-white rounded-xl flex items-center justify-center flex-shrink-0 group-hover:bg-green-500 group-hover:scale-110 transition-all duration-300">
										<svg class="w-5 h-5 text-green-500 group-hover:text-white transition-colors" fill="currentColor" viewBox="0 0 24 24">
											<path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
										</svg>
									</div>
									<div>
										<p class="text-xs text-gray-500 mb-1 uppercase tracking-wide">WhatsApp</p>
										<p class="text-sm text-charcoal font-medium">+234 813 770 6136</p>
									</div>
								</div>
							</div>
						</a>
					</div>

					<!-- Office Hours -->
					<div class="bg-gray-50 rounded-2xl p-5">
						<h3 class="text-xs text-gray-500 mb-3 uppercase tracking-wide font-medium">Office Hours</h3>
						<div class="space-y-2 text-sm text-charcoal">
							<div class="flex justify-between">
								<span class="text-gray-600">Monday - Friday</span>
								<span class="font-medium">9:00 AM - 6:00 PM</span>
							</div>
							<div class="flex justify-between">
								<span class="text-gray-600">Saturday</span>
								<span class="font-medium">10:00 AM - 2:00 PM</span>
							</div>
							<div class="flex justify-between">
								<span class="text-gray-600">Sunday</span>
								<span class="font-medium">Closed</span>
							</div>
						</div>
					</div>
				</div>
			</div>

			<!-- Map Section -->
			<div class="mt-12" in:fly={{ y: 30, duration: 600, delay: 300 }}>
				<div class="bg-gray-50 rounded-3xl p-6 sm:p-8">
					<div class="mb-6">
						<h3 class="text-xs text-gray-500 mb-2 uppercase tracking-wide font-medium">Location</h3>
						<p class="text-base text-charcoal font-medium">Anambra State, Nigeria</p>
					</div>
					<div class="w-full h-64 sm:h-80 lg:h-96 bg-white rounded-2xl overflow-hidden shadow-inner">
						<iframe
							src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d507617.8!2d6.9!3d6.2!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1043a7b6c8b8b8b9%3A0x3a1c3f8e5e5e5e5e!2sAnambra%2C%20Nigeria!5e0!3m2!1sen!2sus!4v1234567890"
							width="100%"
							height="100%"
							style="border:0;"
							allowfullscreen=""
							loading="lazy"
							referrerpolicy="no-referrer-when-downgrade"
							title="Office Location"
							class="grayscale hover:grayscale-0 transition-all duration-500"
						></iframe>
					</div>
				</div>
			</div>
		</div>
	</div>
</div>
