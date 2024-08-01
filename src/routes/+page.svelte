<script lang="ts">
	import { stagger, timeline } from 'motion';

	$effect(() => {
		timeline([
			[
				'.box',
				{ transform: 'translateX(0%) translateY(0%)', opacity: 1 },
				{
					duration: 1.6,
					opacity: {
						duration: 1.2,
						offset: [0, 1]
					},
					easing: [0.16, 1, 0.26, 0.98],
					delay: stagger(0.1, { from: 'first' })
				}
			],
			[
				'.box span',
				{ opacity: 1 },
				{ duration: 2, at: '-1', easing: 'step-start', delay: stagger(0.1, { from: 'first' }) }
			],
			[
				'.letter',
				{ fontVariationSettings: `'wght' 500, 'slnt' 0`, opacity: [0, 1] },
				{
					duration: 1.5,
					delay: stagger(0.1, { from: 'center', easing: 'ease-in-out' }),
					at: '-1.5'
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

<section>
	<hgroup>
		<h1>
			<span class="letter">W</span>
			<span class="letter">E</span>
			<span class="letter">B</span>
			<span class="letter">D</span>
			<span class="letter">E</span>
			<span class="letter">V</span>
		</h1>
	</hgroup>
	<ul>
		<li style="--translateXPos: 220%;" class="box">
			<span>M</span>
			<span></span>
			<span></span>
			<span>L</span>
		</li>
		<li style="--translateXPos: 110%;" class="box">
			<span>Y</span>
			<span>N</span>
			<span></span>
			<span>U</span>
		</li>
		<li style="--translateXPos: 0%;" class="box center">
			<span></span>
			<span>A</span>
			<span>I</span>
			<span>C</span>
		</li>
		<li style="--translateXPos: -100%;" class="box">
			<span></span>
			<span>M</span>
			<span>S</span>
			<span>A</span>
		</li>
		<li style="--translateXPos: -210%;" class="box">
			<span></span>
			<span>E</span>
			<span></span>
			<span>S</span>
		</li>
	</ul>
</section>

<style>
	section {
		position: relative;
		min-height: 100dvh;
		overflow: hidden;
		width: 100%;
		overflow: hidden;
	}

	hgroup {
		position: absolute;
		top: 2rem;
		left: 50%;
		z-index: 20;
		transform: translateX(-50%);
	}

	h1 {
		display: inline-flex;
		font-size: 8rem;
		color: theme('colors.on-surface');

		.letter {
			font-variation-settings:
				'wght' 10,
				'slnt' -10;
			opacity: 0;
		}
	}

	ul {
		display: flex;
		flex-direction: row;
		gap: 1rem;
		height: 75%;
		width: max(50dvw,100%);
		position: absolute;
		bottom: 1rem;
		z-index: 0;

		font-size: 4rem;
		font-weight: 500;
		color: theme('colors.on-primary');
	}

	.box {
		transform: translateX(var(--translateXPos)) translateY(50%);
		height: 100%;
		width: 20%;
		padding-block: 2rem;
		display: flex;
		flex-direction: column;
		align-items: center;
		opacity: 0;
		justify-content: space-between;
		border-radius: 1.5rem;
		background-color: theme('colors.primary');

		span {
			height: 5rem;
			display: flex;
			align-items: center;
			opacity: 0;
		}
	}
</style>
