<script lang="ts">
	import { onNavigate } from '$app/navigation';
	import '@fontsource-variable/noto-sans-display';
	import Icon, { enableCache } from '@iconify/svelte';
	import '../app.css';
	import '@fontsource-variable/inter/standard.css';
	import { animate, glide, timeline } from 'motion';

	enableCache('local');
	onNavigate((navigation) => {
		if (!document.startViewTransition) return;
		return new Promise((resolve) => {
			document.startViewTransition(async () => {
				resolve();
				await navigation.complete;
			});
		});
	});

	let { children } = $props();

	$effect(() => {
		timeline(
			[
				['#ellLogo2', { cy: 210 }, { duration: 0.5 }],
				['#ellLogo3', { cy: 210 }, { duration: 0.5, at: '<' }],
				['#ellLogo4', { cy: 210 }, { duration: 0.5, at: '<' }],
				['#ellLogo2', { cx: 210 }, { duration: 0.5 }],
				['#ellLogo4', { cx: 210 }, { duration: 0.5, at: '<' }],
				['#ellLogo2', { cy: 50 },  { duration: 0.5 }]
			],
			{
				defaultOptions: {
					easing: [0.85, 0, 0.15, 1]
				}
			}
		);
	});
</script>

<header>
	<a href="/" class="logo">
		<svg
			class="logo-icon"
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
	</a>
	<nav class="links">
		<li class="searchInput">
			<Icon icon="mdi:search" width="18px" />
		</li>
		<li class="link">
			<a href="/sobre">Sobre</a>
		</li>
		<li class="link">
			<a href="/portfolio"> Portfolio </a>
		</li>
		<li class="link">
			<a href="/blog">Blog</a>
		</li>
	</nav>
</header>

<main>
	{@render children()}
</main>

<style>
	:global(body) {
		font-family: 'Inter Variable', sans-serif;
		font-display: swap;
	}

	main {
		min-height: 100%;
		width: 100%;
	}

	header {
		position: fixed;
		top: 0;

		width: 100%;
		height: 80px;
		display: flex;
		flex-direction: row;
		justify-content: start;
		align-items: center;
		column-gap: 10px;
		row-gap: 0px;
		z-index: 50;
		padding-inline: 24px;
		overflow: hidden;
		backdrop-filter: blur(6px);
		background-color: theme('colors.surface' / .6);

	}

	.logo {
		display: flex;
		padding-inline: 0.75rem;
		align-self: stretch;
		align-items: center;
		flex-shrink: 0;
	}

	.links {
		flex-grow: 1;
		display: flex;
		flex-direction: row;
		justify-content: center;
		align-items: center;
		gap: 12px;
		color: theme('colors.on-surface');
	}

	.searchInput {
		flex-shrink: 0;
		width: 19px;
		height: 18px;
		color: theme('colors.on-surface');
	}

	.link {
		flex-shrink: 0;
		max-width: 64px;
		display: flex;
		place-items: center;
		row-gap: 0px;

		a {
			flex-shrink: 0;
			width: 64px;
			white-space: nowrap;
			font-size: 16px;
			line-height: 18.72px;
			font-weight: 500;
			text-align: center;
		}
	}

	@keyframes fade-in {
		from {
			opacity: 0;
		}
	}

	@keyframes fade-out {
		to {
			opacity: 0;
		}
	}

	@keyframes slide-from-right {
		from {
			transform: translateY(30px);
		}
	}

	@keyframes slide-to-left {
		to {
			transform: translateY(-30px);
		}
	}

	:root::view-transition-old(card) {
		animation:
			110ms cubic-bezier(0.4, 0, 1, 1) both fade-out,
			250ms cubic-bezier(0.291, 0.281, 0, 1.2) both slide-to-left;
	}

	:root::view-transition-new(card) {
		animation:
			210ms cubic-bezier(0, 0, 0.2, 1) 90ms both fade-in,
			500ms cubic-bezier(0.291, 0.281, 0, 1.2) both slide-from-right;
	}
</style>
