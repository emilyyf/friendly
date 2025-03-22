import { integer, pgTable, varchar, timestamp } from 'drizzle-orm/pg-core';
import { eq } from 'drizzle-orm';
import { db } from '..';

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

export async function insertSession(data: InsertSession): Promise<Array<SelectSession>> {
	return await db.insert(sessions_table).values(data).returning();
}
