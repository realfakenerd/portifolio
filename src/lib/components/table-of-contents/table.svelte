<script lang="ts">
	import Tree from './tree.svelte';
	import { createTableOfContents } from '@melt-ui/svelte';

	const {
		elements: { item },
		states: { activeHeadingIdxs, headingsTree }
	} = createTableOfContents({
		selector: '#mdsvex',
		activeType: 'all',
		scrollOffset: 90
	});
</script>

<div class="sticky top-[136px] w-[inherit]">
	<p class="text-label-small">Nesta Pagina</p>
	<nav>
		{#key $headingsTree}
			<Tree tree={$headingsTree} activeHeadingIdxs={$activeHeadingIdxs} {item} />
		{/key}
	</nav>
</div>
