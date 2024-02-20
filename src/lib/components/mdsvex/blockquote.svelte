<script lang="ts">
	import { cn } from '$lib/utils';
	import type { Snippet } from 'svelte';

	let {
		class: className = undefined,
		children,
		...restProps
	} = $props<{ class?: string; children: Snippet }>();
</script>

<blockquote
	class={cn(
		'my-10 rounded-md border-l-2 border-primary bg-surface/20 py-1 pl-6 pr-4 italic',
		className
	)}
	{...restProps}
>
	{@render children()}
</blockquote>
