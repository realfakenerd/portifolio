<script lang="ts">
	import Icon from '@iconify/svelte';
	import { createTimeline } from 'animejs';
	import { ModeWatcher } from 'mode-watcher';
	import '../app.css';
	import { animate } from 'motion';

	$effect(() => {
		animate(
			[
				['#ellLogo2', { cy: 210 }],
				['#ellLogo3', { cy: 210 }],
				['#ellLogo4', { cy: 210 }],
				['#ellLogo2', { cx: 210 }],
				['#ellLogo4', { cx: 210 }],
				['#ellLogo2', { cy: 50 }],
				['svg', { rotate: 359 }, { duration: 1, ease: 'anticipate' }]
			],
			{ defaultTransition: { duration: 0.5, ease: [0.85, 0, 0.15, 1] }, delay: 5 }
		);
	});

	let { children } = $props();
</script>

<svelte:boundary>
	<ModeWatcher />

	<header
		class="fixed top-0 z-10 flex h-18 w-full items-center justify-start gap-x-2.5 overflow-hidden px-6 backdrop-blur-md"
	>
		<a href="/" class="flex shrink-0 items-center self-stretch px-3" aria-label="Home">
			<svg
				width="34px"
				height="34px"
				viewBox="0 0 260 260"
				fill="none"
				xmlns="http://www.w3.org/2000/svg"
			>
				<circle id="ellLogo1" cx="50" cy="50" r="46" class="stroke-primary" stroke-width="12" />
				<circle id="ellLogo2" cx="50" cy="50" r="48" class="fill-primary" />
				<circle id="ellLogo3" cx="50" cy="50" r="48" class="fill-primary" />
				<circle id="ellLogo4" cx="50" cy="50" r="48" class="fill-primary" />
			</svg>
			<span class="sr-only">Ternary</span>
		</a>
		<nav
			class="hidden flex-grow items-center justify-center gap-x-4 md:inline-flex [&_a]:transition-colors"
		>
			{#each ['sobre', 'contato', 'projetos', 'blog'] as link}
				<li class="flex flex-shrink-0 items-center">
					<a
						class="hover:text-primary text-center text-base font-medium capitalize"
						href={`/${link}`}>{link}</a
					>
				</li>
			{/each}
		</nav>
		<button class="size-5 flex-shrink-0">
			<Icon icon="mdi:search" />
		</button>
	</header>

	<main class="min-h-dvh w-full flex-1">
		{@render children()}
	</main>

	{#snippet pending()}
		<!-- empty -->
	{/snippet}
</svelte:boundary>
