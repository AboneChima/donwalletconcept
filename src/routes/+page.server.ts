import type { PageServerLoad } from './$types';
import { neon } from '@neondatabase/serverless';

const sql = neon(process.env.DATABASE_URL || '');

export const load: PageServerLoad = async () => {
	try {
		const allProjects = await sql`
			SELECT * FROM projects ORDER BY year DESC, created_at DESC
		`;

		console.log('Total projects loaded:', allProjects.length);

		// Get featured projects (1, 3, 6) - using LIKE for flexibility
		const featuredProjects = allProjects.filter(
			(p: any) => {
				const thumb = p.thumbnail || '';
				return thumb.includes('project1.jpg') || 
				       thumb.includes('project3.jpg') || 
				       thumb.includes('project6.jpg');
			}
		);

		console.log('Featured projects found:', featuredProjects.length);
		console.log('Featured project thumbnails:', featuredProjects.map((p: any) => p.thumbnail));

		// If no featured projects found, use first 3 projects
		const finalFeatured = featuredProjects.length > 0 
			? featuredProjects 
			: allProjects.slice(0, 3);

		return {
			featuredProjects: finalFeatured
		};
	} catch (error) {
		console.error('Failed to load projects:', error);
		return {
			featuredProjects: []
		};
	}
};
