import { env } from './src/env';
import { type Config } from 'drizzle-kit';

export default {
	schema: './src/lib/db/schema.ts',
	driver: 'pg',
	dbCredentials: {
		connectionString: env.POSTGRES_URL
	},
	tablesFilter: ['portfolio_*'],
	out: '.drizzle'
} satisfies Config;
