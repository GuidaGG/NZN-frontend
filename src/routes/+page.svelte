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
	<meta name="description" content="Zwischennutzungen als Lösung für Leerstand und Langeweile – sie ermöglichen den Raum und Platz für neue Ideen und beleben Innenstädte und Quartiere der Post-Corona-Städte. Während Zwischennutzungen eine immer öfter genutzte Lösung für die Herausforderungen des räumlichen Wandels darstellen, sind die dahinterliegenden Strukturen in den meisten Städten und Regionen nicht ausgebaut. " />
</svelte:head>


<Maintray>
	<Page class="bg-lime-dk">
		<DynamicContent page={homepage}/>
	</Page>
	<Footer />
</Maintray>

<Sidetray>
	<div class="flex flex-col">
		{#each news as newsItem}
			<Sidenews {newsItem} />
		{/each}
	</div>
</Sidetray>