import { json } from '@sveltejs/kit';
import type { RequestHandler } from './$types';
import { writeFile, mkdir } from 'fs/promises';
import { existsSync } from 'fs';
import path from 'path';

export const POST: RequestHandler = async ({ request }) => {
	try {
		const formData = await request.formData();
		const file = formData.get('file') as File;

		if (!file) {
			return json({ error: 'No file uploaded' }, { status: 400 });
		}

		// Generate unique filename
		const timestamp = Date.now();
		const ext = file.name.split('.').pop();
		const filename = `project${timestamp}.${ext}`;

		// Ensure images directory exists
		const imagesDir = path.join(process.cwd(), 'static', 'images');
		if (!existsSync(imagesDir)) {
			await mkdir(imagesDir, { recursive: true });
		}

		// Save file
		const filepath = path.join(imagesDir, filename);
		const buffer = Buffer.from(await file.arrayBuffer());
		await writeFile(filepath, buffer);

		// Return URL
		return json({ url: `/images/${filename}` });
	} catch (error) {
		console.error('Upload error:', error);
		return json({ error: 'Failed to upload file' }, { status: 500 });
	}
};
