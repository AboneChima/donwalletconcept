import { json } from '@sveltejs/kit';
import type { RequestHandler } from './$types';
import { neon } from '@neondatabase/serverless';

const sql = neon(process.env.DATABASE_URL || '');

export const PUT: RequestHandler = async ({ params, request }) => {
	try {
		const data = await request.json();
		
		const result = await sql`
			UPDATE projects SET
				slug = ${data.slug},
				title = ${data.title},
				location = ${data.location},
				year = ${data.year},
				category = ${data.category},
				size = ${data.size},
				description = ${data.description},
				thumbnail = ${data.thumbnail},
				hero = ${data.hero},
				images = ${JSON.stringify(data.images)}
			WHERE id = ${params.id}
			RETURNING *
		`;
		
		if (result.length === 0) {
			return json({ error: 'Project not found' }, { status: 404 });
		}
		
		return json(result[0]);
	} catch (error) {
		console.error('Database error:', error);
		return json({ error: 'Failed to update project' }, { status: 500 });
	}
};

export const DELETE: RequestHandler = async ({ params }) => {
	try {
		const result = await sql`
			DELETE FROM projects WHERE id = ${params.id} RETURNING id
		`;
		
		if (result.length === 0) {
			return json({ error: 'Project not found' }, { status: 404 });
		}
		
		return json({ success: true });
	} catch (error) {
		console.error('Database error:', error);
		return json({ error: 'Failed to delete project' }, { status: 500 });
	}
};
