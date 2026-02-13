import { neon } from '@neondatabase/serverless';
import { env } from '$env/dynamic/private';

const POSTGRES_URL = env.POSTGRES_URL || '';

if (!POSTGRES_URL) {
	console.warn('POSTGRES_URL not set - database features will not work');
}

export const sql = POSTGRES_URL ? neon(POSTGRES_URL) : null;

export interface Project {
	id: string;
	slug: string;
	title: string;
	location: string;
	year: number;
	category: string;
	size?: string;
	thumbnail: string;
	hero: string;
	description: string;
	images: string[];
	created_at: Date;
}
