import { integer, pgTable, varchar, timestamp } from 'drizzle-orm/pg-core';
import { logsTable } from './log';
import { childrenTable } from './child';

export const appointmentsTable = pgTable('appointments', {
	id: integer().primaryKey().generatedAlwaysAsIdentity(),
	childId: integer()
		.notNull()
		.references(() => childrenTable.id),
	date: timestamp().notNull().defaultNow(),
	ig: varchar({ length: 255 }),
	weight: varchar({ length: 255 }),
	pa: varchar({ length: 255 }),
	au: varchar({ length: 255 }),
	bcf: varchar({ length: 255 }),
	createLogId: integer()
		.notNull()
		.references(() => logsTable.id),
	updateLogId: integer()
		.notNull()
		.references(() => logsTable.id),
});

export type InsertAppointment = typeof appointmentsTable.$inferInsert;
export type SelectAppointment = typeof appointmentsTable.$inferSelect;
