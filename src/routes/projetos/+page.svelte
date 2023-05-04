<script lang="ts">
	import { onMount } from 'svelte';
	import type { PageData } from './$types';
	import Hero from '$lib/components/Hero.svelte';

	let init = false;
	onMount(() => {
		init = true;
	});

	export let data: PageData;
	const repos = data.repos.filter((e) => e.name !== 'portifolio' && e.name !== 'realfakenerd');
</script>

<svelte:head>
	<title>Projetos</title>
</svelte:head>

<Hero>
	<div class="w-full">
		<h1 class="text-headline-medium">Aqui estão meus projetos</h1>
	</div>
	<section class="w-full">
		<ul class="grid grid-cols-1 gap-2 md:grid-cols-3">
			{#each repos as repo (repo.id)}
				<li
					class="interactive-bg-background text-on-background flex w-full flex-col justify-between gap-2 self-stretch rounded-xl p-4"
				>
					<section class="flex flex-col gap-y-2">
						<h2 class="text-title-large capitalize" aria-label={repo.name}>
							<span>{repo.name}</span>
						</h2>
						<div class="flex flex-row gap-2">
							{#if repo.language}
								<span
									class="ring-outline text-label-small inline-flex place-items-center rounded-md px-4 ring-1"
								>
									{repo.language}
								</span>
							{/if}
						</div>
						<p class="text-body-medium">{repo.description}</p>
					</section>
					<div>
						<a
							class="button interactive-bg-primary text-on-primary"
							rel="noreferrer"
							href={repo.html_url}
							aria-label="github url"
							target="_blank"
						>
							git repo
						</a>
						{#if repo.homepage}
							<a
								class="button interactive-bg-secondary text-on-secondary"
								rel="noreferrer"
								href={repo.homepage}
								aria-label="homepage url"
								target="_blank"
							>
								site
							</a>
						{/if}
					</div>
				</li>
			{/each}
		</ul>
	</section>
</Hero>
