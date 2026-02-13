import type { PageServerLoad } from './$types';
import { neon } from '@neondatabase/serverless';

const sql = neon(process.env.DATABASE_URL || '');

export const load: PageServerLoad = async () => {
	try {
		const allProjects = await sql`
			SELECT * FROM projects ORDER BY year DESC, created_at DESC
		`;

		// Get featured projects (1, 3, 6)
		const featuredProjects = allProjects.filter(
			(p: any) =>
				p.thumbnail === '/images/project1.jpg' ||
				p.thumbnail === '/images/project3.jpg' ||
				p.thumbnail === '/images/project6.jpg'
		);

		return {
			featuredProjects
		};
	} catch (error) {
		console.error('Failed to load projects:', error);
		return {
			featuredProjects: []
		};
	}
};
