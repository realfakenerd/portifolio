<script lang="ts">
	import { backOut } from 'svelte/easing';
	import { onMount } from 'svelte';
	import type { PageData } from './$types';
	import Hero from '$lib/components/Hero.svelte';

	let init = false;
	onMount(() => {
		init = true;
	});

	export let data: PageData;
</script>

<svelte:head>
	<title>Projetos</title>
</svelte:head>

<Hero>
	<div class="w-full">
		<h1 class="text-headline-medium">Aqui estão meus projetos</h1>
	</div>
	<section class="w-full">
		<ul class="grid grid-cols-1 md:grid-cols-3 gap-2">
			{#each data.repos as repo, i (i)}
				<li
					class="flex self-stretch flex-col w-full rounded-xl bg-background text-on-background p-4 gap-2 justify-between"
				>
					<section>
						<h2 class="text-title-large capitalize">
							<span>{repo.name}</span>
						</h2>
						<div class="flex flex-row gap-2">
							{#if repo.language}
								<span
									class="inline-flex bg-surface-tint place-items-center rounded-md p-1 px-2 text-label-small text-surface"
								>
									{repo.language}
								</span>
							{/if}
						</div>
						<p class="text-body-medium">{repo.description}</p>
					</section>
					<div class="text-primary">
						<a
							class="button bg-primary text-on-primary"
							rel="noreferrer"
							href={repo.html_url}
							target="_blank"
						>
							git repo
						</a>
						{#if repo.homepage}
							<a
								class="button bg-primary text-on-primary"
								rel="noreferrer"
								href={repo.homepage}
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
