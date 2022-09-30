<script>
	import { fly, fade } from 'svelte/transition';
	import { backOut } from 'svelte/easing';
	import { onMount } from 'svelte';
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
</svelte:head>

<section class="hero min-h-[70vh] backdrop-blur-sm">
	<div class="hero-overlay opacity-50 md:rounded-b-3xl" />
	<div class="hero-content flex-col lg:flex-row-reverse gap-10">
		{#if init}
			<img src="hands_show.png" class="w-1/2 md:w-auto" alt="hands_show png" in:fade={{ delay: 900 }} />
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
	</div>
</section>
