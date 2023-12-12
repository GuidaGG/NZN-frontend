<script lang="ts">
	import Maintray from '$lib/components/Maintray.svelte';
	import Footer from '$lib/components/Footer.svelte';
	import Sidetray from '$lib/components/Sidetray.svelte';
	import PracticeItem from '$lib/components/PracticeItem.svelte';
	import type { PageData } from './$types';

	export let data: PageData;

	let practices = data.practices.bestPractices;
	// console.log(practices);

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
		<p class="p-5 pb-2 border-b border-black">Wir haben Antworten auf folgende Fragen:</p>
		{#each practices as practice}
			<a href="/best-practice/{practice.slug}" class="block text-base hover:bg-grun-lt leading-tight p-5 border-b border-black" >
				<PracticeItem {practice} />
			</a>
		{/each}
	</div>
</Sidetray>