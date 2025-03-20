import { db } from '../db';
import { usersTable } from '$lib/db/schemas/user';
import { eq } from 'drizzle-orm';

export async function verifyEmailInput(email: string): Promise<boolean> {
	const available = await checkEmailAvailability(email);
	return /^.+@.+\..+$/.test(email) && email.length < 256 && available;
}

async function checkEmailAvailability(email: string): Promise<boolean> {
	const row = await db.$count(usersTable, eq(usersTable.email, email));
	console.log(db.$count(usersTable, eq(usersTable.email, email)).getSQL());

	return row == 0;
}
