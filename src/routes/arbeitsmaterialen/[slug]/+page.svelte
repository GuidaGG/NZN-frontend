<script lang="ts">
	import type { PageData } from './$types';

	import UnderConstruction from '$lib/components/UnderConstruction.svelte';

	export let data: PageData;

	$: material = data.material.workMaterials[0];

</script>

<svelte:head>
	<title> {material.title} </title>
</svelte:head>

<!-- <div>
	<PdfViewer src="https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf" />
	<pre>{JSON.stringify(material, null, 2)}</pre>
</div> -->

<UnderConstruction />