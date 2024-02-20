<script lang="ts">
	import { cn } from '$lib/utils';
	import type { Snippet } from 'svelte';
	let {
		class: className = undefined,
		children,
		...restProps
	} = $props<{ class?: string; children: Snippet }>();
</script>

<ul class={cn('pl-8 first:mt-0 last:mb-0', className)} {...restProps}>
	{@render children()}
</ul>

