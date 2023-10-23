<script lang="ts">
	
	import Maintray from '$lib/components/Maintray.svelte';
	import Page from '$lib/components/Page.svelte';
	import Footer from '$lib/components/Footer.svelte';
	import Sidetray from '$lib/components/Sidetray.svelte';
	
	// import type { PageData } from './$types';
	// export let data: PageData;
</script>

<svelte:head>
	<title> Arbeitsmaterialen </title>
</svelte:head>

<Maintray>
	<Page>
		<h1> ARBEITSMATERIALEN </h1>

	</Page>
	<Footer />
</Maintray>

<Sidetray>
	<div class="p-5">
		<h1> Hello </h1>
		<p> Some information comes here and more </p>
	</div>
	
	<div class="p-5">
		<h1> Why do we use it? </h1>
		<p>
			The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.
		</p>
	</div>
</Sidetray>