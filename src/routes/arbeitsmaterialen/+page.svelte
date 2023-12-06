<script lang="ts">
	
	import Maintray from '$lib/components/Maintray.svelte';
	import Page from '$lib/components/Page.svelte';
	import Footer from '$lib/components/Footer.svelte';
	import Sidetray from '$lib/components/Sidetray.svelte';
	import type { PageContents } from '$lib/types';
	import type { PageData } from './$types';
	import DynamicContent from '$lib/components/DynamicContent.svelte';

	export let data: PageData;

	let page: PageContents = data.materials_page.pages[0];
	let materials = data.materials.workMaterials;

</script>

<svelte:head>
	<title> Arbeitsmaterialen </title>
</svelte:head>

<Maintray>
	<Page class="{page.slug} bg-oliv-dk">
		<DynamicContent {page} />
	</Page>
	<Footer />
</Maintray>

<Sidetray>
	<div class="flex flex-col">
		{#each materials as material}
		<a href="/arbeitsmaterialen/{material.slug}" class="block text-base hover:bg-oliv-dk leading-tight p-5 hover:bg--dk border-b border-black" >
			{material.title}
		</a>
		{/each}
	</div>
</Sidetray>