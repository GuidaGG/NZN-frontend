<script lang="ts">
	import Page from '$lib/components/Page.svelte';
	import type { PageContents } from '$lib/types';
	import type { PageData } from './$types';
	import DynamicContent from '$lib/components/DynamicContent.svelte';
	import PracticeItem from '$lib/components/PracticeItem.svelte';

	export let data: PageData;

	let page: PageContents = data.practices_page.pages[0];
	let practices = data.practices.bestPractices;

</script>

<svelte:head>
	<title> Best Practices </title>
</svelte:head>

<Page class="{page.slug} bg-grun-lt">
	<DynamicContent {page} />
	<div class="flex  p-4 pt-8 flex-col lg:flex-row flex-wrap">
		{#each practices as practice}
			<a href="/best-practice/{practice.slug}" class="w-full lg:w-1/2 p-2 py-4 border-2 border-transparent hover:border-black rounded-xl" >
				<PracticeItem {practice} image/>
			</a>
		{/each}
	</div> 
</Page>

<!-- <pre>{JSON.stringify(practices, null, 2)}</pre> -->