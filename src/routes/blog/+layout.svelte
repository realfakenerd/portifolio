<script lang="ts">
	import Icon from '$lib/components/Icon.svelte';
	export let data;
</script>

<svelte:head>
	<title>Blog</title>
</svelte:head>
<section class="flex h-full">
	<div class="flex w-full flex-col gap-4 p-4 flex-1">
		<div class="flex flex-row gap-4">
			{#if data.currentRoute.match('/blog/')}
				<button class="fill-on-surface-variant px-4" on:click={() => window.history.back()}>
					<Icon d={`M20 11H7.83l5.59-5.59L12 4l-8 8 8 8 1.41-1.41L7.83 13H20v-2z`} />
				</button>
			{/if}
			<h1 class="text-display-medium">Blog</h1>
		</div>

		<slot />
	</div>
</section>
