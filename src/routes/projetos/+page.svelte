<script lang="ts">
	import { onMount } from 'svelte';
	import type { PageData } from './$types';
	import Hero from '$lib/components/Hero.svelte';
	import Icon from '$lib/components/Icon.svelte';

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
		<ul class="grid gap-2">
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
					<div class="flex flex-row gap-2">
						<a
							class="button fill-on-primary interactive-bg-primary text-on-primary"
							rel="noreferrer"
							href={repo.html_url}
							aria-label="github url"
							target="_blank"
						>
							<Icon
								width={18}
								height={18}
								d={`M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z`}
							/>
							<span> git repo </span>
						</a>
						{#if repo.homepage}
							<a
								class="button fill-on-secondary interactive-bg-secondary text-on-secondary"
								rel="noreferrer"
								href={repo.homepage}
								aria-label="homepage url"
								target="_blank"
							>
								<Icon
									width={18}
									height={18}
									d={`M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zm6.93 6h-2.95c-.32-1.25-.78-2.45-1.38-3.56 1.84.63 3.37 1.91 4.33 3.56zM12 4.04c.83 1.2 1.48 2.53 1.91 3.96h-3.82c.43-1.43 1.08-2.76 1.91-3.96zM4.26 14C4.1 13.36 4 12.69 4 12s.1-1.36.26-2h3.38c-.08.66-.14 1.32-.14 2s.06 1.34.14 2H4.26zm.82 2h2.95c.32 1.25.78 2.45 1.38 3.56-1.84-.63-3.37-1.9-4.33-3.56zm2.95-8H5.08c.96-1.66 2.49-2.93 4.33-3.56C8.81 5.55 8.35 6.75 8.03 8zM12 19.96c-.83-1.2-1.48-2.53-1.91-3.96h3.82c-.43 1.43-1.08 2.76-1.91 3.96zM14.34 14H9.66c-.09-.66-.16-1.32-.16-2s.07-1.35.16-2h4.68c.09.65.16 1.32.16 2s-.07 1.34-.16 2zm.25 5.56c.6-1.11 1.06-2.31 1.38-3.56h2.95c-.96 1.65-2.49 2.93-4.33 3.56zM16.36 14c.08-.66.14-1.32.14-2s-.06-1.34-.14-2h3.38c.16.64.26 1.31.26 2s-.1 1.36-.26 2h-3.38z`}
								/>
								<span> site </span>
							</a>
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
