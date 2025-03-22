import { integer, pgTable, varchar, boolean, timestamp } from 'drizzle-orm/pg-core';
import { eq } from 'drizzle-orm';
import { db } from '..';

export const users_table = pgTable('users', {
	id: integer().primaryKey().generatedAlwaysAsIdentity(),
	name: varchar({ length: 255 }).notNull(),
	email: varchar({ length: 255 }).notNull().unique(),
	photo: varchar({ length: 255 }),
	verified: boolean().notNull(),
	password: varchar({ length: 255 }).notNull(),
	role: varchar({ length: 255 }),
	created_at: timestamp().notNull().defaultNow(),
	updated_at: timestamp()
		.notNull()
		.defaultNow()
		.$onUpdate(() => new Date()),
});

export type InsertUser = typeof users_table.$inferInsert;
export type SelectUser = typeof users_table.$inferSelect;

export async function checkEmailAvailability(email: string): Promise<boolean> {
	return (await db.$count(users_table, eq(users_table.email, email))) == 0;
}

export async function getUserById(id: SelectUser['id']): Promise<Array<SelectUser>> {
	return db.select().from(users_table).where(eq(users_table.id, id));
}

export async function insertUser(data: InsertUser): Promise<Array<SelectUser>> {
	return await db.insert(users_table).values(data).returning();
}
