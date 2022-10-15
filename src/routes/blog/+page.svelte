<script lang="ts">
	import type { LayoutData } from './$types';

	export let data: LayoutData;
	const articles = data.posts;
</script>

<section class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
	{#each articles as article (article.slug)}
		<a
			href={'/blog/' + article.url}
			data-sveltekit-prefetch
			class="card w-full card-compact max-w-md bg-base-100 shadow-lg shadow-orange-900/20 hover:shadow-orange-900/50 transition"
		>
			<figure>
				<img style:--tag={'post'+article.slug} height="203" class="bg-base-300" src={article.featured_image} alt={article.featured_image_alt} />
			</figure>
			<div class="card-body">
				<h1 style:--tag={'title' + article.slug} class="card-title">
					{article.title}
				</h1>
				<div class="inline-flex gap-1">
					{#each article.tags as tag}
						<span class="badge">{tag.name}</span>
					{/each}
				</div>
				<h3 class="text-sm italic">{article.published}</h3>
				<p>{article.summary}</p>
			</div>
		</a>
	{/each}
</section>
