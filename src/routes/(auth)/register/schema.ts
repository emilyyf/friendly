import { verifyEmailInput } from '$lib/server/email';
import { verifyPasswordStrength } from '$lib/server/password';
import { z } from 'zod';

export const schema = z
	.object({
		name: z.string().min(3, 'Name should be at leat 3 characters long'),
		email: z
			.string()
			.email()
			.refine(async (val) => await verifyEmailInput(val), { message: 'Email already in use' }),
		password: z
			.string()
			.refine(async (val) => await verifyPasswordStrength(val), { message: 'Weak password' }),
		confirm_password: z.string(),
	})
	.refine((data) => data.password == data.confirm_password, {
		message: "Passwords don't match",
		path: ['confirm'],
	});
