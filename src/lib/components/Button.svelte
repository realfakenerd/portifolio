<script lang="ts">
	import Icon from '@iconify/svelte';

	export let isLink = false;
    export let isBlock = false;
	export let isRoute = true;
	export let icon: string | null = null;
	export let href: string | null = null;
	let element = isLink ? 'a' : 'button';

	const a = {
        href,
        rel: 'noreferrer',
        target: isRoute ? '_self' : '_blank'
    };
</script>

<svelte:element
	this={element}
	{...isLink ? a : {}}
	class="btn text-label-large {$$props.class??""}"
	class:icon-left={icon}
    class:w-full={isBlock}
>
	{#if icon}
		<Icon width={18} icon={icon} />
	{/if}
	<slot />
</svelte:element>
