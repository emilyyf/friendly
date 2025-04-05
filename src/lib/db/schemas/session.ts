import { integer, pgTable, varchar, timestamp } from 'drizzle-orm/pg-core';
import { eq } from 'drizzle-orm';
import { db } from '..';
import { usersTable, type SelectUser } from './user';

export const sessionsTable = pgTable('sessions', {
	id: varchar({ length: 255 }).primaryKey().notNull(),
	userId: integer().notNull(),
	expiresAt: timestamp().notNull(),
});

export type InsertSession = typeof sessionsTable.$inferInsert;
export type SelectSession = typeof sessionsTable.$inferSelect;

export async function getSessionById(id: SelectSession['id']): Promise<Array<SelectSession>> {
	return db.select().from(sessionsTable).where(eq(sessionsTable.id, id));
}

export async function getUserFromSession(id: SelectSession['id']): Promise<SelectUser | null> {
	const session = await db.select().from(sessionsTable).where(eq(sessionsTable.id, id));
	if (!session[0]) return null;
	return (await db.select().from(usersTable).where(eq(usersTable.id, session[0].userId)))[0];
}

export async function insertSession(data: InsertSession): Promise<Array<SelectSession>> {
	return await db.insert(sessionsTable).values(data).returning();
}

export async function deleteSession(id: SelectSession['id']) {
	return await db.delete(sessionsTable).where(eq(sessionsTable.id, id));
}
