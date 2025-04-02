<script lang="ts">
	import '../app.css';

	let { data, children } = $props();
	let { locals } = data;
</script>

<div class="min-h-screen flex flex-col">
	<div class="navbar bg-base-100 shadow-sm">
		<div class="flex-1">
			<img class="h-6 w-auto" src="https://wallpapercave.com/wp/wp10739235.png" alt="Anjo Amigo" />
		</div>
		<div class="flex-1">
			<a href="/home" class="btn btn-ghost text-primary-content text-xl">Friendly</a>
		</div>

		<div class="flex-none">
			<ul class="menu menu-horizontal px-1">
				<li><a href="/user" class="text-primary-content">{locals.user?.name ?? 'Register'}</a></li>
				{#if locals.user}
					<li>
						<form method="post" action="/?/logout">
							<button class="text-primary-content">Logout</button>
						</form>
					</li>
				{/if}
			</ul>
		</div>
	</div>

	{@render children?.()}
</div>
