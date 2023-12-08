<script lang="ts">
	import { page } from '$app/stores';
	import { goto } from '$app/navigation';
	import Maintray from '$lib/components/Maintray.svelte';
	import Footer from '$lib/components/Footer.svelte';
	import Sidetray from '$lib/components/Sidetray.svelte';
	import Member from '$lib/components/Member.svelte';
	import RadioBox from '$lib/components/RadioBox.svelte';

	import '../../../node_modules/mapbox-gl/dist/mapbox-gl.css';


	export let data;

	$: members = data.members
	$: pagination = data.pagination

	let selected = "description"

	function sort(){
			let query = new URLSearchParams($page.url.searchParams.toString());
			query.set('sort', selected);	
			goto(`?${query.toString()}`);
	}

</script>

<svelte:head>
	<title> Netzwerk </title>
</svelte:head>


<Maintray>
		<slot />
	<Footer />
</Maintray>

<Sidetray>
	<div class="p-5">
		<h4 class="pb-6">Sortieren nach</h4>
		<form on:change={sort} class="flex gap-4">
			<RadioBox name="sort" value="description" label="Zufällig" bind:selected />
			<RadioBox name="sort" value="title" label="A-Z" bind:selected  />
			<RadioBox name="sort" value="publishedAt" label="Neuste" bind:selected  />
		</form>
	</div>
	
	<div class="flex flex-col">
		{#each members as member}
			<a href="/netzwerk/{member.slug}" class="p-5 hover:bg-grun-dk" >
				<Member {member}  />
			</a>
		{/each}
		
	</div>

</Sidetray>