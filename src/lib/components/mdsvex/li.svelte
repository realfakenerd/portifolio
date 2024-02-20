<script lang="ts">
	import { cn } from '$lib/utils';
	let { class: className = undefined, restProps } = $props<{ class?: string; restProps: any[] }>();
</script>

<li class={cn('mt-2', className)} {...restProps}>
	<slot />
</li>
