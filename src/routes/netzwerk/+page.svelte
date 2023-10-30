<script lang="ts">
	import { page } from '$app/stores';
	import { goto } from '$app/navigation';
	import Maintray from '$lib/components/Maintray.svelte';
	import Page from '$lib/components/Page.svelte';
	import Footer from '$lib/components/Footer.svelte';
	import Sidetray from '$lib/components/Sidetray.svelte';
	import Member from '$lib/components/Member.svelte';
	import type {  Netzwerk } from '$lib/types.js';

	import RadioBox from '$lib/components/RadioBox.svelte';

	export let data;

	$: members = data.members
	let netzwerk: Netzwerk = data.netzwerk

	let selected = "description"
	
	function sort(){
			let query = new URLSearchParams($page.url.searchParams.toString());
			query.set('sort', selected);	
			goto(`?${query.toString()}`);
	}

</script>

<svelte:head>
	<title> Netzwerk </title>
	<!-- <meta name="description" content="About this app" /> -->
</svelte:head>

<Maintray>
	<div class="bg-black text-white h-80">Here is Map</div>
	<Page>
		<div class="px-2" >
		<h1>{netzwerk.content.title}</h1>
		<div class="text-xl"> { @html netzwerk.content.body}</div>
		</div>
		<div class="flex gap-2 pt-8 flex-col lg:flex-row">
			{#each members as member}
				<a href="/netwerk/{member?.slug}" class="w-full lg:w-1/3 p-2 py-4 border-2 border-transparent hover:border-black rounded-xl font-semibold" >
					<Member {member} image location/>
				</a>
			{/each}
   
		</div> 

	</Page>
	<Footer />
</Maintray>

<Sidetray>
	<div class="p-5">
		<h4 class="pb-10">Sortieren nach</h4>
		<form on:change={sort} class="flex gap-4">
			<RadioBox name="sort" value="description" label="Zufällig" bind:selected />
			<RadioBox name="sort" value="title" label="A-Z" bind:selected  />
			<RadioBox name="sort" value="publishedAt" label="Neuste" bind:selected  />
		</form>
	</div>
	
	<div class="flex flex-col">
		{#each members as member}
			<a href="/netwerk/{member.slug}" class="p-5 hover:bg-grun-dk" >
				<Member {member}  />
			</a>
		{/each}
	</div>
</Sidetray>