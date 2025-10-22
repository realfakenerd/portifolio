<script lang="ts">
	import { animate, stagger, steps } from 'motion';

	$effect(() => {
		animate([
			[
				'.box',
				{
					'--translate-x-pos': 0,
					y: ['50%', 0],
					opacity: [0, 1],
					filter: ['blur(4px)', 'blur(0px)']
				},
				{
					duration: 1.2,
					ease: [0.729, 0.088, 0.344, 0.939],
					delay: stagger(0.1, { from: 'center' }),
					opacity: {
						duration: 1
					}
				}
			],
			[
				'.box span',
				{
					opacity: 1
				},
				{
					duration: 1,
					ease: steps(1),
					delay: stagger(0.1, { from: 'first' })
				}
			],
			[
				'.letter',
				{
					opacity: 1,
					'font-variation-settings': [
						`'wght' 10, 'slnt' -10`,
						`'wght' 500, 'slnt' 0`
					]
				},
				{
					duration: 0.33 * 6,
					delay: stagger(0.33, { from: 'last' }),
					at: '<'
				}
			]
		]);
	});
</script>

<svelte:head>
	<title>Página Inicial</title>
	<meta
		name="description"
		content="Webapps de alta qualidade desenvolvidos por Lucas. Entre em contato para ter a melhor experiência em seu navegador."
	/>
	<meta name="keywords" content="webapps, desenvolvimento, navegador, Lucas" />
</svelte:head>

<section class="relative min-h-dvh w-full overflow-hidden pt-20">
	<h1 class="text-muted-foreground absolute top-8 left-1/2 inline-flex -translate-x-1/2 text-9xl">
		{#each ['W', 'E', 'B', 'D', 'E', 'V'] as letter}
			<span class="letter opacity-0" aria-label={letter}>
				{letter}
			</span>
		{/each}
	</h1>

	<section
		class="[&_div]:bg-primary absolute bottom-4 z-0 flex h-[75%] w-full flex-row justify-evenly gap-1 text-7xl font-medium"
	>
		<div style="--translate-x-pos: 220%;" class="box">
			<span>M</span>
			<span></span>
			<span></span>
			<span>L</span>
		</div>
		<div style="--translate-x-pos: 110%;" class="box">
			<span>Y</span>
			<span>N</span>
			<span></span>
			<span>U</span>
		</div>
		<div style="--translate-x-pos: 0%;" class="box center">
			<span></span>
			<span>A</span>
			<span>I</span>
			<span>C</span>
		</div>
		<div style="--translate-x-pos: -100%;" class="box">
			<span></span>
			<span>M</span>
			<span>S</span>
			<span>A</span>
		</div>
		<div style="--translate-x-pos: -210%;" class="box">
			<span></span>
			<span>E</span>
			<span></span>
			<span>S</span>
		</div>
	</section>
</section>

<style>
	@property --translate-x-pos {
		syntax: '<length-percentage>';
		initial-value: 0%;
		inherit: false;
	}

	.box {
		translate: var(--translate-x-pos);
		height: 100%;
		width: 18%;
		padding-block: 2rem;
		display: flex;
		flex-direction: column;
		align-items: center;
		opacity: 0;
		justify-content: space-between;
		border-radius: 1.5rem;

		span {
			height: 5rem;
			display: flex;
			align-items: center;
			opacity: 0;
		}
	}
</style>
