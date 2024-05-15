<script lang="ts">
	import type { Snippet } from 'svelte';

	interface Props {
		tag?: string;
		class?: string;
		children: Snippet;
	}

	let { tag = 'section', class: className, children, ...atributtes }: Props = $props();
</script>

<svelte:element {...atributtes} this={tag} class="card {className}">
	{@render children()}
</svelte:element>
