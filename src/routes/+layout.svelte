<script lang="ts">
	import { handleScroll } from '$lib/utils';

	import { onNavigate } from '$app/navigation';
	import Header from '$lib/components/Header.svelte';
	import '@fontsource/roboto/400.css';
	import '@fontsource/roboto/500.css';
	import { onMount } from 'svelte';
	import '../app.css';
	import type { LayoutData } from './$types';
	// @ts-expect-error this file has no d file
	import { updateTheme } from 'tailwind-material-colors/lib/updateTheme.esm';

	let navbar: HTMLElement;
	let fab: HTMLDivElement;
	onMount(() => {
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

	onNavigate((navigation) => {
		if (!document.startViewTransition) return;
		return new Promise((resolve) => {
			document.startViewTransition(async () => {
				resolve();
				await navigation.complete;
			});
		});
	});

	export let data: LayoutData;
</script>

<Header currentRoute={data.currentRoute} />

<main
	class="bg-surface-variant text-on-surface-variant col-start-1 col-end-3 rounded-xl shadow-md md:col-start-2"
>
	<slot />
</main>

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

	:root::view-transition-old(root) {
		animation: 90ms cubic-bezier(0.4, 0, 1, 1) both fade-out,
			300ms cubic-bezier(0.291, 0.281, 0, 1.2) both slide-to-left;
	}

	:root::view-transition-new(root) {
		animation: 210ms cubic-bezier(0, 0, 0.2, 1) 90ms both fade-in,
			300ms cubic-bezier(0.291, 0.281, 0, 1.2) both slide-from-right;
	}
</style>
