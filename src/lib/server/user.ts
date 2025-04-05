import { insertUser } from '$lib/db/schemas/user';
import { hashPassword } from './password';
import type { InsertUser, SelectUser } from '$lib/db/schemas/user';

export async function createUser(
	name: string,
	email: string,
	password: string,
): Promise<SelectUser> {
	const passwordHash = await hashPassword(password);
	const user: InsertUser = {
		name,
		email,
		password: passwordHash,
		verified: true,
	};

	const newUser = await insertUser(user);
	return newUser[0];
}
