<script lang="ts">
	import '../app.css';

	let { data, children } = $props();
	let { locals } = data;
</script>

<!-- Children routes are rendered here -->
<div class="navbar">
	<div class="flex-1">
		<img
			class="mx-auto h-6 w-auto"
			src="https://wallpapercave.com/wp/wp10739235.png"
			alt="Anjo Amigo"
		/>
		<a href="/home" class="self-center whitespace-nowrap text-xl font-semibold dark:text-white"
			>Friendly</a
		>
	</div>
	<div class="flex-none">
		<ul class="menu menu-horizontal px-1">
			<li><a href="/user">{locals.user?.name ?? 'Register'}</a></li>
			<li><form method="post" action="/?/logout"><button>Logout</button></form></li>
		</ul>
	</div>
</div>

<div class="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
	{@render children?.()}
</div>
