<script>
	import Icon from '@iconify/svelte';
	import { animate, stagger } from 'motion';

	$effect(() => {
		animate(
			'.img',
			{
				clipPath: [
					null,
					'polygon(0 50%, 100% 49%, 100% 63%, 0 58%)',
					'polygon(0 0, 100% 0, 100% 100%, 0% 100%)'
				]
			},
			{
				duration: 1,
				delay: stagger(0.1),
				easing: 'ease'
			}
		);
	});
</script>

<section class="section-container">
	<section class="projeto">
		<div class="img-container">
			<enhanced:img class="img" src="/static/pokedex/inicio.png" alt="inicio pokedex"
			></enhanced:img>
			<enhanced:img class="img" src="/static/pokedex/pokemon.png" alt="pokemon pokedex"
			></enhanced:img>
			<enhanced:img class="img" src="/static/pokedex/favorite.png" alt="favorite pokedex"
			></enhanced:img>
		</div>

		<div class="projeto-description">
			<h1 class="projeto-title">Pokedex</h1>
			<a href="https://supremepokedex.vercel.app/" target="_blank">
				<Icon icon="mdi:link" />
			</a>
			<div>
				<p>
					A Pokedex é um site que criei usando SvelteKit, TailwindCSS e Dexie.js, pensado para quem
					curte Pokémon e quer explorar mais sobre eles. A interface é simples e direta, facilitando
					a pesquisa por informações como tipos, habilidades, peso e altura dos Pokémons.
				</p>

				<p>
					Além de buscar informações, você pode favoritar seus Pokémons preferidos, e o melhor é que
					esses dados ficam salvos localmente, então dá para acessar mesmo offline. A experiência de
					navegação é suave, tanto no celular quanto no computador.
				</p>

				<p>
					No fim das contas, esse projeto mistura tecnologia moderna com um visual legal e prático,
					perfeito para fãs de Pokémon que querem ter todas as informações na mão.
				</p>
			</div>
		</div>
	</section>
</section>

<style>
	.section-container {
		margin-inline: auto;
		display: flex;
		min-height: 100dvh;
		align-items: center;
		justify-content: center;
		overflow: hidden;
		padding: theme('size.6');
		padding-top: theme('size.20');
	}

	.projeto {
		width: 100%;
		display: flex;
		flex-direction: row;
		gap: theme('size.4');
	}

	.img-container {
		display: flex;
		flex-direction: row;
		gap: theme('size.4');
		align-items: center;
	}

	.img {
		height: min(80dvh, 480px);
		width: fit-content;
		border-radius: theme('borderRadius.xl');
		object-fit: contain;
		clip-path: polygon(0 50%, 100% 50%, 100% 50%, 0 50%);
	}

	.projeto-description {
		width: 50%;

		.projeto-title {
			@apply text-headline-large;
		}
	}
</style>
