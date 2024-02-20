<script lang="ts">
	import { cn } from '$lib/utils';

	let { class: className = undefined, restProps } = $props<{ class?: string; restProps: any[] }>();
</script>

<ol class={cn('my-6 ml-6 list-decimal', className)} {...restProps}>
	<slot />
</ol>
