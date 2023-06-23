<script lang="ts">
	import Icon from '$lib/components/Icon.svelte';
	import Toggle from '$lib/components/Toggle.svelte';
	import { easeEmphasizedAccel, easeEmphasizedDecel } from '$lib/transitions';
	import '@fontsource/roboto/400.css';
	import '@fontsource/roboto/500.css';
	import { onMount } from 'svelte';
	import { fly } from 'svelte/transition';
	import '../app.css';
	import type { LayoutData } from './$types';
	// @ts-expect-error this file has no d file
	import { updateTheme } from 'tailwind-material-colors/lib/updateTheme.esm';
	import { handleScroll } from '$lib/utils';
	import icons from '$lib/icons';

	let navbar: HTMLElement;
	let fab: HTMLDivElement;
	onMount(() => {
		handleScroll(navbar, fab);
		const color = Math.floor(Math.random() * 16777215)
			.toString(16)
			.padStart(6, '0');
		updateTheme(
			{
				primary: `#${color}`
			},
			'class'
		);
	});

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
				o: icons.info,
				f: icons.info
			}
		},
		{
			title: 'Contato',
			path: '/contato',
			d: {
				o: icons.contato,
				f: icons.contato
			}
		},
		{
			title: 'Projetos',
			path: '/projetos',
			d: {
				o: 'M19.17,12l-4.58-4.59L16,6l6,6l-3.59,3.59L17,14.17L19.17,12z M1.39,4.22l4.19,4.19L2,12l6,6l1.41-1.41L4.83,12L7,9.83 l12.78,12.78l1.41-1.41L2.81,2.81L1.39,4.22z',
				f: 'M9.4 16.6L4.8 12l4.6-4.6L8 6l-6 6 6 6 1.4-1.4zm5.2 0l4.6-4.6-4.6-4.6L16 6l6 6-6 6-1.4-1.4z'
			}
		},
		{
			title: 'Blog',
			path: '/blog',
			d: {
				o: icons.blog,
				f: icons.blog
			}
		}
	];

	export let data: LayoutData;
</script>

<header
	class="fixed bottom-0 z-[999] col-start-1 
	col-end-3 row-start-2 w-full md:left-0 md:top-0 
	md:col-end-2 md:row-start-1 md:row-end-2 md:w-20"
>
	<div class="hidden h-screen flex-col items-center justify-evenly md:flex">
		<nav class="custom-navbar flex-col items-center gap-y-3 px-3 py-2">
			<ul>
				{#each routes as { path, d, title }, i (i)}
					<li>
						<a
							class="group flex flex-col items-center gap-y-1"
							href={path}
							aria-label={`Ir para a página ${title}`}
							aria-current={data.currentRoute === path || data.currentRoute.startsWith(`${path}/`)
								? 'page'
								: null}
							role="tab"
							tabindex="0"
						>
							<div
								class="button group-hover:bg-secondary-container-hover"
								style="background-color:{data.currentRoute === path ||
								data.currentRoute.startsWith(`${path}/`)
									? 'rgb(var(--color-secondary-container))'
									: ''} "
							>
								<span class="fill-on-background group-hover:fill-on-secondary-container">
									<Icon
										d={data.currentRoute === path || data.currentRoute.startsWith(`${path}/`)
											? d.f
											: d.o}
									/>
								</span>
							</div>
							<span>
								{title}
							</span>
						</a>
					</li>
				{/each}
			</ul>
		</nav>
		<Toggle />
	</div>
	<div class="w-full flex-col gap-y-2 md:hidden">
		<div bind:this={fab} class="fixed bottom-24 transition-all right-4 duration-150">
			<Toggle />
		</div>
		<nav
			bind:this={navbar}
			class="custom-navbar transition-all duration-300
		fixed bottom-0 bg-background mx-[-1rem] 
		h-20 w-full flex-row px-2 py-0"
		>
			{#each routes as { path, d, title }, i (i)}
				<a
					href={path}
					class="group"
					aria-label={`Ir para a página ${title}`}
					aria-current={data.currentRoute === path || data.currentRoute.startsWith(`${path}/`)
						? 'page'
						: null}
					role="tab"
					tabindex="0"
				>
					<div
						class="group-hover:bg-secondary-container-hover"
						style="background-color:{data.currentRoute === path ||
						data.currentRoute.startsWith(`${path}/`)
							? 'rgb(var(--color-secondary-container))'
							: ''} "
					>
						<span class="fill-on-background group-hover:fill-on-secondary-container">
							<Icon
								d={data.currentRoute === path || data.currentRoute.startsWith(`${path}/`)
									? d.f
									: d.o}
							/>
						</span>
					</div>
					<span>{title}</span>
				</a>
			{/each}
		</nav>
	</div>
</header>
{#key data.currentRoute}
	<main
		in:fly={{ y: -5, duration: 250, delay: 250, easing: easeEmphasizedDecel }}
		out:fly={{ y: 5, duration: 250, easing: easeEmphasizedAccel }}
		class="bg-surface-variant text-on-surface-variant col-start-1 col-end-3 rounded-xl shadow-md md:col-start-2"
	>
		<slot />
	</main>
{/key}

<style lang="scss">
	:global(:root) {
		color-scheme: light dark;
	}

	main {
		min-block-size: 100dvh;
	}

	.custom-navbar {
		@apply flex flex-none flex-grow-0;
		a {
			@apply order-[0] flex h-20 flex-none flex-grow flex-col items-center justify-center gap-1 px-0 pb-4 pt-3;

			div {
				@apply flex h-8 w-16 items-center justify-center rounded-2xl p-0 transition-colors duration-[250ms];

				span {
					@apply flex h-8 items-center justify-center rounded-2xl;
				}
			}
			span {
				@apply text-label-small order-1 h-4 flex-none flex-grow-0 self-stretch text-center;
			}
		}
	}
</style>
