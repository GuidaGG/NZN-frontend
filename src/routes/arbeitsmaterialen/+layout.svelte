<script lang="ts">
	import Maintray from '$lib/components/Maintray.svelte';
	// import Page from '$lib/components/Page.svelte';
	import Footer from '$lib/components/Footer.svelte';
	import Sidetray from '$lib/components/Sidetray.svelte';
	// import type { PageContents } from '$lib/types';
	import type { PageData } from './$types';
	import MaterialItem from '$lib/components/MaterialItem.svelte';
	import type { MaterialPreview } from "$lib/types";

	export let data: PageData;

	let materials = data.materials.workMaterials;

	let categoryGroups: Record<string, MaterialPreview[]> = materials.reduce((acc: any, material: MaterialPreview) => {
		let category = material.category.value;
		if (!acc[category]) {
			acc[category] = [];
		}
		acc[category].push(material);
		return acc;
	}, {});

</script>

<svelte:head>
	<title> Arbeitsmaterialen </title>
</svelte:head>

<Maintray>
  <slot />
	<Footer />
</Maintray>

<Sidetray>
	<div class="flex flex-col">
		<p class="p-5 pb-2 border-b border-black"> Verzeichnis </p>
		{#each Object.entries(categoryGroups) as [title, materialGroup], index}
			<!-- <h1>{title}</h1> -->
			<MaterialItem {materialGroup} {index} />
		{/each}
	</div>
</Sidetray>