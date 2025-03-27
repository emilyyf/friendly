<script lang="ts">
	let { children } = $props();
</script>

<div class="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8">
	<div class="sm:mx-auto sm:w-full sm:max-w-sm">
		<img
			class="mx-auto h-10 w-auto"
			src="https://wallpapercave.com/wp/wp10739235.png"
			alt="Anjo Amigo"
		/>
	</div>

	{@render children?.()}
</div>
