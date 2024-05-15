<script lang="ts">
	import { cn } from '$lib/utils';
	import type { Snippet } from 'svelte';

	interface Props {
		class?: string;
		children: Snippet;
	}

	let { class: className = undefined, children, ...attributes }: Props = $props();
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
