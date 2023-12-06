<script lang="ts">
	import Maintray from '$lib/components/Maintray.svelte';
	import Page from '$lib/components/Page.svelte';
	import Footer from '$lib/components/Footer.svelte';
	import Sidetray from '$lib/components/Sidetray.svelte';
	import type { PageContents } from '$lib/types';
	import type { PageData } from './$types';


	export let data: PageData;

	let materials = data.materials.workMaterials;

</script>

<svelte:head>
	<title> Arbeitsmaterialen </title>
</svelte:head>

<Maintray>
        <slot />
	<Footer />
</Maintray>

<Sidetray>
	<div class="flex flex-col">
		{#each materials as material}
		<a href="/arbeitsmaterialen/{material.slug}" class="block text-base hover:bg-oliv-dk leading-tight p-5 border-b border-black" >
			{material.title}
		</a>
		{/each}
	</div>
</Sidetray>