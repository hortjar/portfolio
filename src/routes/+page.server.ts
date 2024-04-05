import { db } from '$lib/server/db';

export async function load() {
	return {
		projects: await db.query.projects.findMany()
	};
}
