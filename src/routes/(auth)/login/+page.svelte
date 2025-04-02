<script lang="ts">
	import { superForm } from 'sveltekit-superforms/client';
	import '../../../app.css';

	let { data } = $props();

	const { form, enhance, errors, message } = superForm(data.form);
</script>

<div class="flex bg-base-100 justify-center items-center flex-grow py-12">
	<div class="p-8 w-full max-w-sm">
		<h1 class="text-4xl font-bold mb-6">Acesse sua conta</h1>

		<form class="flex flex-col items-center" method="post" use:enhance>
			{#if $message}
				<div class="">
					{$message}
				</div>
			{/if}

			<label for="form-signup.email" class="floating-label w-full mt-3">
				<span>E-mail</span>
				<input
					id="form-signup.email"
					class="input input-md"
					name="email"
					type="text"
					autocomplete="email"
					placeholder="E-mail"
					value={$form.email}
					required
				/>
				<div class="text-error text-center text-xs mt-1">{$errors.email}</div>
			</label>

			<label for="form-signup.password" class="floating-label w-full mt-3">
				<span>Senha</span>
				<input
					id="form-signup.password"
					class="input input-md"
					name="password"
					type="password"
					placeholder="Senha"
					value={$form.password}
					required
				/>
				<div class="text-error text-center text-xs mt-1">{$errors.password}</div>
			</label>

			<div class="grid grid-cols-2">
				<div class="text-sm text-end">
					<a href="/recover-password" class="font-semibold text-isdigo-600 hover:text-indigo-500"
						>Esqueceu a senha?</a
					>
				</div>
			</div>

			<button type="submit" class="btn btn-primary self-center mt-6 w-6xs"> Entrar </button>
		</form>

		<p class="mt-10 text-center text-sm text-gray-500">
			Não é cadastrado?
			<a href="/signup" class="font-semibold leading-6 text-indigo-600 hover:text-indigo-500"
				>Registrar-se agora</a
			>
		</p>
	</div>
</div>
