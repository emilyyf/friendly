import type { Action } from '@sveltejs/kit';
import type { RequestEvent } from './$types';
import { logout } from '$lib/server/session';

export const actions = {
	logout: async (event: RequestEvent) => {
		logout(event);
	},
} satisfies Action;
