<script lang="ts">
	import { onMount } from 'svelte';
	import { fly, fade } from 'svelte/transition';

	interface Project {
		id?: string;
		slug: string;
		title: string;
		location: string;
		year: number;
		category: string;
		size?: string;
		description: string;
		thumbnail: string;
		hero: string;
		images: string[];
	}

	let allProjects: Project[] = [];
	let selectedProject: Project | null = null;
	let isEditing = false;
	let showDeleteConfirm = false;
	let projectToDelete: Project | null = null;
	let loading = false;
	let error = '';

	// Form state
	let formData = {
		title: '',
		location: '',
		year: new Date().getFullYear(),
		category: 'Bungalow',
		size: '',
		description: '',
		thumbnail: '',
		images: ['', '', '']
	};

	const categories = ['Bungalow', 'Duplex', 'Mansion', 'Interiors'];

	onMount(async () => {
		await fetchProjects();
	});

	async function fetchProjects() {
		loading = true;
		try {
			const response = await fetch('/api/projects');
			if (response.ok) {
				allProjects = await response.json();
			} else {
				error = 'Failed to load projects';
			}
		} catch (err) {
			error = 'Failed to connect to database';
			console.error(err);
		} finally {
			loading = false;
		}
	}

	function generateSlug(title: string): string {
		return title
			.toLowerCase()
			.replace(/[^a-z0-9]+/g, '-')
			.replace(/(^-|-$)/g, '');
	}

	function resetForm() {
		formData = {
			title: '',
			location: '',
			year: new Date().getFullYear(),
			category: 'Bungalow',
			size: '',
			description: '',
			thumbnail: '',
			images: ['', '', '']
		};
		selectedProject = null;
		isEditing = false;
		error = '';
	}

	function editProject(project: Project) {
		selectedProject = project;
		isEditing = true;
		formData = {
			title: project.title,
			location: project.location,
			year: project.year,
			category: project.category,
			size: project.size || '',
			description: project.description,
			thumbnail: project.thumbnail,
			images: [...project.images]
		};
	}

	function confirmDelete(project: Project) {
		projectToDelete = project;
		showDeleteConfirm = true;
	}

	async function deleteProject() {
		if (!projectToDelete?.id) return;

		loading = true;
		try {
			const response = await fetch(`/api/projects/${projectToDelete.id}`, {
				method: 'DELETE'
			});

			if (response.ok) {
				await fetchProjects();
				showDeleteConfirm = false;
				projectToDelete = null;
			} else {
				error = 'Failed to delete project';
			}
		} catch (err) {
			error = 'Failed to delete project';
			console.error(err);
		} finally {
			loading = false;
		}
	}

	async function saveProject() {
		loading = true;
		error = '';

		try {
			const projectData = {
				slug: generateSlug(formData.title),
				title: formData.title,
				location: formData.location,
				year: formData.year,
				category: formData.category,
				size: formData.size || null,
				description: formData.description,
				thumbnail: formData.thumbnail,
				hero: formData.thumbnail,
				images: formData.images
			};

			let response;
			if (isEditing && selectedProject?.id) {
				// Update existing project
				response = await fetch(`/api/projects/${selectedProject.id}`, {
					method: 'PUT',
					headers: { 'Content-Type': 'application/json' },
					body: JSON.stringify(projectData)
				});
			} else {
				// Create new project
				response = await fetch('/api/projects', {
					method: 'POST',
					headers: { 'Content-Type': 'application/json' },
					body: JSON.stringify(projectData)
				});
			}

			if (response.ok) {
				await fetchProjects();
				resetForm();
			} else {
				const data = await response.json();
				error = data.error || 'Failed to save project';
			}
		} catch (err) {
			error = 'Failed to save project';
			console.error(err);
		} finally {
			loading = false;
		}
	}
</script>

<svelte:head>
	<title>Admin Panel - Don Wallet Concept</title>
</svelte:head>

