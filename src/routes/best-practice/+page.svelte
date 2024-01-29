<script lang="ts">
	import Page from '$lib/components/Page.svelte';
	import type { PageContents } from '$lib/types';
	import type { PageData } from './$types';
	import DynamicContent from '$lib/components/DynamicContent.svelte';
	import PracticeItem from '$lib/components/PracticeItem.svelte';
	import Pagination from '$lib/components/Pagination.svelte';
	import { getURLParams } from '$lib/utils';
	import { page } from '$app/stores';
	import { afterNavigate } from "$app/navigation";

	export let data: PageData;

	let pageContent: PageContents = data.practices_page?.pages[0];
	$: practices = data.practices?.bestPractices;
	$: pagination = data.pagination?.pagination;

	let mainArea: HTMLElement;
	afterNavigate(() => {
		if (mainArea && getURLParams($page, 'page')) { 
			mainArea.scrollIntoView();
		}
	});
</script>

<svelte:head>
	<title> Best Practices </title>
</svelte:head>

<Page class="{pageContent.slug} bg-grun-lt" scrollTop>
	<DynamicContent page={pageContent} size="text-base"/>
	<div class="flex  p-4 pt-8 flex-col lg:flex-row flex-wrap" bind:this={mainArea}>
		{#each practices as practice}
			<a href="/best-practice/{practice.slug}?page={getURLParams($page, 'page')}" class="w-full lg:w-1/2 p-2 pt-4 pb-12 border-2 border-transparent hover:border-black rounded-xl">
				<PracticeItem {practice} image/>
			</a>
		{/each}
	</div> 
	<Pagination {pagination} />
</Page>
