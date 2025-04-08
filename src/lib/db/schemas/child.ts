import { integer, pgTable, varchar, timestamp } from 'drizzle-orm/pg-core';
import { logsTable } from './log';
import { householdsTable } from './household';
import { personsTable } from './person';

export const childrenTable = pgTable('children', {
	id: integer().primaryKey().generatedAlwaysAsIdentity(),
	householdId: integer()
		.notNull()
		.references(() => householdsTable.id),
	motherId: integer()
		.notNull()
		.references(() => personsTable.id),
	birth: timestamp(),
	age: varchar({ length: 255 }),
	local: varchar({ length: 255 }),
	race: varchar({ length: 255 }),
	aliveBirthCertificate: varchar({ length: 255 }),
	birthCertificate: varchar({ length: 255 }),
	rg: varchar({ length: 255 }),
	cpf: varchar({ length: 255 }),
	susCard: varchar({ length: 255 }),
	bloodType: varchar({ length: 255 }),
	weightAtBirth: varchar({ length: 255 }),
	heightAtBirth: varchar({ length: 255 }),
	firstApgar: varchar({ length: 255 }),
	fifthApgar: varchar({ length: 255 }),
	neonatalHeelPrick: timestamp(),
	hearTest: timestamp(),
	hearingTriage: timestamp(),
	eyeTest: varchar({ length: 255 }),
	od: varchar({ length: 255 }),
	oe: varchar({ length: 255 }),
	pregnancyTime: varchar({ length: 255 }),
	login: varchar({ length: 255 }),
	msd: varchar({ length: 255 }),
	mmii: varchar({ length: 255 }),
	createLogId: integer()
		.notNull()
		.references(() => logsTable.id),
	updateLogId: integer()
		.notNull()
		.references(() => logsTable.id),
});

export type InsertChild = typeof childrenTable.$inferInsert;
export type SelectChild = typeof childrenTable.$inferSelect;
