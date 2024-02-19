<script lang="ts">
	import Hero from '$lib/components/Hero.svelte';
	import RepoCard from '$lib/components/RepoCard.svelte';
	import { onMount } from 'svelte';
	import type { PageData } from './$types';

	let init = $state(false);
	$effect(() => {
		init = true;
	});

	let {data} = $props();
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
			{#each data.repos as repo (repo.id)}
				<RepoCard {repo} />
			{/each}
			{#await data.streamed.org then repos}
				{#each repos as repo}
					<RepoCard {repo} />
				{/each}
			{/await}
		</ul>
	</section>
</Hero>

<style>
	ul.grid {
		grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
	}
</style>
