<script lang="ts">
	import { cn } from '$lib/utils';
	import type { Snippet } from 'svelte';

	let {
		class: className,
		children,
		...restProps
	} = $props<{ class?: string; children: Snippet }>();
</script>

<pre
	class={cn(
		'mb-4 mt-6 max-h-[650px] overflow-x-auto rounded-lg border bg-error-light-hover py-4',
		className
	)}
	{...restProps}>
	{@render children()}
</pre>
