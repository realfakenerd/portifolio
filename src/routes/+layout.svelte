<script lang="ts">
	import Navbar from '$lib/components/Navbar.svelte';
	import { fly } from 'svelte/transition';
	import '../app.css';
	import type { LayoutData } from './$types';

	export let data: LayoutData;
</script>

<header class="container mx-auto py-0 md:py-3">
	<Navbar />
</header>
{#key data.currentRoute}
	<main
		in:fly={{ y: -5, duration: 250, delay: 250 }}
		out:fly={{ y: 5, duration: 250}}
		class="container mx-auto min-h-full -z-10"
	>
		<slot />
	</main>
{/key}

<footer class="footer mt-20 place-items-center gap-3 rounded bg-base-200 p-4 text-base-content">
	<div class="grid-flow-col items-center gap-4">
		<a data-sveltekit-prefetch href="/sobre" class="link link-hover">About</a>
		<a data-sveltekit-prefetch href="/contato" class="link link-hover">Contact</a>
		<a data-sveltekit-prefetch href="/projetos" class="link link-hover">Work</a>
	</div>

	<div class="place-self-center">
		<p>
			<span>👨‍💻</span> with <span class="animate-pulse">❤</span> love by Lucas Ouverney © 2022
		</p>
	</div>
	<div class="flex flex-row items-center gap-3 place-self-end">
		<span>built with</span>
		<a href="https://kit.svelte.dev" target="_blank" rel="noreferrer">
			<img
				class="h-10 w-10"
				src="https://svelte.dev/_app/immutable/assets/stopwar-947a4798.svg"
				alt="svelte logo"
			/>
		</a>
		<span>and</span>
		<a href="https://buttercms.com/" target="_blank" rel="noreferrer">
			<img class="w-20" src="https://cdn.buttercms.com/JSSDbrHPSnGlLUcyHTn5" alt="butter logo" />
		</a>
	</div>
</footer>
