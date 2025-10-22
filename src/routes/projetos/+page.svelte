<script lang="ts">
	import Icon from '@iconify/svelte';
	let { data } = $props();

	async function getLanguges(repo_name: string) {
		const url = `/api/git/repo/${repo_name}/languages`;
		const response = await fetch(url);
		const data = (await response.json()) as Record<string, number>;
		const keys = Object.keys(data);
		const valid_data = keys.filter(
			(key) =>
				!key.includes('status') && !key.includes('message') && !key.includes('documentation_url')
		);
		return valid_data;
	}

</script>

<svelte:head>
	<title>Projetos</title>
	<meta name="description" content="Confira meus projetos recentes e seus detalhes." />
	<meta name="keywords" content="projetos, GitHub, código-fonte, desenvolvimento, programação" />

	<meta property="og:title" content="Projetos" />
	<meta property="og:description" content="Confira meus projetos recentes e seus detalhes." />
</svelte:head>



<section class=" relative min-h-dvh w-full overflow-hidden pt-20 pb-10">
	<header class="text-muted-foreground flex justify-center py-20 text-9xl">
		<h1 class="font-medium tracking-tight">Meus projetos</h1>
	</header>
	<ul class="container mx-auto grid grid-cols-[repeat(auto-fill,minmax(20rem,1fr))] gap-4">
		{#each data.org as repo}
			{@render repoCard(repo)}
		{/each}
		{#each data.repos as repo (repo.id)}
			{@render repoCard(repo)}
		{/each}
	</ul>
</section>

{#snippet repoCard(repo: Repo)}
	<div class="repo-card subgrid bg-muted grid grid-rows-[1fr_auto] rounded-2xl p-6">
		<div>
			<div class="mb-4 flex items-center justify-between">
				<Icon class="text-primary" icon="mdi:folder" />

				<div class="flex space-x-2">
					<a class="text-white/60 hover:text-white" href={repo.homepage}>
						<Icon icon="mdi:link" />
					</a>
					<a class="text-white/60 hover:text-white" href={repo.git_url}>
						<Icon icon="mdi:git" />
					</a>
				</div>
			</div>
			<h2 class="text-primary mb-2 text-2xl font-bold">{repo.name}</h2>
			<p class="mb-4 text-white/70">
				{repo.description}
			</p>
		</div>
		<div class="flex flex-wrap gap-2">
			<svelte:boundary>
				{#each await getLanguges(repo.name) as language}
					{#if language}
						<span
							class="bg-primary/20 text-primary rounded-full px-2.5 py-0.5 text-xs font-semibold"
						>
							{language}
						</span>
					{/if}
				{/each}
				{#snippet pending()}
					<span
						class="bg-primary/20 text-primary animate-pulse rounded-full px-2.5 py-0.5 text-xs font-semibold"
					>
						loading...
					</span>
				{/snippet}
			</svelte:boundary>
		</div>
	</div>
{/snippet}
