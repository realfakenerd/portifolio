<script lang="ts">
	import { cn } from '$lib/utils';
	import type { Snippet } from 'svelte';
	let {
		class: className = undefined,
		children,
		...restProps
	} = $props<{ class?: string; children: Snippet }>();
</script>

<h1 class={cn('mt-2 scroll-m-20 text-title-large font-bold', className)} {...restProps}>
	{@render children()}
</h1>
