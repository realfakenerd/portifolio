<script lang="ts">
	import Hero from '$lib/components/Hero.svelte';
	import { sharedAxisTransition, easeEmphasized } from '$lib/transitions';
	import { onMount } from 'svelte';

	let init = false;
	onMount(() => (init = true));
</script>

<Hero>
	{#if init}
		<figure in:sharedAxisTransition={{ direction: 'Y', rightSeam: true, easing: easeEmphasized }}>
			<img src="hands_success.png" alt="success email" />
		</figure>
	{/if}
</Hero>
