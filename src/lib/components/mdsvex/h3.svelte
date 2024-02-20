<script lang="ts">
	import { cn } from '$lib/utils';
	let { class: className = undefined, restProps } = $props<{ class?: string; restProps: any[] }>();

</script>

<h3 class={cn('mt-8 scroll-m-20 text-xl font-semibold tracking-tight', className)} {...restProps}>
	<slot />
</h3>
