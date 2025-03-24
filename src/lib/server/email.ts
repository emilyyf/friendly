import { checkEmailAvailability } from '$lib/db/schemas/user';

export async function verifyEmailInput(email: string): Promise<boolean> {
	return await checkEmailAvailability(email);
}
