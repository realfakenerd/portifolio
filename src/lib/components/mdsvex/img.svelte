<script lang="ts">
	import { cn } from '$lib/utils';
	import type { HTMLImgAttributes } from 'svelte/elements';

	let {
		class: className = undefined,
		src = undefined,
		alt = undefined
	} = $props<{ class?: string; src: HTMLImgAttributes['src']; alt: HTMLImgAttributes['alt'] }>();
</script>

<figure class="py-2">
	<img {src} {alt} class={cn('rounded-md', className)} />
</figure>
