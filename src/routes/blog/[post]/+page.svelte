<script>
	const {
		data
	} = $props();

</script>

<section class="flex flex-col pt-20 px-6">
	<div bind:this={data.post.default}></div>
</section>