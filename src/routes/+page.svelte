<script lang="ts">
	import Hands from '$lib/components/Hands.svelte';
	import Hero from '$lib/components/Hero.svelte';
	import { timeline, animate, spring } from 'motion';

	function animateText(node: HTMLElement) {
		const children = node.children;

		const transforms = {
			opacity: 1,
			rotateX:[-100,0]
		};

		timeline([
			[children[0], transforms, {duration: .3}],
			[children[1], transforms, {duration: .4, at: '+.025'}],
			[children[2], transforms, {duration: .5, at: '+.025'}]
		], { defaultOptions: { easing: 'ease'}})
		
		animate(
			'#ola',
			{ y: [0, 16] },
			{
				easing: [
					[0.8, 0, 1, 1],
					[0, 0, 0.2, 1]
				],
				duration: 1,
				repeat: Infinity,
				direction: 'alternate'
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

<Hero class="h-full gap-12 md:gap-0">
	<section use:animateText class="flex flex-col items-start font-medium">
		<h2 id="ola" class="text-title-medium">Ola! 👋</h2>
		<h1 class="text-display-large text-primary">Lucas aqui</h1>
		<h3 class="text-title-large">Faço os melhores webapps para o seu navegador</h3>
	</section>
	<Hands />
</Hero>

<style>
	section * {
		transform: rotateX(-100deg);
		transform-origin: top;
		opacity: 0;
	}
</style>
