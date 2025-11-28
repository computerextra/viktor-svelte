import db from "$lib/prisma";

export async function load() {
	const angebote = await db.angebot.findMany();
	return { angebote };
}
