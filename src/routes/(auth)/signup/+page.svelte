<script lang="ts">
	import { Input, Label } from 'flowbite-svelte';
	import { enhance } from '$app/forms';
	let { form } = $props();
</script>

<h2 class="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
	Crie sua conta
</h2>
<div class="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
	<form class="space-y-6" method="post" use:enhance>
		<fieldset>
			<Label for="form-signup.name" class="mb-2">Nome</Label>
			<Input
				id="form-signup.name"
				name="name"
				type="text"
				autocomplete="name"
				placeholder="Fulano"
				value={form?.name ?? ''}
				required
			/>
		</fieldset>

		<fieldset>
			<Label for="form-signup.email" class="mb-2">E-mail</Label>
			<Input
				id="form-signup.email"
				name="email"
				type="text"
				autocomplete="email"
				placeholder="fulano@anjoamigo.com.br"
				value={form?.email ?? ''}
				required
			/>
		</fieldset>

		<fieldset>
			<Label for="form-signup.password" class="mb-2">Senha</Label>
			<Input
				id="form-signup.password"
				name="password"
				type="password"
				autocomplete="current-password"
				placeholder="•••••••••"
				value={form?.password ?? ''}
				required
			/>
		</fieldset>

		<div>
			<button
				type="submit"
				class="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
			>
				Cadastradar
			</button>
		</div>
		<p>{form?.message ?? ''}</p>
	</form>
</div>
