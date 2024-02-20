<script lang="ts">
	import { page } from '$app/stores';
	import { cn } from '$lib/utils';
	import { melt, type TableOfContentsElements, type TableOfContentsItem } from '@melt-ui/svelte';

	let {
		tree = [],
		activeHeadingIdxs,
		item,
		level = 1
	} = $props<{
		tree?: TableOfContentsItem[];
		activeHeadingIdxs?: number[];
		item: TableOfContentsElements['item'];
		level?: number;
	}>();
</script>

<ul class={cn('m-0 list-none', { 'pl-4': level !== 1 })}>
	{#if tree && tree.length}
		{#each tree as heading, i (i)}
			<li class={cn('mt-0 pt-2')}>
				<a
					href="#{heading.id}"
					use:melt={$item(heading.id)}
					class={cn(
						`w-full rounded-full px-4 py-1 capitalize 
						text-on-surface-variant/70 ring-primary transition-all 
						hover:ring-2 hover:text-on-surface data-[active]:hover:ring-2`
					)}
				>
					{@html heading.node.innerHTML}
				</a>
				{#if heading.children && heading.children.length}
					<svelte:self tree={heading.children} level={level + 1} {activeHeadingIdxs} {item} />
				{/if}
			</li>
		{/each}
	{/if}
</ul>

<style lang="postcss">
	[data-active] {
		--tw-ring-offset-shadow: var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width)
			var(--tw-ring-offset-color);
		--tw-ring-shadow: var(--tw-ring-inset) 0 0 0 calc(1px + var(--tw-ring-offset-width))
			var(--tw-ring-color);
		box-shadow: var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow, 0 0 #0000);
		font-weight: 500;
		color: theme(colors.on-surface);
	}
</style>
