import type { Action } from '@sveltejs/kit';
import type { RequestEvent } from './$types';
import { deleteSession } from '$lib/db/schemas/session';
import { redirect } from '@sveltejs/kit';

export const actions = {
	logout: async (event: RequestEvent) => {
		event.locals.user = undefined;
		const sessionId = event.cookies.get('session');
		deleteSession(sessionId!);
		event.cookies.set('session', '', {
			httpOnly: true,
			path: '/',
			secure: import.meta.env.PROD,
			sameSite: 'lax',
			maxAge: 0,
		});
		redirect(302, '/login');
	},
} satisfies Action;
