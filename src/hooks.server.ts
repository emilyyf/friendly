import { getSessionById, getUserFromSession } from '$lib/db/schemas/session';
import { logout } from '$lib/server/session';
import { redirect, type Handle } from '@sveltejs/kit';
import { sequence } from '@sveltejs/kit/hooks';

const auth = (async ({ event, resolve }) => {
	const { cookies } = event;
	const token = cookies.get('session');
	const secureRoute = event.route.id?.includes('(secure)');
	const loginRoute = event.url.pathname.includes('/login');
	const registrationRoute = event.url.pathname.includes('/register');
	const authRoute = loginRoute || registrationRoute;

	if (token && secureRoute) {
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

	if (secureRoute) {
		if (!event.locals.user || !token) {
			await logout(event);
		}
	}

	if (token && authRoute) {
		redirect(303, '/home');
	}

	const response = await resolve(event);
	return response;
}) satisfies Handle;

export const handle = sequence(auth);
