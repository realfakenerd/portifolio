<script lang="ts">
	import { goto } from '$app/navigation';
	import Hero from '$lib/components/Hero.svelte';
	import '@fontsource-variable/noto-sans-mono';
	import Icon from '@iconify/svelte';
	let {data, children} = $props();
</script>

<svelte:head>
	<title>Blog de Tecnologia e Tutoriais</title>
	<meta
		name="description"
		content="Encontre os melhores artigos, tutoriais e análises sobre tecnologia no nosso blog. Aprenda sobre programação, desenvolvimento web, inteligência artificial e muito mais."
	/>
	<meta property="og:title" content="Blog de Tecnologia e Tutoriais" />
	<meta
		property="og:description"
		content="Encontre os melhores artigos, tutoriais e análises sobre tecnologia no nosso blog. Aprenda sobre programação, desenvolvimento web, inteligência artificial e muito mais."
	/>
	<meta property="og:type" content="website" />
</svelte:head>

<Hero class="relative">
	<div class="flex w-full flex-col gap-4">
		<div class="flex flex-row gap-4">
			{#if data.currentRoute.match('/blog/')}
				<button class="fill-on-surface-variant px-4" onclick={() => goto('/blog')}>
					<Icon icon="mdi:arrow-left" width="24" />
				</button>
			{/if}
			<h1 class="text-display-medium">Blog</h1>
		</div>

		{@render children()}
	</div>
</Hero>
