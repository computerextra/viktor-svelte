import { PrismaClient } from "../generated/prisma/client";
import { DATABASE_URL } from "$env/static/private";
import { PrismaMariaDb } from "@prisma/adapter-mariadb";

const adapter = new PrismaMariaDb(DATABASE_URL);

const db = new PrismaClient({ adapter });

export default db;
