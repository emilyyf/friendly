import { integer, pgTable, varchar, timestamp } from 'drizzle-orm/pg-core';
import { logsTable } from './log';
import { medicalHistoriesTable } from './medical_history';

export const examsTable = pgTable('exams', {
	id: integer().primaryKey().generatedAlwaysAsIdentity(),
	medicalHistoryId: integer()
		.notNull()
		.references(() => medicalHistoriesTable.id),
	date: timestamp().notNull().defaultNow(),
	result: varchar({ length: 255 }),
	igm: varchar({ length: 255 }),
	igg: varchar({ length: 255 }),
	createLogId: integer()
		.notNull()
		.references(() => logsTable.id),
	updateLogId: integer()
		.notNull()
		.references(() => logsTable.id),
});

export type InsertExam = typeof examsTable.$inferInsert;
export type SelectExam = typeof examsTable.$inferSelect;
