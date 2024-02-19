<script lang="ts">
	import type { Snippet } from 'svelte';

	let { tag = 'section', class: className, children, ...atributtes } = $props<{
		tag?: string;
		class?: string;
		children: Snippet;
	}>();
</script>

<svelte:element {...atributtes} this={tag} class="card {className}">
	{@render children()}
</svelte:element>
