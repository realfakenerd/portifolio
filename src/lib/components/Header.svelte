<script lang="ts">
	import routes from '$lib/routes';
	import Icon from '@iconify/svelte';
	import { navdown } from 'navdown';

	export let currentRoute = '';

	$: isCurrentRoute = <T, P>(path: string, firstClass: T, secondClass?: P) =>
		currentRoute === path || currentRoute.startsWith(`${path}/`) ? firstClass : secondClass;
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
							role="tab"
							tabindex="0"
						>
							<div
								aria-current={isCurrentRoute(path, 'page', undefined)}
								class="relative button group-hover:bg-secondary-container-hover"
							>
								<span class="fill-on-background group-hover:fill-on-secondary-container">
									<Icon width="24" {icon} />
								</span>
							</div>
							<span
								style:font-variation-settings={isCurrentRoute(path, `"wght" 600`, `"wght" 400`)}
							>
								{name}
							</span>
						</a>
					</li>
				{/each}
			</ul>

			<!-- <Toggle /> -->
		</nav>
	</div>
	<div class="w-full md:hidden">
		<nav
			use:navdown={{
				transition: { transitionDuration: '250ms'}
			}}
			class="custom-navbar fixed bottom-0 bg-background h-20 w-full flex-row px-2 py-0"
		>
			{#each routes as { path, icon, name }, i (i)}
				<a
					href={path}
					class="group"
					aria-label={`Ir para a página ${name}`}
					role="tab"
					tabindex="0"
				>
					<div
						class="group-hover:bg-secondary-container-hover"
						style:background-color={isCurrentRoute(path, 'rgb(var(--color-secondary-container))')}
					>
						<span class="fill-on-background group-hover:fill-on-secondary-container">
							<Icon width="24" {icon} />
						</span>
					</div>
					<span style:font-variation-settings={isCurrentRoute(path, `"wght" 600`, `"wght" 400`)}
						>{name}</span
					>
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

	div[aria-current='page'] {
		background-color: rgb(var(--color-secondary-container));
	}

	nav {
		view-transition-name: nav;
	}
</style>
