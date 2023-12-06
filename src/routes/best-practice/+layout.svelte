<script lang="ts">
	import Maintray from '$lib/components/Maintray.svelte';
	import Footer from '$lib/components/Footer.svelte';
	import Sidetray from '$lib/components/Sidetray.svelte';
	import type { PageData } from './$types';

	export let data: PageData;

	let practices = data.practices.bestPractices;

</script>

<svelte:head>
	<title> Best Practices </title>
</svelte:head>

<Maintray>
        <slot />
	<Footer />
</Maintray>

<Sidetray>
	<div class="flex flex-col">
		{#each practices as practice}
		<a href="/best-practice/{practice.slug}" class="block text-base hover:bg-grun-lt leading-tight p-5 border-b border-black" >
			{practice.title}
		</a>
		{/each}
	</div>
</Sidetray>