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

</script>

<svelte:head>
	<title> Arbeitsmaterialen - Netzwerk Zwischennutzung</title>
	<meta name="description" content="Zwischennutzungen als Lösung für Leerstand und Langeweile – sie ermöglichen den Raum und Platz für neue Ideen und beleben Innenstädte und Quartiere der Post-Corona-Städte. Während Zwischennutzungen eine immer öfter genutzte Lösung für die Herausforderungen des räumlichen Wandels darstellen, sind die dahinterliegenden Strukturen in den meisten Städten und Regionen nicht ausgebaut." />
</svelte:head>

<Page class="{page.slug} bg-oliv-dk">
	<DynamicContent {page} />
</Page>
