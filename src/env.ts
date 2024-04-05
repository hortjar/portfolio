import { createEnv } from '@t3-oss/env-core';
import { z } from 'zod';

export const env = createEnv({
	server: {
		POSTGRES_URL: z.string().url()
	},
	clientPrefix: 'PUBLIC_',
	client: {},
	runtimeEnv: process.env,
	emptyStringAsUndefined: true
});
