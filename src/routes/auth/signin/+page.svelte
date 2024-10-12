<script>
import { Checkbox, Input, Label } from 'flowbite-svelte';
</script>

<div class="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
  <form class="space-y-6" action="#">
    <fieldset>
      <Label for="email" class="mb-2">E-mail</Label>
      <Input
        id="email"
        name="email"
        type="text"
        autocomplete="email"
        placeholder="fulano@anjoamigo.com.br"
        required
      />
    </fieldset>

    <fieldset>
      <Label for="password" class="mb-2">Senha</Label>
      <Input
        id="password"
        name="password"
        type="password"
        autocomplete="current-password"
        placeholder="•••••••••"
        required
      />
    </fieldset>

    <div class="grid grid-cols-2">
      <Checkbox>Manter conectado</Checkbox>
      <div class="text-sm text-end">
        <a href="/recover-password" class="font-semibold text-isdigo-600 hover:text-indigo-500"
          >Esqueceu a senha?</a
        >
      </div>
    </div>

    <div>
      <button
        type="submit"
        class="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
      >
        Entrar
      </button>
    </div>
  </form>

  <p class="mt-10 text-center text-sm text-gray-500">
    Não é cadastrado?
    <a
      href="/signup"
      class="font-semibold leading-6 text-indigo-600 hover:text-indigo-500"
      >Registrar-se agora</a
    >
  </p>
</div>
