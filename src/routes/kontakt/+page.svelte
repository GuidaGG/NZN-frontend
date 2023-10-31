<script lang="ts">
	
	import Maintray from '$lib/components/Maintray.svelte';
	import Page from '$lib/components/Page.svelte';
	import Footer from '$lib/components/Footer.svelte';
	import Sidetray from '$lib/components/Sidetray.svelte';
	import UnderConstruction from '$lib/components/UnderConstruction.svelte';
	
	// import type { PageData } from './$types';
	// export let data: PageData;
</script>

<svelte:head>
	<title> Kontakt </title>
</svelte:head>

<Maintray>
	<Page>
		<UnderConstruction />
	</Page>
	<Footer />
</Maintray>

<Sidetray>
	
</Sidetray>