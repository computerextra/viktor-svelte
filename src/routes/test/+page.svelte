<script lang="ts">
	const { data } = $props();
</script>

<h1>Hallo</h1>

{#each data.angebote as angeot}
	{angeot.subtitle}
{/each}
