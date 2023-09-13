<script lang="ts">
	import { handleScroll } from '$lib/utils';
	import routes from '$lib/routes';
	import Icon from '@iconify/svelte';
	import Toggle from './Toggle.svelte';

	export let currentRoute = '';
</script>

<header class="bottom-0 md:w-[80px] z-[999] md:left-0 md:top-0">
	<div class="hidden h-screen flex-col items-center justify-evenly md:flex">
		<nav class="custom-navbar flex-col items-center gap-y-3 px-3 py-2">
			<ul>
				{#each routes as { path, icon, name }, i (i)}
					<li>
						<a
							class="group flex flex-col items-center gap-y-1"
							href={path}
							aria-label={`Ir para a página ${name}`}
							aria-current={currentRoute === path || currentRoute.startsWith(`${path}/`)
								? 'page'
								: null}
							role="tab"
							tabindex="0"
						>
							<div
								class="button group-hover:bg-secondary-container-hover"
								style="background-color:{currentRoute === path ||
								currentRoute.startsWith(`${path}/`)
									? 'rgb(var(--color-secondary-container))'
									: ''} "
							>
								<span class="fill-on-background group-hover:fill-on-secondary-container">
									<Icon width="24" {icon} />
								</span>
							</div>
							<span>
								{name}
							</span>
						</a>
					</li>
				{/each}
			</ul>

			<Toggle />
		</nav>
	</div>
	<div class="w-full md:hidden">
		<nav
			use:handleScroll
			class="custom-navbar transition-all duration-300
		fixed bottom-0 bg-background h-20 w-full flex-row px-2 py-0"
		>
			{#each routes as { path, icon, name }, i (i)}
				<a
					href={path}
					class="group"
					aria-label={`Ir para a página ${name}`}
					aria-current={currentRoute === path || currentRoute.startsWith(`${path}/`)
						? 'page'
						: null}
					role="tab"
					tabindex="0"
				>
					<div
						class="group-hover:bg-secondary-container-hover"
						style="background-color:{currentRoute === path || currentRoute.startsWith(`${path}/`)
							? 'rgb(var(--color-secondary-container))'
							: ''} "
					>
						<span class="fill-on-background group-hover:fill-on-secondary-container">
							<Icon width="24" {icon} />
						</span>
					</div>
					<span>{name}</span>
				</a>
			{/each}
		</nav>
	</div>
</header>

<style lang="postcss">
	.custom-navbar {
		@apply flex flex-none flex-grow-0;
	}

	.custom-navbar a {
		@apply order-[0] flex h-20 flex-none flex-grow flex-col items-center justify-center gap-1 px-0 pb-4 pt-3;
	}

	.custom-navbar div {
		@apply flex h-8 w-16 items-center justify-center rounded-2xl p-0 transition-colors duration-[250ms];
	}

	.custom-navbar div span {
		@apply flex h-8 items-center justify-center rounded-2xl;
	}

	.custom-navbar span {
		@apply text-label-small order-1 h-4 flex-none flex-grow-0 self-stretch text-center;
	}

	nav {
		view-transition-name: nav;
	}
</style>
