<script lang="ts">
	import { superForm } from 'sveltekit-superforms/client';
	import '../../../app.css';

	let { data } = $props();

	const { form, enhance, errors, message } = superForm(data.form);
</script>

<div class="flex bg-base-100 justify-center items-center flex-grow py-12">
	<div class="p-8 w-full max-w-sm">
		<h1 class="text-4xl font-bold mb-6">Crie sua conta</h1>

		<form class="flex flex-col items-center" method="post" use:enhance>
			{#if $message}
				<div class="">
					{$message}
				</div>
			{/if}

			<label for="form-signup.name" class="floating-label w-full mt-3">
				<span>Nome</span>
				<input
					id="form-signup.name"
					class="input input-md"
					name="name"
					type="text"
					autocomplete="name"
					placeholder="Nome"
					value={$form.name}
					required
				/>
				<div class="text-error text-center text-xs mt-1">{$errors.name}</div>
			</label>

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

			<label for="form-signup.confirmPassword" class="floating-label w-full mt-3">
				<span>Confirme sua senha</span>
				<input
					id="form-signup.confirmPassword"
					class="input input-md"
					name="confirmPassword"
					type="password"
					placeholder="Confirmação"
					value={$form.confirmPassword}
					required
				/>
				<div class="text-error text-center text-xs mt-1">{$errors.confirmPassword}</div>
			</label>

			<button type="submit" class="btn btn-primary self-center mt-6 w-6xs"> Cadastrar </button>
		</form>
	</div>
</div>
