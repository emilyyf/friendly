import { LocalStore, localStore } from '$lib/localStore.svelte';

export class UserStorage {
	user: any;
	logged: boolean;
	token: string;

	constructor(user: any, token: string, logged: boolean) {
		this.user = user;
		this.token = token;
		this.logged = logged;
	}
}

const clean = new UserStorage(null, '', false);

export function getUserStore(): LocalStore<UserStorage> {
	return localStore('user', clean);
}

export function getUser(): UserStorage {
	return getUserStore().value;
}

export function clearUser() {
	const store = getUserStore();
	store.value = clean;
}
