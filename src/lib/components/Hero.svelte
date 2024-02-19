<script lang="ts">
	import type { Snippet } from "svelte";

	let { class: className = undefined, children, ...attributes } = $props<{ class?: string; children: Snippet }>();
</script>

<section
	{...attributes}
	style="view-transition-name: card;"
	class="card card-filled flex w-full flex-row flex-wrap items-center justify-center md:justify-between {className}"
>
	{@render children()}
</section>
