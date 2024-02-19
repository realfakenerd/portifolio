<script lang="ts" generics="T">
	let {
		class:className,
		list = [],
		isUl = true,
	} = $props<{
		class?: string;
		list?: T[];
		isUl?: boolean
	}>()

	let tag = isUl ? 'ul' : 'ol';
</script>

<svelte:element this={tag} class="list {className}">
	<slot name="list-description" />
	{#each list as item, i (i)}
		<slot {item} />
	{/each}
</svelte:element>
