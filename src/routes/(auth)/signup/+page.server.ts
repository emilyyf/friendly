import { fail, redirect } from '@sveltejs/kit';
import type { Actions, PageServerLoadEvent, RequestEvent } from './$types';
import { verifyEmailInput } from '$lib/server/email';
import { verifyPasswordStrength } from '$lib/server/password';
import { createUser } from '$lib/server/user';
import { createSession, generateSessionToken, setSessionTokenCookie } from '$lib/server/session';

export function load(event: PageServerLoadEvent) {
	if (event.locals.session != null && event.locals.user != null) {
		redirect(302, '/');
	}

	return {};
}

export const actions: Actions = {
	default: action,
};

async function action(event: RequestEvent) {
	const form_data = await event.request.formData();
	const name = form_data.get('name') as string;
	const email = form_data.get('email') as string;
	const password = form_data.get('password') as string;

	if (name == '' || email == '' || password == '') {
		return fail(400, {
			message: 'Please enter your name, email and password',
			email: '',
		});
	}

	const email_verification = await verifyEmailInput(email);
	if (!email_verification) {
		return fail(400, {
			message: 'Invalid email',
			email,
		});
	}

	const strong_password = await verifyPasswordStrength(password);
	if (!strong_password) {
		return fail(400, {
			message: 'Weak password',
			email,
		});
	}

	const user = await createUser(name, email, password);
	const session_token = generateSessionToken();
	const session = await createSession(session_token, user.id);
	setSessionTokenCookie(event, session_token, session.expires_at);

	redirect(302, '/');
}
