<script lang="ts">
	import { browser } from '$app/environment';
	import { easeEmphasized } from '$lib/transitions';
	import Icon from '@iconify/svelte';
	import { persisted } from 'svelte-local-storage-store';
	import { fly } from 'svelte/transition';

	interface ThemeDef {
		preference: 'dark' | 'light' | 'system';
		current: 'dark' | 'light';
	}

	export const theme = persisted<ThemeDef>('color-scheme', {
		preference: 'system',
		current: browser
			? window.matchMedia('(prefers-color-scheme: dark').matches
				? 'dark'
				: 'light'
			: 'light'
	});

	theme.subscribe(($theme) => {
		if (!browser) return;

		document.body.classList.remove('light', 'dark');
		document.body.classList.add($theme.current);
	});

	export function toggle() {
		const upcomingTheme = $theme.current === 'light' ? 'dark' : 'light';

		if (
			upcomingTheme ===
			(window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light')
		) {
			$theme.preference = 'system';
		} else {
			$theme.preference = upcomingTheme;
		}
		$theme.current = upcomingTheme;
	}

	const cb = (e: MediaQueryListEvent) =>
		theme.set({ preference: $theme.preference, current: e.matches ? 'dark' : 'light' });

	let query: MediaQueryList;

	let init = $state(false);
	$effect(() => {
		if (!browser) return;

		query?.removeEventListener('change', cb);

		if ($theme.preference === 'system') {
			query = window.matchMedia('(prefers-color-scheme: dark)');
			query.addEventListener('change', cb);
		}
		init = !init;
		return () => query?.removeEventListener('change', cb);
	});
</script>

<div class="h-6">
	{#if init}
		<button
			in:fly={{ easing: easeEmphasized, y: 150, duration: 300 }}
			onclick={toggle}
			class="fab fab-normal interactive-bg-tertiary fill-on-tertiary"
			aria-label="theme toggler"
		>
			{#if $theme.current === 'dark'}
				<Icon width="24" icon="mdi:lightbulb-on" />
			{:else}
				<Icon width="24" icon="mdi:lightbulb" />
			{/if}
		</button>
	{/if}
</div>
