<script lang="ts">
	import { superForm } from 'sveltekit-superforms/client';
	import '../../../app.css';

	let { data } = $props();

	const { form, enhance, errors, message } = superForm(data.form);
</script>

<h2 class="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
	Crie sua conta
</h2>
<div class="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
	<form class="space-y-6" method="post" use:enhance>
		{#if $message}
			<div class="bg:red-60 p:30 m:20 font:bold fg:black r:3">
				{$message}
			</div>
		{/if}

		<fieldset>
			<label for="form-signup.name" class="mb-2">Nome</label>
			<input
				id="form-signup.name"
				name="name"
				type="text"
				autocomplete="name"
				placeholder="Fulano"
				value={$form.name}
				required
			/>
			{#if $errors.name}<div class="invalid">{$errors.name}</div>{/if}
		</fieldset>

		<fieldset>
			<label for="form-signup.email" class="mb-2">E-mail</label>
			<input
				id="form-signup.email"
				name="email"
				type="text"
				autocomplete="email"
				placeholder="fulano@anjoamigo.com.br"
				value={$form.email}
				required
			/>
			{#if $errors.email}<div class="invalid">{$errors.email}</div>{/if}
		</fieldset>

		<fieldset>
			<label for="form-signup.password" class="mb-2">Senha</label>
			<input
				id="form-signup.password"
				name="password"
				type="password"
				placeholder="•••••••••"
				value={$form.password}
				required
			/>
			{#if $errors.password}<div class="invalid">{$errors.password}</div>{/if}
		</fieldset>

		<fieldset>
			<label for="form-signup.confirm_password" class="mb-2">Confirme sua senha</label>
			<input
				id="form-signup.confirm_password"
				name="confirm_password"
				type="password"
				placeholder="•••••••••"
				value={$form.confirm_password}
				required
			/>
			{#if $errors.confirm}<div class="invalid">{$errors.confirm}</div>{/if}
		</fieldset>

		<div>
			<button
				type="submit"
				class="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
			>
				Cadastrar
			</button>
		</div>
	</form>
</div>
