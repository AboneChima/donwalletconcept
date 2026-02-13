import { json } from '@sveltejs/kit';
import { sql } from '$lib/db';
import type { RequestHandler } from './$types';

// GET all projects
export const GET: RequestHandler = async () => {
	try {
		const projects = await sql`
			SELECT * FROM projects 
			ORDER BY created_at DESC
		`;
		return json(projects);
	} catch (error) {
		console.error('Error fetching projects:', error);
		return json({ error: 'Failed to fetch projects' }, { status: 500 });
	}
};

// POST create new project
export const POST: RequestHandler = async ({ request }) => {
	try {
		const data = await request.json();
		
		const result = await sql`
			INSERT INTO projects (
				slug, title, location, year, category, size, 
				thumbnail, hero, description, images
			) VALUES (
				${data.slug},
				${data.title},
				${data.location},
				${data.year},
				${data.category},
				${data.size || null},
				${data.thumbnail},
				${data.hero},
				${data.description},
				${JSON.stringify(data.images)}
			)
			RETURNING *
		`;
		
		return json(result[0], { status: 201 });
	} catch (error) {
		console.error('Error creating project:', error);
		return json({ error: 'Failed to create project' }, { status: 500 });
	}
};
