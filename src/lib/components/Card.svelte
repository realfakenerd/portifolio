<script lant="ts">
    export let tag = 'section';
</script>

<svelte:element this={tag} class="card {$$props.class??''}">
<slot/>
</svelte:element>