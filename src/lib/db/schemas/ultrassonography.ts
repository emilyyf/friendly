import { integer, pgTable, varchar, timestamp } from 'drizzle-orm/pg-core';
import { logsTable } from './log';
import { childrenTable } from './child';
import { medicalHistoriesTable } from './medical_history';

export const ultrassonographiesTable = pgTable('ultrassonographies', {
	id: integer().primaryKey().generatedAlwaysAsIdentity(),
	childId: integer()
		.notNull()
		.references(() => childrenTable.id),
	medicalHistoryId: integer()
		.notNull()
		.references(() => medicalHistoriesTable.id),
	date: timestamp().notNull().defaultNow(),
	weight: varchar({ length: 255 }),
	height: varchar({ length: 255 }),
	percentage: varchar({ length: 255 }),
	bcf: varchar({ length: 255 }),
	ila: varchar({ length: 255 }),
	liqam: varchar({ length: 255 }),
	placenta: varchar({ length: 255 }),
	degree: varchar({ length: 255 }),
	createLogId: integer()
		.notNull()
		.references(() => logsTable.id),
	updateLogId: integer()
		.notNull()
		.references(() => logsTable.id),
});

export type InsertUltrassonography = typeof ultrassonographiesTable.$inferInsert;
export type SelectUltrassonography = typeof ultrassonographiesTable.$inferSelect;
