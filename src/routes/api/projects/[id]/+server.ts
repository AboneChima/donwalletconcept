import { json } from '@sveltejs/kit';
import { sql } from '$lib/db';
import type { RequestHandler } from './$types';

// PUT update project
export const PUT: RequestHandler = async ({ params, request }) => {
	try {
		if (!sql) {
			return json({ error: 'Database not configured' }, { status: 503 });
		}
		
		const data = await request.json();
		const { id } = params;
		
		const result = await sql`
			UPDATE projects 
			SET 
				title = ${data.title},
				location = ${data.location},
				year = ${data.year},
				category = ${data.category},
				size = ${data.size || null},
				thumbnail = ${data.thumbnail},
				hero = ${data.hero},
				description = ${data.description},
				images = ${JSON.stringify(data.images)}
			WHERE id = ${id}
			RETURNING *
		`;
		
		if (result.length === 0) {
			return json({ error: 'Project not found' }, { status: 404 });
		}
		
		return json(result[0]);
	} catch (error) {
		console.error('Error updating project:', error);
		return json({ error: 'Failed to update project' }, { status: 500 });
	}
};

// DELETE project
export const DELETE: RequestHandler = async ({ params }) => {
	try {
		if (!sql) {
			return json({ error: 'Database not configured' }, { status: 503 });
		}
		
		const { id } = params;
		
		const result = await sql`
			DELETE FROM projects 
			WHERE id = ${id}
			RETURNING *
		`;
		
		if (result.length === 0) {
			return json({ error: 'Project not found' }, { status: 404 });
		}
		
		return json({ message: 'Project deleted successfully' });
	} catch (error) {
		console.error('Error deleting project:', error);
		return json({ error: 'Failed to delete project' }, { status: 500 });
	}
};
