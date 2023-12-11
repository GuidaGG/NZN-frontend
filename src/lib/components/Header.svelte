<script lang="ts">
	import { page } from '$app/stores';
	import Logo from './Logo.svelte';
	import bmwsb from '$lib/images/BMWSB.png';
	import aaalogo from '$lib/images/aaa-logo-bw.svg';
	import ArrowRight from 'svelte-feathers/ArrowRight.svelte';
	import Fhb from './FHB.svelte';
	import Nsp from './NSP.svelte';

	let defaultColor = 'bg-lime-dk';
	let active = { name: '', color: defaultColor };

	let routes = [
		{ pathname: '/', name: 'News', color: defaultColor },
		{ pathname: '/netzwerk', name: 'Netzwerk', color: 'bg-grun-dk' },
		{ pathname: '/best-practice', name: 'Best Practice', color: 'bg-grun-lt' },
		{ pathname: '/arbeitsmaterialen', name: 'Arbeitsmaterialen', color: 'bg-oliv-dk' },
		{ pathname: '/kontakt', name: 'Kontakt', color: defaultColor },
		{ pathname: '/impressum', name: 'Impressum', color: defaultColor },
		{ pathname: '/datenschutz', name: 'Datenschutz', color: defaultColor }
	];
	
	$: for (let route of routes) {		
		if (route.pathname === $page.url.pathname) {
			active.name = route.name;
			active.color = route.color;
		}
	}

	let menuRoutes = routes.filter(route => route.name !== 'Datenschutz' && route.name !== 'Impressum');

</script>

<!-- temporary mobile-->
<header class="w-screen sm:w-full fixed sm:relative z-10  sm:flex justify-between border-b border-gray-900 bg-oliv-lt">
	
	<div class="w-full md:w-3/4 border-r border-gray-900">

		<div class="flex items-center justify-between h-20 sm:h-36 3xl:h-40 px-5">
			<div class="">
				<a href="/">
					<div class="h-full object-contain">	
						<Logo class="w-full"/>
					</div>
				</a>
			</div>
			<!-- temporary mobile-->
			<div class="opacity-0 sm:opacity-100  w-full lg:w-3/5 ">
				<div class="sm:flex flex-row align-top h-20 gap-5 justify-between items-center pt-1">
					<div class="w-full">
						<img class="object-contain max-h-26" src={bmwsb} alt="Bunderministerium für Wohnen, Stadtentwicklung und Bauwesen">
					</div>
					<div class="w-full">
						<Nsp class="max-h-16 w-full" />
						<!--<Nsp class="max-h-20" alt="Bunderministerium für Wohnen, Stadtentwicklung und Bauwesen" /> -->
					</div>
				
					<div class="w-full">
						<Fhb class="max-h-20 w-full" />
					<!--<img class="object-contain max-h-24" src={fbh_bms} alt="Die Senatorin für Bau, Mobilitäat und Stadtentwicklung">-->
					</div>
					<div class="w-44 mr-4">
						<img class="object-contain" src={aaalogo} alt="AAA Bremen">
					</div>
				</div>
			</div>
		</div>

		<nav class="main-nav h-16 flex border-t border-gray-900 justify-center font-nznBold overflow-x-auto scrollbar-hide overflow-y-hidden">
			<ul class="flex w-full justify-between px-5 text-base">
				{#each menuRoutes as menuItem}
					<li class="{menuItem.name === active.name ?
						'flex items-center mr-8 underline underline-offset-4' :
						'flex items-center mr-8'} group">
						<a class="whitespace-nowrap" href={menuItem.pathname}> {menuItem.name} </a>
						<div class="w-10 h-8">
							<div class="hidden arrow h-full group-hover:flex">
								<ArrowRight class="hidden xl:block self-center stroke-[3] h-10 w-10" />
							</div>
						</div>
					</li>
				{/each}
			</ul>
		</nav>

	</div>


	<div class="w-1/4 flex-col hidden md:block">

		<nav class="h-36 3xl:h-40 p-2 font-nznBold flex flex-col place-content-center">
				<!-- tempory fix for mobile -->
				<h2 class="pl-6 whitespace-nowrap"> Anmeldung <span class="hidden xl:inline">zum Netzwerk</span> </h2>
				<ul class="flex flex-col gap-2 w-full text-base">
					<li>
						<a class={`block rounded-2xl ${active.color} py-1 px-5 hover:shadow-inner-top`} href="/kontakt"> Teilnehmen</a>
					</li>
					<li>
						<a class={`block rounded-2xl ${active.color} py-1 px-5 hover:shadow-inner-top`} href="/kontakt"> Mailverteiler </a>
					</li>
				</ul>
		</nav>

		<div class="flex h-16 border-t border-gray-900 items-center px-5 overflow-scroll scrollbar-hide">
			<div class="text-base font-nznBold scrollbar-hide overflow-scroll"> {active.name} </div>
		</div>

	</div>

</header>
