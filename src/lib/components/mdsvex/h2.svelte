<script lang="ts">
	import { cn } from '$lib/utils'
	import type { Snippet } from 'svelte';
	let { class: className = undefined, children, ...restProps } = $props<{ class?: string; children: Snippet; }>();

</script>

<h2
	class={cn(
		'scroll-m-20 py-10 text-headline-large font-medium capitalize first:pt-0 last:pb-0',
		className
	)}
	{...restProps}
>
	{@render children()}
</h2>
