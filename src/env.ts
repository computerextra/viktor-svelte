import z from "zod";
import { env as serverEnv } from "$env/dynamic/private";

const envSchema = z.object({
	DATABASE_URL: z.url(),
	AUTH_SECRET: z.string(),
	EMAIL_SERVER_USER: z.string(),
	EMAIL_SERVER_PASSWORD: z.string(),
	EMAIL_SERVER_HOST: z.string(),
	EMAIL_SERVER_PORT: z.coerce.number().int(),
	EMAIL_FROM: z.email(),
	ORG_MAIL_DOMAIN: z.string(),
});

export const env = envSchema.parse(serverEnv);
