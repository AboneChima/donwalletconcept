import { neon } from '@neondatabase/serverless';
import { POSTGRES_URL } from '$env/static/private';

export const sql = neon(POSTGRES_URL);

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
