<script lang="ts">
	import Icon from '@iconify/svelte';
	import type { Snippet } from 'svelte';

	let {
		tag = 'div',
		icon = null,
		class: className,
		children,
		...attributes
	} = $props<{
		tag?: 'div' | string;
		icon?: string;
		class?: string;
		children: Snippet
	}>();
</script>

<svelte:element
	this={tag}
	{...attributes}
	class:fill-on-surface-variant={icon}
	class="chips items-center {className}"
>
	<div class="chips-layer" />
	<div class="chips-content inline-flex items-center text-label-medium {icon ? 'pl-2 pr-4' : ''}">
		{#if icon}
			<Icon style="width: 14px; height: 14px;" {icon} />
		{/if}
		<slot />
	</div>
</svelte:element>
