import { integer, pgTable, varchar, boolean, timestamp } from 'drizzle-orm/pg-core';

export const usersTable = pgTable('users', {
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
