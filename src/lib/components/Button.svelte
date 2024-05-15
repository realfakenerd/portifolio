<script lang="ts">
	import Icon from '@iconify/svelte';
	import type { Snippet } from 'svelte';

	interface Props {
		isLink?: boolean;
		isBlock?: boolean;
		isRoute?: boolean;
		icon?: string;
		href?: string;
		class?: string;
		children: Snippet;
	}

	let {
		isLink = false,
		isBlock = false,
		isRoute = true,
		icon = '',
		href = '',
		class: className,
		children,
		...attributes
	}: Props = $props();

	let element = isLink ? 'a' : 'button';
	const a = {
		href,
		rel: 'noreferrer',
		target: isRoute ? '_self' : '_blank'
	};
</script>

<svelte:element
	this={element}
	{...attributes}
	{...isLink ? a : {}}
	class="btn text-label-large {className}"
	class:icon-left={icon}
	class:w-full={isBlock}
>
	{#if icon}
		<Icon width={18} {icon} />
	{/if}
	{@render children()}
</svelte:element>
