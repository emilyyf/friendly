import { integer, pgTable, varchar, timestamp, boolean } from 'drizzle-orm/pg-core';
import { logsTable } from './log';

export const householdsTable = pgTable('households', {
	id: integer().primaryKey().generatedAlwaysAsIdentity(),
	code: integer().notNull(),
	date: timestamp().notNull().defaultNow(),
	adress: varchar({ length: 255 }),
	adressNumber: varchar({ length: 255 }),
	adressComplement: varchar({ length: 255 }),
	cep: varchar({ length: 255 }),
	city: varchar({ length: 255 }),
	neighborhood: varchar({ length: 255 }),
	residenceType: varchar({ length: 255 }),
	rentValue: integer(),
	buildingMaterial: varchar({ length: 255 }),
	inHouseBathroom: boolean(),
	residents: integer(),
	rooms: integer(),
	beds: integer(),
	car: boolean(),
	television: boolean(),
	refrigerator: boolean(),
	microwave: boolean(),
	washingMachine: boolean(),
	roadType: varchar({ length: 255 }),
	referingPerson: varchar({ length: 255 }),
	createLogId: integer()
		.notNull()
		.references(() => logsTable.id),
	updateLogId: integer()
		.notNull()
		.references(() => logsTable.id),
});

export type InsertHousehold = typeof householdsTable.$inferInsert;
export type SelectHousehold = typeof householdsTable.$inferSelect;
