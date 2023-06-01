<script lang="ts">
	import Icon from '$lib/components/Icon.svelte';
	import { goto } from '$app/navigation';
	export let data;
</script>

<svelte:head>
	<title>Blog de Tecnologia e Tutoriais</title>
	<meta name="description" content="Encontre os melhores artigos, tutoriais e análises sobre tecnologia no nosso blog. Aprenda sobre programação, desenvolvimento web, inteligência artificial e muito mais." />
	<meta property="og:title" content="Blog de Tecnologia e Tutoriais" />
	<meta property="og:description" content="Encontre os melhores artigos, tutoriais e análises sobre tecnologia no nosso blog. Aprenda sobre programação, desenvolvimento web, inteligência artificial e muito mais." />
	<meta property="og:type" content="website" />
</svelte:head>


<section class="flex h-full">
	<div class="flex w-full flex-col gap-4 p-4 flex-1">
		<div class="flex flex-row gap-4">
			{#if data.currentRoute.match('/blog/')}
				<button class="fill-on-surface-variant px-4" on:click={() => goto('/blog')}>
					<Icon d={`M20 11H7.83l5.59-5.59L12 4l-8 8 8 8 1.41-1.41L7.83 13H20v-2z`} />
				</button>
			{/if}
			<h1 class="text-display-medium">Blog</h1>
		</div>

		<slot />
	</div>
</section>
