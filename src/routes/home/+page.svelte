<script lang="ts">
  import { UserStorage, getUser } from "$lib/userStorage.svelte";

  let user: UserStorage = getUser();
</script>

<div>
  <h1>Anjo Amigo</h1>
  {#if user.logged}
    <h2>Hello {user.user.email}</h2>
  {/if}
</div>
