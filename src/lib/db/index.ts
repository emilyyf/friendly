import 'dotenv/config';
import { drizzle } from 'drizzle-orm/node-postgres';

export const db = drizzle({ connection: process.env.POSTGRES_SOURCE!, casing: 'snake_case' });
