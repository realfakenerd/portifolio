<script lang="ts">
	import { page } from '$app/stores';
</script>

<div>
	<h1 class="text-display-large">{$page.status}</h1>
	<h2 class="text-headline-large">{$page.error?.message}</h2>
</div>
