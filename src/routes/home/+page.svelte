<script lang="ts">
  import { localStore } from "$lib/localStore.svelte";

  let user = $state("");
  let logged_in = $state(false);
  let token = localStore("token", null).value;

  if (token) {
    fetch("http://localhost:3000/profile", {
      method: "GET",
      headers: {
        Authorization: token,
      },
    }).then((response) => {
      if (response.ok) {
        response.json().then((u) => {
          user = u.email;
          logged_in = true;
        });
      }
    });
  }
</script>

<div>
  <h1>Anjo Amigo</h1>
  {#if logged_in}
    <h2>Hello {user}</h2>
  {/if}
</div>
