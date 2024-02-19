<script lang="ts">
	let {
		class: className = '',
		lines = 1,
		heading = null,
		description = null
	} = $props<{
		class?: string;
		lines?: 1 | 2 | 3;
		heading?: string;
		description?: string;
	}>();
</script>

<li
	class="item items-center {className}"
	class:list-lines-1={lines === 1}
	class:list-lines-2={lines === 2}
	class:list-lines-3={lines === 3}
>
	<div class="item-body">
		{#if heading}
			<h2 class="list-heading">{heading}</h2>
		{/if}
		{#if description}
			<p class="list-description">{description}</p>
		{/if}
		<slot />
	</div>
</li>
