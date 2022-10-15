<script>
	export let reverse = false;
</script>

<section class="hero min-h-[70vh] backdrop-blur-sm">
	<div class="hero-overlay opacity-50 md:rounded-box" />
	<div class="hero-content flex-col gap-10 {reverse ? 'lg:flex-row-reverse' : ''}">
		<slot />
	</div>
</section>
