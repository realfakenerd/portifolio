<script lang="ts">
	import Hands from '$lib/components/Hands.svelte';
	import Hero from '$lib/components/Hero.svelte';
	import { animate, stagger } from 'motion';

	function animateText(node: HTMLElement) {
		animate(
			[...node.children],
			{
				y: [24, 0],
				opacity: [0, 0, 1]
			},
			{
				duration: 1,
				delay: stagger(0.05, { easing: 'ease-in-out' })
			}
		);
	}
</script>

<svelte:head>
	<title>Página Inicial</title>
	<meta
		name="description"
		content="Webapps de alta qualidade desenvolvidos por Lucas. Entre em contato para ter a melhor experiência em seu navegador."
	/>
	<meta name="keywords" content="webapps, desenvolvimento, navegador, Lucas" />
</svelte:head>

<Hero class="h-full">
	<section use:animateText class="flex flex-col items-start gap-3 font-medium">
		<h1 class="text-title-medium">Ola! 👋</h1>
		<h1 class="text-display-large text-primary">Lucas aqui</h1>
		<h1 class="text-title-large">Faço os melhores webapps para o seu navegador</h1>
	</section>
	<Hands />
</Hero>
