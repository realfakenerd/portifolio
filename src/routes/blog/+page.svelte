<script lang="ts">
	import { formatDate } from '$lib/utils';
	import type { LayoutData } from './$types';

	export let data: LayoutData;
</script>

<ul class="grid gap-2">
	{#each data.posts as post (post.id)}
		<li class="interactive-bg-background flex flex-col gap-y-2 rounded-xl p-4">
			<div class="flex justify-between">
				<div class="flex flex-col gap-y-2">
					<a class="text-tertiary hover:underline" href={'/blog/' + post.slug}>
						<h1 class="text-title-medium ">
							{post.fm.title}
						</h1>
					</a>

					<section class="flex gap-x-2">
						{#each post.fm.categories as cat}
							<span class="text-label-small hover:underline">#{cat}</span>
						{/each}
					</section>
					<p class="text-body-medium">{post.fm.description}</p>
				</div>
				<figure>
					<img
						class="rounded-lg object-cover object-center"
						height="100"
						width="100"
						src={post.fm.image}
						alt="publication"
					/>
				</figure>
			</div>
			<span class="bg-surface-variant w-fit rounded-lg px-2 py-1">
				<p class="text-label-large">{formatDate(post.fm.date)}</p>
			</span>
		</li>
	{/each}
</ul>

	<style>
		ul.grid {
	grid-template-columns: repeat(auto-fill, minmax(20rem, 1fr));
	}
	</style>
