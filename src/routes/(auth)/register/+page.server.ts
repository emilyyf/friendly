import { fail, redirect } from '@sveltejs/kit';
import type { Actions } from '@sveltejs/kit';
import { createUser } from '$lib/server/user';
import { createSession, generateSessionToken, setSessionTokenCookie } from '$lib/server/session';
import { schema } from './schema';
import { superValidate } from 'sveltekit-superforms';
import { zod } from 'sveltekit-superforms/adapters';
import type { PageServerLoad } from './$types';

export const load = (async ({ locals }) => {
	if (locals.session != null && locals.user != null) redirect(302, '/home');

	const form = await superValidate(zod(schema));

	return { form, locals };
}) satisfies PageServerLoad;

export const actions = {
	default: async (event) => {
		const form = await superValidate(event.request, zod(schema));
		const { name, email, password } = form.data;

		if (!form.valid) return fail(400, { form });

		const user = await createUser(name, email, password);
		const session_token = generateSessionToken();
		const session = await createSession(session_token, user.id);
		setSessionTokenCookie(event, session.id, session.expires_at);

		redirect(302, '/home');
	},
} satisfies Actions;
