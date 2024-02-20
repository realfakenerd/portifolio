<script lang="ts">
	import { cn } from '$lib/utils';
	import type { Snippet } from 'svelte';

	let codeString = $state('');

	function copyCodeToClipboard(node: HTMLPreElement) {
		codeString = node.innerText.trim() ?? '';
	}

	let {
		class: className,
		children,
		...restProps
	} = $props<{ class?: string; children: Snippet }>();	
</script>

<pre
	use:copyCodeToClipboard
	class={cn('bg-error-light-hover mb-4 mt-6 max-h-[650px] overflow-x-auto rounded-lg border py-4', className)}
	{...restProps}>
	{@render children()}
</pre>
