	<script lang="ts">
		// import welcome from '$lib/images/svelte-welcome.webp';
		// import welcome_fallback from '$lib/images/svelte-welcome.png';
		import Maintray from '$lib/components/Maintray.svelte';
		import Page from '$lib/components/Page.svelte';
		import Sidetray from '$lib/components/Sidetray.svelte';
		import Footer from '$lib/components/Footer.svelte';
		
		import type { PageData } from './$types';
		export let data: PageData;

		console.log(data);
		

	</script>


	<svelte:head>
		<title> NZN </title>
		<meta name="NZN" content="website for netzwerkzwischennutzung" />
	</svelte:head>


	<Maintray>
		<Page>
			<h1> HOME PAGE </h1>

			<!-- <ul>
				{#each selectedProjects as project (project.id)}
					<li>
						<p>ID: {project.id}</p>
						<p>Info: {project.info}</p>
						<p>Title: {project.title}</p>
					</li>
				{/each}
			</ul> -->

			<div>
				<p>
					Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
				</p>
			</div>
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