<script lang="ts">
	import Icon from './Icon.svelte';

	export let tag = 'div';
	export let icon: null | string = null;
</script>

<svelte:element this={tag} class:fill-on-surface-variant={icon} class="chips items-center">
	<div class="chips-layer" />
	<div class="chips-content inline-flex {icon ? 'pl-2 pr-4' : ''}">
		{#if icon}
			<Icon width={18} d={icon} />
		{/if}
		<slot />
	</div>
</svelte:element>
