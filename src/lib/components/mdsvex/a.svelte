<script lang="ts">
	import { cn } from '$lib/utils'

	let {
		class: className = undefined,
		href,
		...restProps
	} = $props<{ class?: string; href: string; }>();

	let internal = $derived(href.startsWith('/') || href.startsWith('#'));
	let rel = $derived(!internal ? 'noopener noreferrer' : undefined);
	let target = $derived(!internal ? '_blank' : undefined);
</script>

<a
	{href}
	{target}
	{rel}
	class={cn('font-medium decoration-wavy underline decoration-primary', className)}
	{...restProps}
>
	<slot />
</a>
