import { hash, verify } from '@node-rs/argon2';
import { sha1 } from '@oslojs/crypto/sha1';
import { encodeHexLowerCase } from '@oslojs/encoding';

export async function hashPassword(password: string): Promise<string> {
	return await hash(password, {
		memoryCost: 19456,
		timeCost: 2,
		outputLen: 32,
		parallelism: 1,
	});
}

export async function verifyPasswordHash(hash: string, password: string): Promise<boolean> {
	return await verify(hash, password);
}

export async function verifyPasswordStrength(password: string): Promise<boolean> {
	if (password.length < 8 || password.length > 255) {
		return false;
	}
	const hash = encodeHexLowerCase(sha1(new TextEncoder().encode(password)));
	const hash_prefix = hash.slice(0, 5);
	const response = await fetch(`https://api.pwnedpasswords.com/range/${hash_prefix}`);
	const data = await response.text();
	const items = data.split('\n');
	for (const item of items) {
		const hash_suffix = item.slice(0, 35).toLowerCase();
		if (hash === hash_prefix + hash_suffix) {
			return false;
		}
	}
	return true;
}
