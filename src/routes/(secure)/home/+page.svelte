<script lang="ts">
	let { data } = $props();
	let { locals } = data;
</script>

<div class="bg-base-100 min-h-screen flex flex-col justify-center items-center">
	<h1>Anjo Amigo</h1>
	{#if locals.user}
		<h2>Hello {locals.user.name}</h2>
	{/if}
</div>
