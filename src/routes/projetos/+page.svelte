<script lang="ts">
	import { fly } from 'svelte/transition';
	import { backOut } from 'svelte/easing';
	import { onMount } from 'svelte';
	import Hero from '$lib/components/Hero.svelte';

	let init = false;
	onMount(() => {
		init = true;
	});

	interface Projects {
		title: string;
		description: string;
		link: string;
		used: string[];
		site?: string;
	}

	const projects: Projects[] = [
		{
			title: 'Thaser',
			description: `Uma reescritura do motor gráfico Phaser feito inteiramente em typescript, 
			ainda tem muito trabalho a ser feito, testes a serem escritos, pequenas otimizações, extensão do VSCode...`,
			link: 'https://github.com/realfakenerd/thaser',
			used: ['vite', 'typescript', 'jest']
		},
		{
			title: 'Almonderoid',
			description: `Um remake moderno de Asteroids escrito inteiramente em Typescript usando WebGL, Svelte and Vercel`,
			link: 'https://github.com/realfakenerd/almonderoid',
			used: ['vercel', 'webgl', 'svelte'],
			site: 'https://almonderoid.vercel.app/'
		},
		{
			title: 'Pokedex',
			description: `Um pokedex feito com svelte e routify`,
			link: 'https://github.com/realfakenerd/pokedex',
			used: ['routify', 'svelte'],
			site: 'https://supremepokedex.vercel.app/'
		}
	];
</script>

<svelte:head>
	<title>Projetos</title>
</svelte:head>

<Hero>
	<div style="align-self: flex-start;">
		<h1 class="text-4xl">Aqui estão meus projetos</h1>
	</div>
	<section>
		<ul class="grid grid-cols-1 gap-5 md:grid-cols-3">
			{#if init}
				{#each projects as p, i (i)}
					<li
						class="card compact bg-base-100"
						in:fly={{ duration: 600, delay: 300 * i, y: 200, x: 10 - i * 10, easing: backOut }}
					>
						<div class="card-body">
							<h2 class="card-title">
								<span>{p.title}</span>
								{#each p.used as u, i (i)}
									<span class="badge">{u}</span>
								{/each}
							</h2>

							<p>{p.description}</p>
							<div class="card-actions [&>a]:btn [&>a]:btn-ghost text-orange-400">
								<a rel="noreferrer" href={p.link} target="_blank">git repo</a>
								{#if p.site}
									<a rel="noreferrer" href={p.site} target="_blank"> site </a>
								{/if}
							</div>
						</div>
					</li>
				{/each}
			{/if}
		</ul>
	</section>
</Hero>
