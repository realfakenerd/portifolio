<script lang="ts">
	import Icon from '$lib/components/Icon.svelte';
	import Toggle from '$lib/components/Toggle.svelte';
	import routes from '$lib/routes';
	import { easeEmphasizedAccel, easeEmphasizedDecel } from '$lib/transitions';
	import { handleScroll } from '$lib/utils';

	import '@fontsource/roboto/400.css';
	import '@fontsource/roboto/500.css';
	import { onMount } from 'svelte';
	import { fly } from 'svelte/transition';
	import '../app.css';
	import type { LayoutData } from './$types';
	// @ts-expect-error this file has no d file
	import { updateTheme } from 'tailwind-material-colors/lib/updateTheme.esm';

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
