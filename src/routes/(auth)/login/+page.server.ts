import { fail, redirect } from '@sveltejs/kit';
import type { Actions } from '@sveltejs/kit';
import { createSession, generateSessionToken, setSessionTokenCookie } from '$lib/server/session';
import { schema } from './schema';
import { superValidate } from 'sveltekit-superforms';
import { zod } from 'sveltekit-superforms/adapters';
import type { PageServerLoad } from './$types';
import { getUserByEmail } from '$lib/db/schemas/user';
import { verifyPasswordHash } from '$lib/server/password';

export const load = (async ({ locals }) => {
	if (locals.session != null && locals.user != null) redirect(302, '/home');

	const form = await superValidate(zod(schema));

	return { form, locals };
}) satisfies PageServerLoad;

export const actions = {
	default: async (event) => {
		const form = await superValidate(event.request, zod(schema));
		const { email, password } = form.data;

		if (!form.valid) return fail(400, { form });

		const user = (await getUserByEmail(email))[0];
		const valid_password = await verifyPasswordHash(user.password, password);

		if (!valid_password) return fail(400, { form });

		const session_token = generateSessionToken();
		const session = await createSession(session_token, user.id);

		setSessionTokenCookie(event, session.id, session.expires_at);

		redirect(302, '/home');
	},
} satisfies Actions;
