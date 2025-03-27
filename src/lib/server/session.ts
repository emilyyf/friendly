import { encodeBase32LowerCaseNoPadding, encodeHexLowerCase } from '@oslojs/encoding';
import { sha256 } from '@oslojs/crypto/sha2';
import {
	deleteSession,
	insertSession,
	type InsertSession,
	type SelectSession,
} from '$lib/db/schemas/session';
import { redirect, type RequestEvent } from '@sveltejs/kit';

export function generateSessionToken(): string {
	const token_bytes = new Uint8Array(20);
	crypto.getRandomValues(token_bytes);
	const token = encodeBase32LowerCaseNoPadding(token_bytes).toLowerCase();
	return token;
}

export async function createSession(token: string, user_id: number): Promise<SelectSession> {
	const session_id = encodeHexLowerCase(sha256(new TextEncoder().encode(token)));
	const session: InsertSession = {
		id: session_id,
		user_id,
		expires_at: new Date(Date.now() + 1000 * 60 * 60 * 24 * 30),
	};

	return (await insertSession(session))[0];
}

export function setSessionTokenCookie(event: RequestEvent, token: string, expires_at?: Date) {
	event.cookies.set('session', token, {
		httpOnly: true,
		path: '/',
		secure: import.meta.env.PROD,
		sameSite: 'lax',
		expires: expires_at,
	});
}

export function deleteSessionTokenCookie(event: RequestEvent) {
	event.cookies.set('session', '', {
		httpOnly: true,
		path: '/',
		secure: import.meta.env.PROD,
		sameSite: 'lax',
		maxAge: 0,
	});
}

export async function logout(event: RequestEvent) {
	event.locals.user = undefined;
	await deleteSession(event.cookies.get('session')!);
	deleteSessionTokenCookie(event);
	redirect(302, '/login');
}
