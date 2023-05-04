<script lang="ts">
	import Hero from '$lib/components/Hero.svelte';
</script>

<svelte:head>
	<title>Blog</title>
</svelte:head>
<section class="flex h-full">
	<div class="flex w-full flex-col gap-4 p-4">
		<h1 class="text-display-medium">Blog</h1>
		<label class="w-full">
			<span class="text-label-large">Search</span>
			<input type="text" />
		</label>
		<slot />
	</div>
</section>
