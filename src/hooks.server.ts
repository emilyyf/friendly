import { getSessionById, getUserFromSession } from '$lib/db/schemas/session';
import { logout } from '$lib/server/session';
import { redirect, type Handle } from '@sveltejs/kit';
import { sequence } from '@sveltejs/kit/hooks';

const auth = (async ({ event, resolve }) => {
	const { cookies } = event;
	const token = cookies.get('session');
	const secure_route = event.route.id?.includes('(secure)');
	const login_route = event.url.pathname.includes('/login');
	const registration_route = event.url.pathname.includes('/register');
	const auth_route = login_route || registration_route;

	if (token && secure_route) {
		const session = await getSessionById(token);

		if (session) {
			if (!event.locals.user) {
				const user = await getUserFromSession(token);
				event.locals.user = user;
			}
		} else {
			await logout(event);
		}
	}

	if (secure_route) {
		if (!event.locals.user || !token) {
			await logout(event);
		}
	}

	if (token && auth_route) {
		redirect(303, '/home');
	}

	const response = await resolve(event);
	return response;
}) satisfies Handle;

export const handle = sequence(auth);
