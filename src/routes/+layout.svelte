<script lang="ts">
	import '../app.css';
	import { page } from '$app/stores';
	import { Navbar, NavBrand, NavLi, NavUl, NavHamburger } from 'flowbite-svelte';

	let { data, children } = $props();
	let activeUrl = $state($page.url.pathname);
	let { locals } = data;
</script>

<!-- Children routes are rendered here -->
<Navbar>
	<NavBrand href="/home">
		<img
			class="mx-auto h-6 w-auto"
			src="https://wallpapercave.com/wp/wp10739235.png"
			alt="Anjo Amigo"
		/>
		<span class="self-center whitespace-nowrap text-xl font-semibold dark:text-white">Friendly</span
		>
	</NavBrand>
	<NavHamburger />
	<NavUl {activeUrl}>
		<NavLi href="/home">Home</NavLi>
		<NavLi href="/user">{locals.user?.name ?? 'Register'}</NavLi>
		<NavLi><form method="post" action="/?/logout"><button>Logout</button></form></NavLi>
	</NavUl>
</Navbar>

<div class="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
	{@render children?.()}
</div>
