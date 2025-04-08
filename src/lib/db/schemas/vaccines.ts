import { integer, pgTable, varchar } from 'drizzle-orm/pg-core';
import { logsTable } from './log';

export const vaccinesTable = pgTable('vaccines', {
	id: integer().primaryKey().generatedAlwaysAsIdentity(),
	name: varchar({ length: 255 }),
	createLogId: integer()
		.notNull()
		.references(() => logsTable.id),
	updateLogId: integer()
		.notNull()
		.references(() => logsTable.id),
});

export type InsertVaccine = typeof vaccinesTable.$inferInsert;
export type SelectVaccine = typeof vaccinesTable.$inferSelect;
