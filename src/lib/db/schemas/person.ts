import { integer, pgTable, varchar, timestamp } from 'drizzle-orm/pg-core';
import { logsTable } from './log';
import { householdsTable } from './household';

export const personsTable = pgTable('persons', {
	id: integer().primaryKey().generatedAlwaysAsIdentity(),
	householdId: integer()
		.notNull()
		.references(() => householdsTable.id),
	birth: timestamp(),
	age: varchar({ length: 255 }),
	name: varchar({ length: 255 }),
	country: varchar({ length: 255 }),
	uf: varchar({ length: 255 }),
	phone: varchar({ length: 255 }),
	graduation: varchar({ length: 255 }),
	rg: varchar({ length: 255 }),
	rgExp: timestamp(),
	cpf: varchar({ length: 255 }),
	susCard: varchar({ length: 255 }),
	cardSeries: varchar({ length: 255 }),
	cardUf: varchar({ length: 255 }),
	company: varchar({ length: 255 }),
	workFunction: varchar({ length: 255 }),
	employmentCard: varchar({ length: 255 }),
	hiringDate: timestamp(),
	resignationDate: timestamp(),
	salary: integer(),
	extraIncome: integer(),
	createLogId: integer()
		.notNull()
		.references(() => logsTable.id),
	updateLogId: integer()
		.notNull()
		.references(() => logsTable.id),
});

export type InsertPerson = typeof personsTable.$inferInsert;
export type SelectPerson = typeof personsTable.$inferSelect;
