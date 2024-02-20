<script lang="ts">
	import { cn } from '$lib/utils';
	let { class: className = undefined, restProps } = $props<{ class?: string; restProps: any[] }>();
</script>

<h5 class={cn('mt-8 scroll-m-20 text-lg font-semibold tracking-tight', className)} {...restProps}>
	<slot />
</h5>
