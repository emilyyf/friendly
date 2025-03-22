import { insertUser } from '$lib/db/schemas/user';
import { hashPassword } from './password';
import type { InsertUser, SelectUser } from '$lib/db/schemas/user';

export async function createUser(
	name: string,
	email: string,
	password: string,
): Promise<SelectUser> {
	const password_hash = await hashPassword(password);
	const user: InsertUser = {
		name,
		email,
		password: password_hash,
		verified: true,
	};

	const new_user = await insertUser(user);
	return new_user[0];
}
