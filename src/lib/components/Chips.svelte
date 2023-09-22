<script lang="ts">
	import Icon from '@iconify/svelte';

	export let tag = 'div';
	export let icon: null | string = null;
</script>

<svelte:element this={tag} class:fill-on-surface-variant={icon} class="chips items-center {$$props.class??''}">
	<div class="chips-layer" />
	<div class="chips-content items-center inline-flex text-label-medium {icon ? 'pl-2 pr-4' : ''}">
		{#if icon}
			<Icon style="width: 14px; height: 14px;" icon={icon} />
		{/if}
		<slot />
	</div>
</svelte:element>
