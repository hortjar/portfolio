import { boolean, pgTableCreator, timestamp, uuid, varchar } from 'drizzle-orm/pg-core';

export const pgTable = pgTableCreator((name) => `portfolio_${name}`);

export const projects = pgTable('projects', {
	id: uuid('id').defaultRandom().primaryKey(),
	name: varchar('name', { length: 255 }).notNull(),
	public: boolean('public').notNull(),
	url: varchar('url', { length: 511 }),
	github_url: varchar('github_url', { length: 511 }),
	created_at: timestamp('created_at').defaultNow()
});
