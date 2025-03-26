<script lang="ts">
	import { UserStorage, getUser } from '$lib/userStorage.svelte';

	let user: UserStorage = getUser();
	let { data } = $props();
	let { locals } = data;
</script>

<div>
	<h1>Anjo Amigo</h1>
	{#if locals.user}
		<h2>Hello {locals.user.name}</h2>
	{/if}
</div>
