<script>
	import { onMount } from 'svelte';
	import { fly } from 'svelte/transition';
	import { backOut } from 'svelte/easing';
	
	import { page } from '$app/stores';
	import Icon from './Icon.svelte';
	
	const links = [
		{
			url: 'sobre',
			d: 'M12 9v3.75m9-.75a9 9 0 11-18 0 9 9 0 0118 0zm-9 3.75h.008v.008H12v-.008z'
		},
		{
			url: 'contato',
			d: 'M10.5 1.5H8.25A2.25 2.25 0 006 3.75v16.5a2.25 2.25 0 002.25 2.25h7.5A2.25 2.25 0 0018 20.25V3.75a2.25 2.25 0 00-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3'
		},
		{
			url: 'projetos',
			d: 'M20.25 14.15v4.25c0 1.094-.787 2.036-1.872 2.18-2.087.277-4.216.42-6.378.42s-4.291-.143-6.378-.42c-1.085-.144-1.872-1.086-1.872-2.18v-4.25m16.5 0a2.18 2.18 0 00.75-1.661V8.706c0-1.081-.768-2.015-1.837-2.175a48.114 48.114 0 00-3.413-.387m4.5 8.006c-.194.165-.42.295-.673.38A23.978 23.978 0 0112 15.75c-2.648 0-5.195-.429-7.577-1.22a2.016 2.016 0 01-.673-.38m0 0A2.18 2.18 0 013 12.489V8.706c0-1.081.768-2.015 1.837-2.175a48.111 48.111 0 013.413-.387m7.5 0V5.25A2.25 2.25 0 0013.5 3h-3a2.25 2.25 0 00-2.25 2.25v.894m7.5 0a48.667 48.667 0 00-7.5 0M12 12.75h.008v.008H12v-.008z'
		},
		{
			url: 'blog',
			d: 'M12 7.5h1.5m-1.5 3h1.5m-7.5 3h7.5m-7.5 3h7.5m3-9h3.375c.621 0 1.125.504 1.125 1.125V18a2.25 2.25 0 01-2.25 2.25M16.5 7.5V18a2.25 2.25 0 002.25 2.25M16.5 7.5V4.875c0-.621-.504-1.125-1.125-1.125H4.125C3.504 3.75 3 4.254 3 4.875V18a2.25 2.25 0 002.25 2.25h13.5M6 7.5h3v3H6v-3z'
		}
	];
	let init = false;

	onMount(() => {
		init = true;
	});
</script>

<div class="navbar bg-base-300 relative rounded-none md:rounded-box z-10">
	<div class="flex-1">
		<a href="/" class="btn btn-ghost gap-3 text-xl normal-case">
			<Icon d={'M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25'}/>
			<span>
				Home
			</span>
		</a>
	</div>
	<div class="flex-none">
		<nav class="hidden md:block">
			{#if init}
				{#each links as l, i (i)}
					<a
						data-sveltekit-prefetch
						in:fly={{ delay: 100 * i, easing: backOut, y: 100 }}
						class="btn btn-ghost gap-3 {$page.routeId === l.url ? 'text-orange-400' : ''}"
						href={'/' + l.url}
					>
						<Icon d={l.d} />
						<span>
							{l.url}
						</span>
					</a>
				{/each}
			{/if}
		</nav>
		<div class="flex items-center gap-4">
			<div class="block md:hidden">
				<div class="dropdown dropdown-end">
					<!-- svelte-ignore a11y-label-has-associated-control -->
					<label tabindex="0" class="btn btn-ghost rounded-btn">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							fill="none"
							viewBox="0 0 24 24"
							stroke-width="1.5"
							stroke="currentColor"
							class="w-6 h-6"
						>
							<path
								stroke-linecap="round"
								stroke-linejoin="round"
								d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
							/>
						</svg>
					</label>

					<nav>
						<ul
							tabindex="0"
							class="menu dropdown-content p-2 shadow bg-base-300 rounded-box w-52 mt-4"
						>
							{#each links as link}
								<li>
									<a
										data-sveltekit-prefetch
										class="capitalize {$page.routeId === link.url ? 'active bg-orange-400' : ''}"
										href={"/"+link.url}
									>
										<Icon d={link.d} />
										<span>
											{link.url}
										</span>
									</a>
								</li>
							{/each}
						</ul>
					</nav>
				</div>
			</div>
		</div>
	</div>
</div>
