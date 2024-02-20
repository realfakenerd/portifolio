<script lang="ts">
	import { cn } from '$lib/utils';
	let { class: className = undefined, restProps } = $props<{ class?: string; restProps: any[] }>();
</script>

<div class="my-6 w-full overflow-y-auto">
	<table class={cn('w-full', className)} {...restProps}>
		<slot />
	</table>
</div>
