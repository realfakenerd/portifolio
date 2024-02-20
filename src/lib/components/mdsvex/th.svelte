<script lang="ts">
	import { cn } from '$lib/utils';

	let { class: className = undefined, restProps } = $props<{ class?: string; restProps: any[] }>();

</script>

<th
	class={cn(
		'border px-4 py-2 text-left font-bold [&[align=center]]:text-center [&[align=right]]:text-right',
		className
	)}
	{...restProps}
>
	<slot />
</th>
