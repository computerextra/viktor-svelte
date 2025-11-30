<script lang="ts">
	const { data } = $props();
</script>

<h1>Welcome to SvelteKit</h1>
<p>Visit <a href="https://svelte.dev/docs/kit">svelte.dev/docs/kit</a> to read the documentation</p>

{#each data.angebote as angebot (angebot.id)}
	<ul>
		<li>{angebot.title}</li>
	</ul>
{/each}
