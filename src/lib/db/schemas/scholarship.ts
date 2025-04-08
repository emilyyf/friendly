import { integer, pgTable, varchar } from 'drizzle-orm/pg-core';
import { logsTable } from './log';
import { childrenTable } from './child';

export const scholarshipsTable = pgTable('scholarships', {
	id: integer().primaryKey().generatedAlwaysAsIdentity(),
	childId: integer().references(() => childrenTable.id),
	grade: varchar({ length: 255 }),
	school: varchar({ length: 255 }),
	year: varchar({ length: 255 }),
	period: varchar({ length: 255 }),
	createLogId: integer()
		.notNull()
		.references(() => logsTable.id),
	updateLogId: integer()
		.notNull()
		.references(() => logsTable.id),
});

export type InsertScholarship = typeof scholarshipsTable.$inferInsert;
export type SelectScholarship = typeof scholarshipsTable.$inferSelect;
