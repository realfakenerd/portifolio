<script lang="ts">
	import { onMount } from 'svelte';
	import type { PageData } from './$types';
	import Hero from '$lib/components/Hero.svelte';
	import Icon from '$lib/components/Icon.svelte';
	import Button from '$lib/components/Button.svelte';
	import icons from '$lib/icons';
	import { browser } from '$app/environment';

	let init = false;
	onMount(() => {
		init = true;
	});

	export let data: PageData;
	const filteredRepos = data.repos.filter(
		(e) => e.name !== 'portifolio' && e.name !== 'realfakenerd'
	);
</script>

<svelte:head>
	<title>Projetos</title>
	<meta name="description" content="Confira meus projetos recentes e seus detalhes." />
	<meta name="keywords" content="projetos, GitHub, código-fonte, desenvolvimento, programação" />

	<!-- Meta tags para compartilhamento em mídias sociais -->
	<meta property="og:title" content="Projetos" />
	<meta property="og:description" content="Confira meus projetos recentes e seus detalhes." />
</svelte:head>

<Hero>
	<div class="w-full">
		<h1 class="text-headline-medium">Aqui estão meus projetos</h1>
	</div>
	<section class="w-full">
		<ul class="grid gap-2">
			{#each filteredRepos as repo (repo.id)}
				<li
					class="interactive-bg-background text-on-background flex w-full flex-col justify-between gap-2 self-stretch rounded-xl p-4"
				>
					<section class="flex flex-col gap-y-2">
						<h2 class="text-title-large capitalize" aria-label="Nome do repositório: {repo.name}">
							<span>{repo.name}</span>
						</h2>
						{#if repo.language}
							<div class="flex flex-row gap-2">
								<span
									class="ring-outline text-label-small inline-flex place-items-center rounded-md px-4 ring-1"
								>
									{repo.language}
								</span>
							</div>
						{/if}
						<p class="text-body-medium">{repo.description}</p>
					</section>
					<div class="flex flex-row gap-2">
						<Button isRoute={false} isLink icon={icons.github} href={repo.html_url}>
							<span>git repo</span>
						</Button>

						{#if repo.homepage}
							<Button isRoute={false} isLink icon={icons.browser} color="secondary" href={repo.homepage}> 
								<span>site</span>
							</Button>
							
						{/if}
					</div>
				</li>
			{/each}
		</ul>
	</section>
</Hero>

<style>
	ul.grid {
		grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
	}
</style>
