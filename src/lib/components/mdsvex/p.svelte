<script lang="ts">
	import { cn } from '$lib/utils';

	let { class: className = undefined, restProps } = $props<{ class?: string; restProps: any[] }>();
</script>

<p class={cn('leading-7 [&:not(:first-child)]:mt-6', className)} {...restProps}>
	<slot />
</p>
