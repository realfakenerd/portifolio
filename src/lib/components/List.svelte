<script lang="ts" generics="T">


	interface Props {
		class?: string;
		list?: T[];
		isUl?: boolean;
	}

	let { class: className, list = [], isUl = true }: Props = $props();

	let tag = isUl ? 'ul' : 'ol';
</script>

<svelte:element this={tag} class="list {className}">
	<slot name="list-description" />
	{#each list as item, i (i)}
		<slot {item} />
	{/each}
</svelte:element>
