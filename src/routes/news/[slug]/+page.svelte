<script lang="ts">
	
	import Maintray from '$lib/components/Maintray.svelte';
	import Page from '$lib/components/Page.svelte';
	import Footer from '$lib/components/Footer.svelte';
	import Sidetray from '$lib/components/Sidetray.svelte';
	import UnderConstruction from '$lib/components/UnderConstruction.svelte';
	
	export let data;
</script>

<svelte:head>
	<title> {data.slug}</title>
</svelte:head>

<Maintray>
	<Page>
		<UnderConstruction url="/netzwerk" />
	</Page>
	<Footer />
</Maintray>

<Sidetray>
	
</Sidetray>