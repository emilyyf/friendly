import { integer, pgTable, timestamp } from 'drizzle-orm/pg-core';
import { logsTable } from './log';
import { vaccinesTable } from './vaccines';
import { personsTable } from './person';
import { vaccineDosagesTable } from './vaccine_dosages';
import { medicalHistoriesTable } from './medical_history';

export const personVaccinesTable = pgTable('personVaccines', {
	id: integer().primaryKey().generatedAlwaysAsIdentity(),
	personId: integer()
		.notNull()
		.references(() => personsTable.id),
	vaccineId: integer()
		.notNull()
		.references(() => vaccinesTable.id),
	dosageId: integer()
		.notNull()
		.references(() => vaccineDosagesTable.id),
	medicalHistoryId: integer()
		.notNull()
		.references(() => medicalHistoriesTable.id),
	date: timestamp(),
	createLogId: integer()
		.notNull()
		.references(() => logsTable.id),
	updateLogId: integer()
		.notNull()
		.references(() => logsTable.id),
});

export type InsertPersonVaccine = typeof personVaccinesTable.$inferInsert;
export type SelectPersonVaccine = typeof personVaccinesTable.$inferSelect;
