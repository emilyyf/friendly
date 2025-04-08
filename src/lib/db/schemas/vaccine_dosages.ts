import { integer, pgTable, varchar } from 'drizzle-orm/pg-core';
import { logsTable } from './log';
import { vaccinesTable } from './vaccines';

export const vaccineDosagesTable = pgTable('vaccineDosages', {
	id: integer().primaryKey().generatedAlwaysAsIdentity(),
	vaccineId: integer()
		.notNull()
		.references(() => vaccinesTable.id),
	description: varchar({ length: 255 }),
	createLogId: integer()
		.notNull()
		.references(() => logsTable.id),
	updateLogId: integer()
		.notNull()
		.references(() => logsTable.id),
});

export type InsertVaccineDosage = typeof vaccineDosagesTable.$inferInsert;
export type SelectVaccineDosage = typeof vaccineDosagesTable.$inferSelect;
