<script lang="ts">
	
	import Maintray from '$lib/components/Maintray.svelte';
	import Page from '$lib/components/Page.svelte';
	import Footer from '$lib/components/Footer.svelte';
	import Sidetray from '$lib/components/Sidetray.svelte';
	import type { PageContents } from '$lib/types';
	import type { PageData } from './$types';
	import DynamicContent from '$lib/components/DynamicContent.svelte';

	export let data: PageData;

	let material = data.material.workMaterials[0];

</script>

<svelte:head>
	<title> {material.title}</title>
</svelte:head>

<pre>{JSON.stringify(material, null, 2)}</pre>


