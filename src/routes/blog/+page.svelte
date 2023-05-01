<script lang="ts">
	import type { LayoutData } from './$types';

	export let data: LayoutData;
	const { posts } = data;
</script>

<section class="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-4">
	{#each posts.articles as article, index (article.id)}
		<a
			href={'/blog/' + article.article_name}
			class="card card-compact w-full max-w-md bg-base-100 shadow-lg shadow-orange-900/20 transition hover:shadow-orange-900/50"
		>
			<div class="card-body">
				<h1 class="card-title">
					{article.article_name}
				</h1>
				<h3 class="text-sm italic">{article.summary}</h3>
			</div>
		</a>
	{/each}
</section>
