import { integer, pgTable, varchar, timestamp } from 'drizzle-orm/pg-core';
import { logsTable } from './log';
import { childrenTable } from './child';
import { personsTable } from './person';

export const notesTable = pgTable('notes', {
	id: integer().primaryKey().generatedAlwaysAsIdentity(),
	childId: integer().references(() => childrenTable.id),
	personId: integer().references(() => personsTable.id),
	date: timestamp().notNull().defaultNow(),
	description: varchar({ length: 2000 }),
	createLogId: integer()
		.notNull()
		.references(() => logsTable.id),
	updateLogId: integer()
		.notNull()
		.references(() => logsTable.id),
});

export type InsertNote = typeof notesTable.$inferInsert;
export type SelectNote = typeof notesTable.$inferSelect;
