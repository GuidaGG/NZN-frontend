<script lang="ts">
	
	import Maintray from '$lib/components/Maintray.svelte';
	import Page from '$lib/components/Page.svelte';
	import Footer from '$lib/components/Footer.svelte';
	import Sidetray from '$lib/components/Sidetray.svelte';
	import UnderConstruction from '$lib/components/UnderConstruction.svelte';
	
</script>

<svelte:head>
	<title>Anmeldung Netzwerk</title>
</svelte:head>

<Maintray>
	<Page>
		<UnderConstruction />
	</Page>
	<Footer />
</Maintray>

<Sidetray>
	<div class="p-5">
		
	</div>
</Sidetray>