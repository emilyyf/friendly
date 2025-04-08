import { integer, pgTable, varchar, timestamp } from 'drizzle-orm/pg-core';
import { logsTable } from './log';
import { childrenTable } from './child';

export const participationsTable = pgTable('participations', {
	id: integer().primaryKey().generatedAlwaysAsIdentity(),
	childId: integer().references(() => childrenTable.id),
	date: timestamp().notNull().defaultNow(),
	description: varchar({ length: 2000 }),
	createLogId: integer()
		.notNull()
		.references(() => logsTable.id),
	updateLogId: integer()
		.notNull()
		.references(() => logsTable.id),
});

export type InsertParticipation = typeof participationsTable.$inferInsert;
export type SelectParticipation = typeof participationsTable.$inferSelect;
