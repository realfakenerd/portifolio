<script lang="ts">
	import { fly } from 'svelte/transition';
	import { backOut } from 'svelte/easing';
	import { onMount } from 'svelte';

	let init = false;
	onMount(() => {
		init = true;
	});

	interface Projects {
		title: string;
		description: string;
		link: string;
		used: string[];
	}

	const projects: Projects[] = [
		{
			title: 'Thaser',
			description: `A Rewrite of Phaser game engine made in Typascript, 
                        there's a lot of work to be done, test to be writen, small optimizations, VSCode extensions...`,
			link: 'https://github.com/realfakenerd/thaser',
			used: ['vite', 'typescript', 'jest']
		},
		{
			title: 'Almonderoid',
			description: `An modern remake of Asteroids made entirely on Typescript using WebGL, Svelte and Vercel`,
			link: 'https://github.com/realfakenerd/almonderoid',
			used: ['vercel', 'webgl', 'svelte']
		},
		{
			title: 'Pokedex',
			description: `A pokedex database made with svelte and Routify`,
			link: 'https://github.com/realfakenerd/pokedex',
			used: ['routify', 'svelte']
		}
	];
</script>

<svelte:head>
	<title>Projects</title>
</svelte:head>

<div class="hero min-h-[70vh] backdrop-blur-sm">
	<div class="hero-overlay opacity-50 md:rounded-b-3xl" />
	<div class="hero-content flex-col">
		<div style="align-self: flex-start;">
			<h1 class="text-4xl">Here is some of my Projects</h1>
		</div>
		<section>
			<ul class="grid grid-cols-1 md:grid-cols-3 gap-5">
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
								<div class="card-actions">
									<a href={p.link} target="_blank" class="btn btn-link">git repo</a>
								</div>
							</div>
						</li>
					{/each}
				{/if}
			</ul>
		</section>
	</div>
</div>
