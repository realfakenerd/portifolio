<script lang="ts">
	import { cn } from '$lib/utils';
	let { class: className = undefined, restProps } = $props<{ class?: string; restProps: any[] }>();
</script>

<ul class={cn('my-6 ml-6 list-disc', className)} {...restProps}>
	<slot />
</ul>
