import { SvelteKitAuth } from "@auth/sveltekit";
import Nodemailer from "@auth/sveltekit/providers/nodemailer";
import { PrismaAdapter } from "@auth/prisma-adapter";
import db from "$lib/prisma";
import type { Adapter } from "@auth/sveltekit/adapters";
import { env } from "./env";

export const { handle, signIn, signOut } = SvelteKitAuth({
	adapter: PrismaAdapter(db) as Adapter,
	session: {
		strategy: "database",
		generateSessionToken: () => {
			return crypto.randomUUID();
		}
	},
	providers: [
		Nodemailer({
			server: {
				host: env.EMAIL_SERVER_HOST,
				port: env.EMAIL_SERVER_PORT,
				auth: {
					user: env.EMAIL_SERVER_USER,
					pass: env.EMAIL_SERVER_PASSWORD
				}
			},
			from: env.EMAIL_FROM,
			normalizeIdentifier(identifier: string): string {
				// Get the first two elements only.
				// separated by "@" from user input.
				// eslint-disable-next-line prefer-const
				let [local, domain] = identifier.toLowerCase().trim().split("@");
				// the part before "@" can contain a ","
				// but we remove it on the domain part.
				domain = domain.split(",")[0];

				// Throw an error if more than one mail is given
				if (identifier.split("@").length > 2) {
					throw new Error("Only one email allowed");
				}

				// Check the domain
				// The Domain should be an organization one.
				if (domain != env.ORG_MAIL_DOMAIN) {
					throw new Error("Only Organization Email allowed");
				}

				// Check the local
				if (local.length <= 2) {
					throw new Error("Bitte nutze die komplette Firmenadresse!");
				}

				return `${local}@${domain}`;
			}
		})
	]
});
