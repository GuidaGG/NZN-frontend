<script lang="ts">
	import Page from '$lib/components/Page.svelte';
	import type { PageContents } from '$lib/types';
	import type { PageData } from './$types';
	import DynamicContent from '$lib/components/DynamicContent.svelte';

	export let data: PageData;

	let page: PageContents = data.practices_page.pages[0];
	let practices = data.practices
</script>

<svelte:head>
	<title> Best Practices </title>
</svelte:head>

<Page class="{page.slug} bg-grun-lt">
	<DynamicContent {page} />
</Page>

<pre>{JSON.stringify(practices, null, 2)}</pre>