import { integer, pgTable, varchar, boolean, timestamp } from 'drizzle-orm/pg-core';
import { eq } from 'drizzle-orm';
import { db } from '..';

export const usersTable = pgTable('users', {
	id: integer().primaryKey().generatedAlwaysAsIdentity(),
	name: varchar({ length: 255 }).notNull(),
	email: varchar({ length: 255 }).notNull().unique(),
	photo: varchar({ length: 255 }),
	verified: boolean().notNull(),
	password: varchar({ length: 255 }).notNull(),
	role: varchar({ length: 255 }),
	createdAt: timestamp().notNull().defaultNow(),
	updatedAt: timestamp()
		.notNull()
		.defaultNow()
		.$onUpdate(() => new Date()),
});

export type InsertUser = typeof usersTable.$inferInsert;
export type SelectUser = typeof usersTable.$inferSelect;

export async function checkEmailAvailability(email: string): Promise<boolean> {
	return (await db.$count(usersTable, eq(usersTable.email, email))) == 0;
}

export async function getUserByEmail(email: SelectUser['email']): Promise<Array<SelectUser>> {
	return db.select().from(usersTable).where(eq(usersTable.email, email));
}

export async function getUserById(id: SelectUser['id']): Promise<Array<SelectUser>> {
	return db.select().from(usersTable).where(eq(usersTable.id, id));
}

export async function insertUser(data: InsertUser): Promise<Array<SelectUser>> {
	return await db.insert(usersTable).values(data).returning();
}
