<script lang="ts">
	import { cn } from '$lib/utils';
	import type { Snippet } from 'svelte';
	let {
		class: className = undefined,
		children,
		...restProps
	} = $props<{ class?: string; children: Snippet }>();
</script>

<h3 class={cn('text-xl mt-8 scroll-m-20 font-semibold tracking-tight', className)} {...restProps}>
	{@render children()}
</h3>
