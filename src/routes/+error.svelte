<script lang="ts">
	import { page } from '$app/stores';
	import Hero from '$lib/components/Hero.svelte';
</script>

<Hero class="bg-error-container h-full flex-col">
	<div>
		<h1 class="text-display-large">{$page.status}</h1>
		<h2 class="text-headline-large">{$page.error?.message}</h2>
	</div>
</Hero>
