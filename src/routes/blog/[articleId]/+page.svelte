<script lang="ts">
	import type { PageData } from './$types';
	export let data: PageData;
</script>

<svelte:head>
	<title>{data.block.data.title}</title>
	<meta name="description" content={data.block.data.meta_description} />
	<meta name="author" content={data.block.data.author.first_name} />
</svelte:head>

<article class="prose-lg md:prose">
    <figure>
        <img
            class="post-image"
            style:--tag={'post' + data.block.data.slug}
            src={data.block.data.featured_image}
            alt={data.block.data.featured_image_alt}
        />
    </figure>
    <h1 style:--tag={'title' + data.block.data.slug} class="text-2xl">{data.block.data.title}</h1>
    <section>
        {@html data.block.data.body}
    </section>
</article>
