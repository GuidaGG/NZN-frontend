<script lang="ts">
	import Maintray from '$lib/components/Maintray.svelte';
	import Page from '$lib/components/Page.svelte';
	import Sidetray from '$lib/components/Sidetray.svelte';
	import Footer from '$lib/components/Footer.svelte';
	import Sidenews from '$lib/components/Sidenews.svelte';
	import type { PageContents } from '$lib/types';
	import DynamicContent from '$lib/components/DynamicContent.svelte';
	
	export let data;

	let homepage: PageContents = data.homepage.pages[0];
	let news = data.news;

</script>


<svelte:head>
	<title> NZN </title>
	<meta name="NZN" content="website for netzwerkzwischennutzung" />
</svelte:head>


<Maintray>
	<Page>
		<DynamicContent page={homepage}/>
	</Page>
	<!-- stupid temporary fix for mobile - remove later -->
	<Footer class="hidden sm:flex"/>
</Maintray>

<Sidetray>
	<div class="flex flex-col">
		{#each news as newsItem}
			<Sidenews {newsItem} />
		{/each}
	</div>
</Sidetray>
<!-- stupid temporary fix for mobile - remove later -->
<Footer class="block sm:hidden"/>