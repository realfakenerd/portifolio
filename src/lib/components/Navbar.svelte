<script>
	import { onMount } from 'svelte';
	import { fly } from 'svelte/transition';
	import { backOut } from 'svelte/easing';
	const links = ['about', 'contact', 'projects'];
	let init = false;
	onMount(() => {
		init = true;
	});
</script>

<div class="navbar backdrop-blur-sm">
	<div class="flex-1">
		<a href="/" class="btn btn-ghost normal-case text-xl">Home</a>
	</div>
	<div class="flex-none">
		<nav>
			{#if init}
				{#each links as l, i (i)}
					<a
						in:fly={{ delay: 100 * i, easing: backOut, y: 100 }}
						class="btn btn-ghost gap-3"
						href={'/' + l}
					>
						<span>
							{l}
						</span>
					</a>
				{/each}
			{/if}
		</nav>
	</div>
</div>
