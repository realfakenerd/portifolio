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
	<title>Página Inicial</title>
	<meta name="description" content="Webapps de alta qualidade desenvolvidos por Lucas. Entre em contato para ter a melhor experiência em seu navegador." />
	<meta name="keywords" content="webapps, desenvolvimento, navegador, Lucas" />
</svelte:head>

<Hero>
	<svelte:fragment>
		<section class="flex flex-col items-start gap-3 font-medium" aria-live={init ? 'polite' : 'off'}>
			{#if init}
				{#each text as t, index (index)}
					<h1 role="heading" aria-level="1" class={t.c} in:slide={{ delay: 800 * index, easing: easeEmphasizedDecel }}>
						{t.t}
					</h1>
				{/each}
			{/if}
		</section>
		{#if init}
			<img
				alt="Ilustração de mãos mostrando algo"
				src="hands_show.webp"
				height="400"
				width="245"
				in:fade={{ delay: 1000 }}
			/>
		{/if}
	</svelte:fragment>
</Hero>
