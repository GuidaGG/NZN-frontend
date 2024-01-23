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
	import Pagination from '$lib/components/Pagination.svelte';
	import { getSortParams, getPageParams } from '$lib/utils.js';
	import { afterNavigate } from "$app/navigation";

	export let data;

	$: members = data.members
	$: pagination = data.pagination.pagination
	$: allMembers = data.allMembers;

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

		allMembers.forEach((member: { longitude: string; latitude: string; slug: string; title: string}) => {
			if(member.longitude && member.latitude){
				const imgElement = document.createElement('img');
				imgElement.src = pinIcon;
				imgElement.style.cursor = 'pointer';
				imgElement.className = 'h-14 w-14 sm:h-20 sm:w-20'; // tailwind class works here
				
				const location: [number, number] = [parseFloat(member.longitude), parseFloat(member.latitude)];
				const marker = new mapboxgl.Marker(imgElement).setLngLat(location).addTo(nznMap);

				const titleElement = document.createElement('div');
				titleElement.className = 'text-center text-sm font-bold';
				titleElement.textContent = member.title;
				const popup = new mapboxgl.Popup({ offset: 36, closeButton: false }).setDOMContent(titleElement);
				marker.setPopup(popup);
				
				imgElement.addEventListener('mouseenter', () => {
					popup.addTo(nznMap);
				});

				imgElement.addEventListener('mouseleave', () => {
					popup.remove();
				});

				imgElement.addEventListener('click', () => {
					goto(`${$page.url.pathname}/${member.slug}`);
				});
			}
		});
		
	});

	let mainArea: HTMLElement;
	afterNavigate(() => {
		if (mainArea && getPageParams($page)) { 
			mainArea.scrollIntoView();
		}
	});
</script>

<svelte:head>
	<title> Netzwerk </title>
</svelte:head>

<Page>
	<div id="map" class="h-[45vh] sm:h-[50vh]"></div>
	<DynamicContent page={netzwerk} size="text-base"/>
	<div class="flex  p-4 pt-8 flex-col lg:flex-row flex-wrap scroll-mt-20" bind:this={mainArea}>
		{#each members as member}
			<a href="/netzwerk/{member?.slug}?page={getPageParams($page)}&sort={getSortParams($page)}" class="w-full lg:w-1/3 p-2 py-4 border-2 border-transparent hover:border-black rounded-xl" >
				<Member {member} image location/>
			</a>
		{/each}			
	</div> 
	<Pagination {pagination} />
</Page>
