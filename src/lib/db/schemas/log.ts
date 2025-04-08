import { integer, pgTable, varchar, timestamp } from 'drizzle-orm/pg-core';
import { usersTable } from './user';

export const logsTable = pgTable('logs', {
	id: integer().primaryKey().generatedAlwaysAsIdentity(),
	userId: integer()
		.notNull()
		.references(() => usersTable.id),
	description: varchar({ length: 2000 }),
	action: varchar({ length: 255 }).notNull(),
	table: varchar({ length: 255 }).notNull(),
	rowId: integer().notNull(),
	date: timestamp().notNull().defaultNow(),
});

export type InsertLog = typeof logsTable.$inferInsert;
export type SelectLog = typeof logsTable.$inferSelect;
