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
	const tokenBytes = new Uint8Array(20);
	crypto.getRandomValues(tokenBytes);
	const token = encodeBase32LowerCaseNoPadding(tokenBytes).toLowerCase();
	return token;
}

export async function createSession(token: string, userId: number): Promise<SelectSession> {
	const sessionId = encodeHexLowerCase(sha256(new TextEncoder().encode(token)));
	const session: InsertSession = {
		id: sessionId,
		userId: userId,
		expiresAt: new Date(Date.now() + 1000 * 60 * 60 * 24 * 30),
	};

	return (await insertSession(session))[0];
}

export function setSessionTokenCookie(event: RequestEvent, token: string, expiresAt?: Date) {
	event.cookies.set('session', token, {
		httpOnly: true,
		path: '/',
		secure: import.meta.env.PROD,
		sameSite: 'lax',
		expires: expiresAt,
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
