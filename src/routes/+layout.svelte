<script lang="ts">
	import Navbar from '$lib/components/Navbar.svelte';

	import '../app.css';
</script>

<header class="container mx-auto">
	<Navbar />
</header>
<main class="container mx-auto min-h-full">
	<slot />
</main>

<footer class="footer mt-20 place-items-center gap-3 rounded bg-base-200 p-4 text-base-content">
	<div class="grid-flow-col items-center gap-4">
		<a href="/about" class="link link-hover">About</a>
		<a href="/contact" class="link link-hover">Contact</a>
		<a href="/projects" class="link link-hover">Work</a>
	</div>

	<div class="place-self-center">
		<p>
			<span>👨‍💻</span> with <span class="animate-pulse">❤</span> love by Lucas Ouverney © 2022
		</p>
	</div>
	<div class="flex flex-row items-center gap-3 place-self-end">
		<span>built with</span>
		<a href="https://kit.svelte.dev" target="_blank">
			<img
				class="h-10 w-10"
				src="https://svelte.dev/_app/immutable/assets/stopwar-947a4798.svg"
				alt="svelte logo"
			/>
		</a>
	</div>
</footer>
