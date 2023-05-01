<script lang="ts">
	import Hero from '$lib/components/Hero.svelte';
	import type { LayoutData } from './$types';
	export let data: LayoutData;
</script>

<svelte:head>
	<title>Blog</title>
</svelte:head>

<Hero>
	<section class="flex w-full flex-row justify-between gap-5">
		{#if data.currentRoute.match('/blog/')}
			<button class="btn-ghost btn" on:click={() => window.history.back()}>
				<svg
					xmlns="http://www.w3.org/2000/svg"
					fill="none"
					viewBox="0 0 24 24"
					stroke-width="1.5"
					stroke="currentColor"
					class="h-6 w-6"
				>
					<path
						stroke-linecap="round"
						stroke-linejoin="round"
						d="M9 15L3 9m0 0l6-6M3 9h12a6 6 0 010 12h-3"
					/>
				</svg>
			</button>
		{/if}
		<div class="form-control w-full">
			<div class="input-group">
				<input type="text" placeholder="Procurar postagens…" class="input-bordered input w-full" />
				<button class="btn-square btn">
					<svg
						xmlns="http://www.w3.org/2000/svg"
						class="h-6 w-6"
						fill="none"
						viewBox="0 0 24 24"
						stroke="currentColor"
						><path
							stroke-linecap="round"
							stroke-linejoin="round"
							stroke-width="2"
							d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
						/></svg
					>
				</button>
			</div>
		</div>
	</section>
	<slot />
</Hero>
