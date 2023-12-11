<script lang="ts">
	import type { PageData } from './$types';
	import UnderConstruction from '$lib/components/UnderConstruction.svelte';
	
	export let data: PageData;

	let material = data.practices.bestPractices

</script>

<svelte:head>
	<title> {material.title}</title>
</svelte:head>

<UnderConstruction />

