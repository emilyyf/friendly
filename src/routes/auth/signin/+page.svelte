<script lang="ts">
  import { Checkbox, Input, Label } from "flowbite-svelte";
  import { UserStorage, getUserStore } from "$lib/userStorage.svelte";
  import { goto } from "$app/navigation";

  let email = $state("");
  let password = $state("");
  let error = $state("");

  // This should probably be refactored
  function handleSubmit(e: Event) {
    e.preventDefault();
    const userStore = getUserStore();
    fetch("http://localhost:3000/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, password }),
    })
      .then((response) => {
        if (response.ok) {
          response.json().then(({ token }) => {
            fetch("http://localhost:3000/profile", {
              method: "GET",
              headers: {
                Authorization: token,
              },
            })
              .then((res) =>
                res.json().then((user) => {
                  userStore.value = new UserStorage(user, token, true);
                  goto("/home");
                }),
              )
              .catch((e) => {
                console.log(e);
                error = "Failed to login";
              });
          });
        } else {
          error = "Email ou senha inválidos";
        }
      })
      .catch((e) => {
        console.log(e);
        error = "Failed to login";
      });
  }
</script>

<div class="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
  {#if error}{error}{/if}
  <form class="space-y-6" onsubmit={handleSubmit}>
    <fieldset>
      <Label for="email" class="mb-2">E-mail</Label>
      <Input
        id="email"
        name="email"
        type="text"
        autocomplete="email"
        placeholder="fulano@anjoamigo.com.br"
        bind:value={email}
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
        bind:value={password}
        required
      />
    </fieldset>

    <div class="grid grid-cols-2">
      <Checkbox>Manter conectado</Checkbox>
      <div class="text-sm text-end">
        <a
          href="/recover-password"
          class="font-semibold text-isdigo-600 hover:text-indigo-500"
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
