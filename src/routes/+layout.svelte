<script lang="ts">
	import { fly } from 'svelte/transition';
	import '../app.css';
	import type { LayoutData } from './$types';
	import Icon from '$lib/components/Icon.svelte';
	import '@fontsource/roboto/400.css';
	import '@fontsource/roboto/500.css';
	import { onMount } from 'svelte';
	import { updateTheme } from 'tailwind-material-colors/lib/updateTheme.esm';

	onMount(() => {
		updateTheme(
			{
				primary: `#${Math.floor(Math.random() * 16777215).toString(16)}`
			},
			'media'
		);
	});

	const dc =
		'M17 1.01L7 1c-1.1 0-2 .9-2 2v18c0 1.1.9 2 2 2h10c1.1 0 2-.9 2-2V3c0-1.1-.9-1.99-2-1.99zM17 19H7V5h10v14z';
	const di =
		'M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z';
	const routes = [
		{
			title: 'Home',
			path: '/',
			d: {
				o: 'M12 5.69l5 4.5V18h-2v-6H9v6H7v-7.81l5-4.5M12 3L2 12h3v8h6v-6h2v6h6v-8h3L12 3z',
				f: 'M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z'
			}
		},
		{
			title: 'Sobre',
			path: '/sobre',
			d: {
				o: di,
				f: di
			}
		},
		{
			title: 'Contato',
			path: '/contato',
			d: {
				o: dc,
				f: dc
			}
		},
		{
			title: 'Projetos',
			path: '/projetos',
			d: {
				o: 'M19.17,12l-4.58-4.59L16,6l6,6l-3.59,3.59L17,14.17L19.17,12z M1.39,4.22l4.19,4.19L2,12l6,6l1.41-1.41L4.83,12L7,9.83 l12.78,12.78l1.41-1.41L2.81,2.81L1.39,4.22z',
				f: 'M9.4 16.6L4.8 12l4.6-4.6L8 6l-6 6 6 6 1.4-1.4zm5.2 0l4.6-4.6-4.6-4.6L16 6l6 6-6 6-1.4-1.4z'
			}
		}
	];

	export let data: LayoutData;
</script>

<header
	class="fixed bottom-0 md:top-0 md:left-0 
	row-start-2 col-start-1 col-end-3 md:row-start-1 md:row-end-2 
	md:col-end-2 w-full md:w-20 z-[999]"
>
	<div class="hidden md:flex flex-col h-screen justify-center items-center">
		<nav class="custom-navbar flex-col py-2 px-3 items-center">
			{#each routes as { path, d, title }, i (i)}
				<a
					class="flex flex-col items-center gap-2 group {data.currentRoute === path
						? 'text-orange-400'
						: ''}"
					href={path}
				>
					<div
						class="button group-hover:bg-secondary"
						style="background-color:{data.currentRoute === path ? '#4A4458' : ''} "
					>
						<span class="fill-on-background group-hover:fill-on-secondary">
							<Icon d={data.currentRoute === path ? d.f : d.o} />
						</span>
					</div>
					<h3>
						{title}
					</h3>
				</a>
			{/each}
		</nav>
	</div>
	<div class="md:hidden w-full">
		<nav class="custom-navbar py-0 px-2 mx-[-1rem] bg-background h-20 flex-row w-full">
			{#each routes as { path, d, title }, index (index)}
				<a href={path} class="group">
					<div
						class="group-hover:bg-secondary"
						style="background-color:{data.currentRoute === path ? '#4A4458' : ''} "
					>
						<span class="fill-on-background group-hover:fill-on-secondary">
							<Icon d={data.currentRoute === path ? d.f : d.o} />
						</span>
					</div>
					<h3>{title}</h3>
				</a>
			{/each}
		</nav>
	</div>
</header>
{#key data.currentRoute}
	<main
		in:fly={{ y: -5, duration: 250, delay: 250 }}
		out:fly={{ y: 5, duration: 250 }}
		class="shadow-md col-start-1 col-end-3 md:col-start-2 rounded-xl bg-surface-variant text-on-surface-variant"
	>
		<slot />
	</main>
{/key}

<style lang="scss">
	main {
		min-block-size: 100%;
	}

	.custom-navbar {
		@apply flex flex-none flex-grow-0 gap-2;
		a {
			@apply order-[0] flex h-20 flex-none flex-grow flex-col items-center justify-center gap-1 px-0 pb-4 pt-3;
			div {
				@apply flex h-8 w-16 flex-col items-center justify-center rounded-2xl p-0 transition-all duration-300;

				span {
					@apply flex h-8 w-16 flex-col items-center justify-center rounded-2xl p-0;
				}
			}
			h3 {
				@apply text-label-small order-1 h-4 flex-none flex-grow-0 self-stretch text-center;
			}
		}
	}
</style>
