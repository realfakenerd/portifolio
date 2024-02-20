<script lang="ts">
	import { cn } from '$lib/utils';
	import type { Snippet } from 'svelte';

	let {
		class: className = undefined,
		children,
		...attributes
	} = $props<{ class?: string; children: Snippet }>();
</script>

<section
	{...attributes}
	style="view-transition-name: card;"
	class={cn(
		'card card-filled flex w-full flex-row flex-wrap items-center justify-center md:justify-between',
		className
	)}
>
	{@render children()}
</section>
