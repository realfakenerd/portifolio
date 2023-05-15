<script>
	import { slide, fade } from 'svelte/transition';
	import { easeEmphasizedDecel } from '$lib/transitions';
	import { onMount } from 'svelte';
	import Hero from '$lib/components/Hero.svelte';
	const text = [
		{
			t: 'Olá! 👋',
			c: 'text-title-medium animate-bounce'
		},
		{
			t: 'Lucas aqui',
			c: 'text-display-large text-primary'
		},
		{
			t: 'Eu faço os melhores webapps para o seu navegador',
			c: 'text-title-large'
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

<Hero>
	<div class="flex flex-col items-start gap-3 font-medium">
		{#if init}
			{#each text as t, index (index)}
				<h1 class={t.c} in:slide={{ delay: 800 * index, easing: easeEmphasizedDecel }}>
					{t.t}
				</h1>
			{/each}
		{/if}
	</div>
	{#if init}
		<img
			src="hands_show.webp"
			alt="hands_show png"
			height="400"
			width="245"
			in:fade={{ delay: 1000 }}
		/>
	{/if}
</Hero>
