<script lang="ts">
	import { formatDate } from '$lib/utils';
	import type { LayoutData } from './$types';

	export let data: LayoutData;

	console.log(data);
</script>

<ul class="flex flex-col gap-2 md:flex-row md:flex-wrap">
	{#each data.posts as post (post.id)}
		<li class="interactive-bg-background flex w-[20rem] flex-col gap-y-2 rounded-xl p-4">
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
						class="h-20 rounded-lg object-cover object-center"
						height="80"
						width="80"
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
