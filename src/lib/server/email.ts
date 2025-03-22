import { checkEmailAvailability } from '$lib/db/schemas/user';

export async function verifyEmailInput(email: string): Promise<boolean> {
	return /^.+@.+\..+$/.test(email) && email.length < 256 && (await checkEmailAvailability(email));
}
