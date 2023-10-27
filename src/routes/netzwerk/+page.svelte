<script lang="ts">
	
	import Maintray from '$lib/components/Maintray.svelte';
	import Page from '$lib/components/Page.svelte';
	import Footer from '$lib/components/Footer.svelte';
	import Sidetray from '$lib/components/Sidetray.svelte';
	import Project from '$lib/components/Project.svelte';
	import type { ProjectPreview, Netzwerk } from '$lib/types.js';

	export let data;

  let projects: ProjectPreview[] = data.projects
  let netzwerk: Netzwerk = data.netzwerk
	

</script>

<svelte:head>
	<title> Netzwerk </title>
	<!-- <meta name="description" content="About this app" /> -->
</svelte:head>

<Maintray>
	<div class="bg-black text-white h-80">Here is Map</div>
	<Page>
		<div class="px-2" >
      <h1>{netzwerk.title}</h1>
      <div> { @html netzwerk.content.body}</div>
    </div>
		<div class="flex gap-2 pt-8 flex-col md:flex-row">
			{#each projects as project}
				<Project {project} />
			{/each}
   
		</div> 

	</Page>
	<Footer />
</Maintray>

<Sidetray>
	<div class="p-5">
		<h2> Hello </h2>
		<p> Some information comes here and more </p>
	</div>
	
	<div class="p-5">
		<h2> Why do we use it? </h2>
		<p>
			The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.
		</p>
	</div>
</Sidetray>