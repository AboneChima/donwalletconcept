import type { PageServerLoad } from './$types';
import { neon } from '@neondatabase/serverless';

const sql = neon(process.env.DATABASE_URL || '');

export const load: PageServerLoad = async () => {
	try {
		const allProjects = await sql`
			SELECT * FROM projects ORDER BY year DESC, created_at DESC
		`;

		// Get slider projects (8, 9, 13, 5)
		const sliderProjects = allProjects.filter(
			(p: any) =>
				p.thumbnail === '/images/project8.jpg' ||
				p.thumbnail === '/images/project9.jpg' ||
				p.thumbnail === '/images/project13.jpg' ||
				p.thumbnail === '/images/project5.jpg'
		);

		// Get unique categories
		const categories = [...new Set(allProjects.map((p: any) => p.category))];

		return {
			projects: allProjects,
			sliderProjects,
			categories
		};
	} catch (error) {
		console.error('Failed to load projects:', error);
		return {
			projects: [],
			sliderProjects: [],
			categories: []
		};
	}
};
