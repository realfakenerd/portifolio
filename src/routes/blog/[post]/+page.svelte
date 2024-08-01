<script>
	let {
		data
	} = $props();

</script>

<section class="flex flex-col pt-20 px-6">
	<svelte:component this={data.post.default}/>
</section>