<div class="min-h-screen bg-gray-50">
	<!-- Header -->
	<div class="bg-white border-b border-gray-200">
		<div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
			<div class="flex items-center justify-between">
				<div>
					<h1 class="text-2xl font-bold text-charcoal">Admin Panel</h1>
					<p class="text-sm text-gray-600 mt-1">Manage your architectural projects</p>
				</div>
				<a
					href="/"
					class="inline-flex items-center gap-2 px-4 py-2 text-sm font-semibold text-gray-700 bg-gray-100 rounded-lg hover:bg-gray-200 transition-colors"
				>
					<svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
						<path
							stroke-linecap="round"
							stroke-linejoin="round"
							stroke-width="2"
							d="M10 19l-7-7m0 0l7-7m-7 7h18"
						/>
					</svg>
					Back to Site
				</a>
			</div>
		</div>
	</div>

	<div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
		<!-- Error Message -->
		{#if error}
			<div class="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg text-red-700 text-sm">
				{error}
			</div>
		{/if}

		<!-- Loading Indicator -->
		{#if loading}
			<div class="fixed inset-0 bg-black/20 flex items-center justify-center z-50">
				<div class="bg-white rounded-lg p-6 shadow-xl">
					<div class="animate-spin rounded-full h-12 w-12 border-b-2 border-accent mx-auto"></div>
					<p class="mt-4 text-sm text-gray-600">Loading...</p>
				</div>
			</div>
		{/if}
		<div class="grid grid-cols-1 lg:grid-cols-3 gap-6">
			<!-- Project Form -->
			<div class="lg:col-span-2">
				<div class="bg-white rounded-xl shadow-sm p-6">
					<div class="flex items-center justify-between mb-6">
						<h2 class="text-xl font-bold text-charcoal">
							{isEditing ? 'Edit Project' : 'Add New Project'}
						</h2>
						{#if isEditing}
							<button
								on:click={resetForm}
								class="text-sm text-gray-600 hover:text-charcoal transition-colors"
							>
								Cancel Edit
							</button>
						{/if}
					</div>

					<form on:submit|preventDefault={saveProject} class="space-y-5">
						<!-- Title -->
						<div>
							<label class="block text-sm font-semibold text-gray-700 mb-2">Project Title</label>
							<input
								type="text"
								bind:value={formData.title}
								required
								class="w-full px-4 py-2.5 border border-gray-200 rounded-lg focus:ring-2 focus:ring-accent focus:border-transparent transition-all"
								placeholder="Contemporary Bungalow"
							/>
						</div>

						<!-- Location & Year -->
						<div class="grid grid-cols-2 gap-4">
							<div>
								<label class="block text-sm font-semibold text-gray-700 mb-2">Location</label>
								<input
									type="text"
									bind:value={formData.location}
									required
									class="w-full px-4 py-2.5 border border-gray-200 rounded-lg focus:ring-2 focus:ring-accent focus:border-transparent transition-all"
									placeholder="Lagos, Nigeria"
								/>
							</div>
							<div>
								<label class="block text-sm font-semibold text-gray-700 mb-2">Year</label>
								<input
									type="number"
									bind:value={formData.year}
									required
									min="2000"
									max="2030"
									class="w-full px-4 py-2.5 border border-gray-200 rounded-lg focus:ring-2 focus:ring-accent focus:border-transparent transition-all"
								/>
							</div>
						</div>

						<!-- Category & Size -->
						<div class="grid grid-cols-2 gap-4">
							<div>
								<label class="block text-sm font-semibold text-gray-700 mb-2">Category</label>
								<select
									bind:value={formData.category}
									class="w-full px-4 py-2.5 border border-gray-200 rounded-lg focus:ring-2 focus:ring-accent focus:border-transparent transition-all"
								>
									{#each categories as category}
										<option value={category}>{category}</option>
									{/each}
								</select>
							</div>
							<div>
								<label class="block text-sm font-semibold text-gray-700 mb-2">Size</label>
								<input
									type="text"
									bind:value={formData.size}
									class="w-full px-4 py-2.5 border border-gray-200 rounded-lg focus:ring-2 focus:ring-accent focus:border-transparent transition-all"
									placeholder="280 sqm"
								/>
							</div>
						</div>

						<!-- Description -->
						<div>
							<label class="block text-sm font-semibold text-gray-700 mb-2">Description</label>
							<textarea
								bind:value={formData.description}
								required
								rows="3"
								class="w-full px-4 py-2.5 border border-gray-200 rounded-lg focus:ring-2 focus:ring-accent focus:border-transparent transition-all resize-none"
								placeholder="A modern single-story bungalow featuring..."
							></textarea>
						</div>

						<!-- Thumbnail -->
						<div>
							<label class="block text-sm font-semibold text-gray-700 mb-2"
								>Thumbnail Image URL</label
							>
							<input
								type="text"
								bind:value={formData.thumbnail}
								required
								class="w-full px-4 py-2.5 border border-gray-200 rounded-lg focus:ring-2 focus:ring-accent focus:border-transparent transition-all"
								placeholder="/images/project1.jpg"
							/>
						</div>

						<!-- Gallery Images -->
						<div>
							<label class="block text-sm font-semibold text-gray-700 mb-2"
								>Gallery Images (3 URLs)</label
							>
							<div class="space-y-2">
								{#each formData.images as image, i}
									<input
										type="text"
										bind:value={formData.images[i]}
										required
										class="w-full px-4 py-2.5 border border-gray-200 rounded-lg focus:ring-2 focus:ring-accent focus:border-transparent transition-all"
										placeholder="/images/project{i + 1}.jpg"
									/>
								{/each}
							</div>
						</div>

						<!-- Submit Button -->
						<button
							type="submit"
							class="w-full px-6 py-3 bg-charcoal text-white font-semibold rounded-lg hover:bg-accent transition-colors shadow-sm"
						>
							{isEditing ? 'Update Project' : 'Add Project'}
						</button>
					</form>
				</div>
			</div>

			<!-- Projects List -->
			<div class="lg:col-span-1">
				<div class="bg-white rounded-xl shadow-sm p-6">
					<h2 class="text-xl font-bold text-charcoal mb-4">All Projects ({allProjects.length})</h2>

					<div class="space-y-3 max-h-[600px] overflow-y-auto">
						{#each allProjects as project}
							<div
								class="p-4 border border-gray-200 rounded-lg hover:border-accent transition-colors"
								in:fade={{ duration: 200 }}
							>
								<div class="flex items-start gap-3">
									<img
										src={project.thumbnail}
										alt={project.title}
										class="w-16 h-16 object-cover rounded-lg"
									/>
									<div class="flex-1 min-w-0">
										<h3 class="font-semibold text-sm text-charcoal truncate">
											{project.title}
										</h3>
										<p class="text-xs text-gray-600 mt-1">
											{project.category} • {project.year}
										</p>
										<div class="flex gap-2 mt-2">
											<button
												on:click={() => editProject(project)}
												class="text-xs text-accent hover:text-charcoal transition-colors font-medium"
											>
												Edit
											</button>
											<button
												on:click={() => confirmDelete(project)}
												class="text-xs text-red-600 hover:text-red-700 transition-colors font-medium"
											>
												Delete
											</button>
										</div>
									</div>
								</div>
							</div>
						{/each}
					</div>
				</div>
			</div>
		</div>
	</div>
</div>

<!-- Delete Confirmation Modal -->
{#if showDeleteConfirm}
	<div
		class="fixed inset-0 z-50 bg-black/50 flex items-center justify-center p-4"
		transition:fade={{ duration: 200 }}
		on:click={() => (showDeleteConfirm = false)}
		role="button"
		tabindex="0"
	>
		<div
			class="bg-white rounded-xl p-6 max-w-sm w-full"
			on:click|stopPropagation
			in:fly={{ y: 20, duration: 300 }}
			role="button"
			tabindex="0"
		>
			<h3 class="text-lg font-bold text-charcoal mb-2">Delete Project?</h3>
			<p class="text-sm text-gray-600 mb-6">
				Are you sure you want to delete "{projectToDelete?.title}"? This action cannot be undone.
			</p>
			<div class="flex gap-3">
				<button
					on:click={() => (showDeleteConfirm = false)}
					class="flex-1 px-4 py-2 border border-gray-200 text-gray-700 font-semibold rounded-lg hover:bg-gray-50 transition-colors"
				>
					Cancel
				</button>
				<button
					on:click={deleteProject}
					class="flex-1 px-4 py-2 bg-red-600 text-white font-semibold rounded-lg hover:bg-red-700 transition-colors"
				>
					Delete
				</button>
			</div>
		</div>
	</div>
{/if}
