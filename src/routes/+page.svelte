<script lang="ts">
	import Hands from '$lib/components/Hands.svelte';
	import Hero from '$lib/components/Hero.svelte';
	import { animate, stagger } from 'motion';

	function animateText(node: HTMLElement) {

		animate(
			[...node.children],
			{
				y: [-50, 0],
				opacity: [0, 1]
			},
			{
				duration: 1,
				delay: stagger(.25, { easing: [0, 0, 0.2, 1] })
			}
		).finished.then(() => {
			animate(
				'#ola',
				{ y: [0, 16] },
				{
					easing: [[0.8, 0, 1, 1],[0, 0, 0.2, 1]],
					duration: 1,
					repeat: Infinity,
					direction: 'alternate'
				}
			);
		});
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
	<section use:animateText class="flex flex-col items-start gap-1 font-medium">
		<h1 id="ola" class="text-title-medium">Ola! 👋</h1>
		<h1 class="text-display-large text-primary">Lucas aqui</h1>
		<h1 class="text-title-large">Faço os melhores webapps para o seu navegador</h1>
	</section>
	<Hands />
</Hero>
