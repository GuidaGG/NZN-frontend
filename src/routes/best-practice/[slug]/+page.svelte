<script lang="ts">
	import type { PageData } from './$types';
	import UnderConstruction from '$lib/components/UnderConstruction.svelte';
	
	export let data: PageData;

	$: practice = data.bestPractice.bestPractices[0];
	$: member = data.member;
</script>
<!--
<svelte:head>
	<title> {practice.title}</title>
</svelte:head>
-->
<pre>{JSON.stringify(member, null, 2)}</pre>
<pre>{JSON.stringify(practice, null, 2)}</pre>
<UnderConstruction />

