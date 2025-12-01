import { PrismaClient } from "../generated/prisma/client";
import { PrismaMariaDb } from "@prisma/adapter-mariadb";
import { env } from "../env";

const adapter = new PrismaMariaDb(env.DATABASE_URL);

const db = new PrismaClient({ adapter });

export default db;
