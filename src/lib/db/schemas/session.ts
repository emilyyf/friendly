import { integer, pgTable, varchar, timestamp } from 'drizzle-orm/pg-core';
import { eq } from 'drizzle-orm';
import { db } from '..';
import { users_table, type SelectUser } from './user';

export const sessions_table = pgTable('sessions', {
	id: varchar({ length: 255 }).primaryKey().notNull(),
	user_id: integer().notNull(),
	expires_at: timestamp().notNull(),
});

export type InsertSession = typeof sessions_table.$inferInsert;
export type SelectSession = typeof sessions_table.$inferSelect;

export async function getSessionById(id: SelectSession['id']): Promise<Array<SelectSession>> {
	return db.select().from(sessions_table).where(eq(sessions_table.id, id));
}

export async function getUserFromSession(id: SelectSession['id']): Promise<SelectUser | null> {
	const session = await db.select().from(sessions_table).where(eq(sessions_table.id, id));
	if (!session[0]) return null;
	return (await db.select().from(users_table).where(eq(users_table.id, session[0].user_id)))[0];
}

export async function insertSession(data: InsertSession): Promise<Array<SelectSession>> {
	return await db.insert(sessions_table).values(data).returning();
}

export async function deleteSession(id: SelectSession['id']) {
	return await db.delete(sessions_table).where(eq(sessions_table.id, id));
}
