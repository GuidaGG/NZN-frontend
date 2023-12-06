<script lang="ts">
	import type { PageData } from './$types';

	export let data: PageData;

	let material = data.practices.bestPractices

</script>

<svelte:head>
	<title> {material.title}</title>
</svelte:head>

<pre>{JSON.stringify(material, null, 2)}</pre>


