<script lang="ts">
	import type { PageData } from './$types';
	export let data: PageData;

	const { article } = data;
</script>

<svelte:head>
	<title>Blog - {article.title}</title>
	<meta name="description" content={article.seo.meta_description} />
	<meta name="title" content={article.seo.seo_title} />
</svelte:head>

<article class="prose-lg md:prose">
	<figure class="[&>img]:rounded-lg relative group">
		<img width="560" height="370" class="relative z-10" src={article.image.url} alt={article.image.alt} />
		<img width="560" height="370"
			class="
                absolute top-1 transition duration-500 left-0 z-0
                filter blur-lg saturate-100 group-hover:saturate-200 group-hover:blur-xl group-hover:scale-105
            "
			src={article.image.url}
			alt={article.image.alt}
		/>
	</figure>
	<h1 class="text-2xl">{article.title}</h1>
	<section>
		{@html article.body}
	</section>
	<section class="grid grid-row-2 md:grid-cols-2 place-items-center">
        {#if article.nextPost?.title}
			<a class="flex gap-2 items-center" href={'/blog/' + article.nextPost?.slug}>
				<figure>
					<img width="80" height="40" class="w-20 rounded-lg" src={article.nextPost?.image} alt="next post" />
				</figure>
				<div class="flex flex-col bg-base-300 p-2 rounded-lg">
					<div class="text-xs uppercase font-semibold">post anterior</div>
					<div class="text-xs font-normal">{article.nextPost?.title}</div>
				</div>
			</a>
		{/if}
        {#if article.previousPost?.title}
			<a class="flex gap-2 items-center" href={'/blog/' + article.previousPost?.slug}>
				<figure>
					<img width="80" height="40" class="w-20 rounded-lg" src={article.previousPost?.image} alt="next post" />
				</figure>
				<div class="flex flex-col bg-base-300 p-2 rounded-lg">
					<div class="text-xs uppercase font-semibold">proximo post</div>
					<div class="text-xs font-normal">{article.previousPost?.title}</div>
				</div>
			</a>
		{/if}
		
		<section />
	</section>
</article>
