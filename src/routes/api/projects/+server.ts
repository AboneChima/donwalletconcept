import { json } from '@sveltejs/kit';
import type { RequestHandler } from './$types';
import { neon } from '@neondatabase/serverless';

const sql = neon(process.env.DATABASE_URL || '');

export const GET: RequestHandler = async () => {
	try {
		const projects = await sql`
			SELECT * FROM projects ORDER BY year DESC, created_at DESC
		`;
		return json(projects);
	} catch (error) {
		console.error('Database error:', error);
		return json({ error: 'Failed to fetch projects' }, { status: 500 });
	}
};

export const POST: RequestHandler = async ({ request }) => {
	try {
		const data = await request.json();
		
		const result = await sql`
			INSERT INTO projects (
				slug, title, location, year, category, size, 
				description, thumbnail, hero, images
			) VALUES (
				${data.slug}, ${data.title}, ${data.location}, ${data.year}, 
				${data.category}, ${data.size}, ${data.description}, 
				${data.thumbnail}, ${data.hero}, ${JSON.stringify(data.images)}
			) RETURNING *
		`;
		
		return json(result[0], { status: 201 });
	} catch (error) {
		console.error('Database error:', error);
		return json({ error: 'Failed to create project' }, { status: 500 });
	}
};
