<script lang="ts">
	import { cn } from '$lib/utils';
	import type { Snippet } from 'svelte';

	let { class: className = undefined, children,...restProps } = $props<{ class?: string; children: Snippet }>();
</script>

<ol class={cn('my-3 pl-8 list-decimal', className)} {...restProps}>
	{@render children()}
</ol>
