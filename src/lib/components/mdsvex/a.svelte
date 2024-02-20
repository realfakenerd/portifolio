<script lang="ts">
	import { cn } from '$lib/utils';
	import type { Snippet } from 'svelte';

	let {
		class: className = undefined,
		href,
		children,
		...restProps
	} = $props<{ class?: string; href: string; children: Snippet }>();

	let internal = $derived(href.startsWith('/') || href.startsWith('#'));
	let rel = $derived(!internal ? 'noopener noreferrer' : undefined);
	let target = $derived(!internal ? '_blank' : undefined);
</script>

<a
	{href}
	{target}
	{rel}
	class={cn('font-medium underline decoration-primary decoration-slice', className)}
	{...restProps}
>
	{@render children()}
</a>
