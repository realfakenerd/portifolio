<script lang="ts">
	import { cn } from '$lib/utils';

	let { class: className = undefined, restProps } = $props<{ class?: string; restProps: any[] }>();
</script>

<tr class={cn('m-0 border-t p-0 even:bg-surface-variant', className)} {...restProps}>
	<slot />
</tr>
