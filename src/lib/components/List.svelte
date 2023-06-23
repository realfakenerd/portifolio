<script lang="ts">
	import type { HTMLOlAttributes } from 'svelte/elements';
	export let isUl = true;

	type T = $$Generic;
	export let list: T[] = [];
	let tag = isUl ? 'ul' : 'ol';

	export let extraClassess = '';
</script>

<svelte:element this={tag} class="list {extraClassess}">
	<slot name="list-description" />
	{#each list as item, i (i)}
		<slot {item} />
	{/each}
</svelte:element>
