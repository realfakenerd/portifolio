<script lang="ts">
	import { cn } from '$lib/utils';
	import type { Snippet } from 'svelte';

	let {
		class: className = undefined,
		children,
		...restProps
	} = $props<{ class?: string; children: Snippet }>();
</script>

<p class={cn('[&:not(:first-child)]:my-3', className)} {...restProps}>
	{@render children()}
</p>
