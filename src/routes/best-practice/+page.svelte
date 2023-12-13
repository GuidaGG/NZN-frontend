<script lang="ts">
	import Page from '$lib/components/Page.svelte';
	import type { PageContents } from '$lib/types';
	import type { PageData } from './$types';
	import DynamicContent from '$lib/components/DynamicContent.svelte';
	import PracticeItem from '$lib/components/PracticeItem.svelte';
	import Pagination from '$lib/components/Pagination.svelte';
	import { getPageParams } from '$lib/utils';
	import { page } from '$app/stores';

	export let data: PageData;

	let pageContent: PageContents = data.practices_page?.pages[0];
	$: practices = data.practices?.bestPractices;
	$: pagination = data.pagination?.pagination;

</script>

<svelte:head>
	<title> Best Practices </title>
</svelte:head>

<Page class="{pageContent.slug} bg-grun-lt" scrollTop>
	<DynamicContent page={pageContent} />
	<div class="flex  p-4 pt-8 flex-col lg:flex-row flex-wrap">
		{#each practices as practice}
			<a href="/best-practice/{practice.slug}?page={getPageParams($page)}" class="w-full lg:w-1/2 p-2 py-4 border-2 border-transparent hover:border-black rounded-xl" >
				<PracticeItem {practice} image/>
			</a>
		{/each}
	</div> 
	<Pagination {pagination} />
</Page>
