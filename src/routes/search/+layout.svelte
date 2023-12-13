<script lang="ts">
	import { page } from '$app/stores';
	import { goto } from '$app/navigation';
	import Maintray from '$lib/components/Maintray.svelte';
	import Footer from '$lib/components/Footer.svelte';
	import Sidetray from '$lib/components/Sidetray.svelte';
	import Member from '$lib/components/Member.svelte';
	import RadioBox from '$lib/components/RadioBox.svelte';
	import '../../../node_modules/mapbox-gl/dist/mapbox-gl.css';
	import { getPageParams, getSortParams } from '$lib/utils.js';

	export let data;

	$: allMembers = data.allMembers;

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


</Sidetray>