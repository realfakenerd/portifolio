<script lang="ts">
	import { cn } from '$lib/utils';
	import type { Snippet } from 'svelte';
	let {
		class: className = undefined,
		children,
		...restProps
	} = $props<{ class?: string; children: Snippet }>();
</script>

<li class={cn('relative mb-4', className)} {...restProps}>
	{@render children()}
</li>


<style>
	li::before {
		content: '';
		position: absolute;
		left: -16px;
		top: 8px;
		height: 8px;
		width: 8px;
		background-image: url('https://m3.material.io/static/assets/list-bullet-dark.svg');
	}
</style>