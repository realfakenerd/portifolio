<script lang="ts">
	import { formatDate } from '$lib/utils';
	import type { LayoutData } from './$types';

	export let data: LayoutData;

	console.log(data);
</script>

<ul class="flex flex-col md:flex-row md:flex-wrap gap-2">
	{#each data.posts as post (post.id)}
		<li class="p-4 w-[20rem] flex flex-col gap-y-2 rounded-xl interactive-bg-background">
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
						class="rounded-lg object-center object-cover h-20"
						height="80"
						width="80"
						src={post.fm.image}
						alt="publication"
					/>
				</figure>
			</div>
			<span class="py-1 px-2 bg-surface-variant rounded-lg w-fit">
				<p class="text-label-large">{formatDate(post.fm.date)}</p>
			</span>
		</li>
	{/each}
</ul>
