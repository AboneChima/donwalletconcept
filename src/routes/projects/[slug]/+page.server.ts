import type { PageServerLoad } from './$types';
import { neon } from '@neondatabase/serverless';
import { error } from '@sveltejs/kit';

const sql = neon(process.env.DATABASE_URL || '');

export const load: PageServerLoad = async ({ params }) => {
	try {
		const result = await sql`
			SELECT * FROM projects WHERE slug = ${params.slug}
		`;

		if (result.length === 0) {
			throw error(404, 'Project not found');
		}

		return {
			project: result[0]
		};
	} catch (err) {
		console.error('Failed to load project:', err);
		throw error(404, 'Project not found');
	}
};
