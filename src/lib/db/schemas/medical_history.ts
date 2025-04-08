import { integer, pgTable, varchar, boolean } from 'drizzle-orm/pg-core';
import { logsTable } from './log';
import { personsTable } from './person';

export const medicalHistoriesTable = pgTable('medical_histories', {
	id: integer().primaryKey().generatedAlwaysAsIdentity(),
	personId: integer()
		.notNull()
		.references(() => personsTable.id),
	smoker: boolean(),
	alcohool: boolean(),
	abortations: integer(),
	vaginalDeliveries: integer(),
	cSections: integer(),
	pregnancy: varchar({ length: 255 }),
	bloodType: varchar({ length: 255 }),
	bloodGlucose: varchar({ length: 255 }),
	syphilis: varchar({ length: 255 }),
	hiv: varchar({ length: 255 }),
	createLogId: integer()
		.notNull()
		.references(() => logsTable.id),
	updateLogId: integer()
		.notNull()
		.references(() => logsTable.id),
});

export type InsertMedicalHistories = typeof medicalHistoriesTable.$inferInsert;
export type SelectMedicalHistories = typeof medicalHistoriesTable.$inferSelect;
