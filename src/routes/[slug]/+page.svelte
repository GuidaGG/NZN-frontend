<script lang="ts">
	import Maintray from '$lib/components/Maintray.svelte';
	import Page from '$lib/components/Page.svelte';
	import Sidetray from '$lib/components/Sidetray.svelte';
	import Footer from '$lib/components/Footer.svelte';
	import DynamicContent from '$lib/components/DynamicContent.svelte';
	
	export let data;

	$: page = data.page.pages[0];


</script>


<svelte:head>
	<title> {page.title}</title>
	<meta name="NZN" content="website for netzwerkzwischennutzung" />
</svelte:head>


<Maintray>
	<Page class="pt-5 {page.slug}">
		<DynamicContent {page} size="text-base"/>
	</Page>

	<Footer />
</Maintray>

<Sidetray>
	
</Sidetray>