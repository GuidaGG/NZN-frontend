<script lang="ts">
	import { page } from '$app/stores';
	import { goto } from '$app/navigation';
	import Page from '$lib/components/Page.svelte';
	import Member from '$lib/components/Member.svelte';
	import type { PageContents } from '$lib/types.js';
	import { onMount } from 'svelte';
	import mapboxgl from 'mapbox-gl';
	import '../../../node_modules/mapbox-gl/dist/mapbox-gl.css';
	import pinIcon from '$lib/images/map-pin.svg';
	import DynamicContent from '$lib/components/DynamicContent.svelte';

	export let data;

	$: members = data.members
	let netzwerk: PageContents = data.netzwerk.pages[0]

	const accessToken = import.meta.env.VITE_MAPBOX_API_TOKEN;
	const initialState = {
		lng: 10.310710,
		lat: 51.046589,
		zoom: 5.5,
		minZoom: 5,
	};

	let nznMap: mapboxgl.Map;

	onMount(() => {
		mapboxgl.accessToken = accessToken;

		nznMap = new mapboxgl.Map({
			container: 'map',
			style: `mapbox://styles/mapbox/streets-v12`,
			center: [initialState.lng, initialState.lat],
			zoom: initialState.zoom,
			minZoom: initialState.minZoom
		});

		members.forEach((member: { longitude: string; latitude: string; slug: string; }) => {
			if(member.longitude && member.latitude){
				const imgElement = document.createElement('img');
				imgElement.src = pinIcon;
				imgElement.style.cursor = 'pointer';
				imgElement.className = 'h-20 w-20'; // tailwind class works here
				
				const location: [number, number] = [parseFloat(member.longitude), parseFloat(member.latitude)];
				const marker = new mapboxgl.Marker(imgElement).setLngLat(location).addTo(nznMap);

				imgElement.addEventListener('click', () => {
					goto(`${$page.url.pathname}/${member.slug}`);
				});
			}
		});
		
	});

</script>

<svelte:head>
	<title> Netzwerk </title>
</svelte:head>

<Page>
	<div id="map" class="h-[55vh]"></div>
	<DynamicContent page={netzwerk} />
	<div class="flex  p-4 pt-8 flex-col lg:flex-row flex-wrap">
		{#each members as member}
			<a href="/netzwerk/{member?.slug}" class="w-full lg:w-1/3 p-2 py-4 border-2 border-transparent hover:border-black rounded-xl" >
				<Member {member} image location/>
			</a>
		{/each}						
	</div> 
</Page>
