<script lang="ts">
	import { cn } from '$lib/utils'
	let { class: className = undefined, ...restProps } = $props<{ class?: string; }>();

</script>

<h2
	class={cn(
		'mt-12 scroll-m-20 border-b border-primary pb-2 text-2xl font-semibold tracking-tight first:mt-0',
		className
	)}
	{...restProps}
>
	<slot />
</h2>
