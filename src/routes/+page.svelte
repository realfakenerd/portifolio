<script>
	import { fly, fade } from 'svelte/transition';
	import { backOut } from 'svelte/easing';
	import { onMount } from 'svelte';
	import Hero from '$lib/components/Hero.svelte';
	const text = [
		{
			t: 'Hi! 👋',
			c: 'text-xl animate-bounce'
		},
		{
			t: 'Lucas here',
			c: 'text-6xl text-orange-400'
		},
		{
			t: 'I build the best apps for your web browser',
			c: 'text-4xl'
		}
	];

	let init = false;
	onMount(() => {
		init = true;
	});
</script>

<svelte:head>
	<title>Home</title>
	<link rel="preload" as="image" href="https://dev-lucasouverney.vercel.app/hands_show.webp">
</svelte:head>

<Hero reverse>
	{#if init}
		<img
			src="hands_show.webp"
			class="w-1/2 md:w-auto"
			alt="hands_show png"
			height="400"
			width="245"
			in:fade={{ delay: 900 }}
		/>
	{/if}
	<div class="flex flex-col items-start gap-3 font-semibold">
		{#if init}
			{#each text as t, index (index)}
				<h1 class={t.c} in:fly={{ delay: 800 * index, easing: backOut, y: 100 }}>
					{t.t}
				</h1>
			{/each}
		{/if}
	</div>
</Hero>
