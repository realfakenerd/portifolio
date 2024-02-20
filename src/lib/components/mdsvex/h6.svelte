<script lang="ts">
	import { cn } from '$lib/utils';
	let { class: className = undefined, restProps } = $props<{ class?: string; restProps: any[] }>();
</script>

<h6 class={cn('mt-8 scroll-m-20 text-base font-semibold tracking-tight', className)} {...restProps}>
	<slot />
</h6>
