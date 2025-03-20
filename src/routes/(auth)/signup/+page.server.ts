import { fail, redirect } from '@sveltejs/kit';
import type { Actions, PageServerLoadEvent, RequestEvent } from './$types';
import { verifyEmailInput } from '$lib/server/email';
import { verifyPasswordStrength } from '$lib/server/password';

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
	const formData = await event.request.formData();
	const email = formData.get('email');
	const password = formData.get('password');

	if (typeof email != 'string' || typeof password != 'string') {
		console.log('Invalid or missing fields');
		return fail(400, {
			message: 'Invalid or missing fields',
			email: '',
		});
	}

	if (email == '' || password == '') {
		console.log('Please enter your email and password');
		return fail(400, {
			message: 'Please enter your email and password',
			email: '',
		});
	}

	const emailVerification = await verifyEmailInput(email);
	if (!emailVerification) {
		console.log('Invalid email');
		return fail(400, {
			message: 'Invalid email',
			email,
		});
	}

	const strongPassword = await verifyPasswordStrength(password);
	if (!strongPassword) {
		console.log('Weak password');
		return fail(400, {
			message: 'Weak password',
			email,
		});
	}

	console.log('Everything ok, create the user');
}
