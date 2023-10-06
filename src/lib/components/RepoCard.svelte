<script lang="ts">
	import Button from "./Button.svelte";
	import Card from "./Card.svelte";
	import Chips from "./Chips.svelte";

    export let repo: Partial<Repo> = {};
</script>
<Card 
	tag="li"
	class="interactive-bg-background justify-between gap-2"
>
	<section class="flex flex-col gap-y-2">
		<h2 class="text-title-large capitalize" aria-label="Nome do repositório: {repo.name}">
			<span>{repo.name}</span>
		</h2>
		{#if repo.language}
			<div class="flex flex-row gap-2">
				<Chips icon="logos:{repo.language.toLowerCase()}-icon">
					{repo.language}
				</Chips>
			</div>
		{/if}
		<p class="text-body-medium">{repo.description}</p>
	</section>
	<div class="flex flex-row gap-2">
		<Button
			isRoute={false}
			isLink
			icon="mdi:github"
			href={repo.html_url}
			class="interactive-bg-primary fill-on-primary"
		>
			<span>git repo</span>
		</Button>

		{#if repo.homepage}
			<Button
				isRoute={false}
				isLink
				icon="mdi:web"
				class="interactive-bg-secondary fill-on-secondary"
				href={repo.homepage}
			>
				<span>site</span>
			</Button>
		{/if}
	</div>
</Card>