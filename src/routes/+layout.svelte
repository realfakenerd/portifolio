<script lang="ts">
	import { onNavigate } from '$app/navigation';
	import Header from '$lib/components/Header.svelte';
	import '@fontsource-variable/noto-sans-display';
	import { enableCache } from '@iconify/svelte';
	import '../app.css';

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

	let {data, children} = $props()
</script>

<Header currentRoute={data.currentRoute} />

<main class="flex-1 p-2">
	{@render children()}
</main>

<style>
	:global(:root) {
		color-scheme: light dark;
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
