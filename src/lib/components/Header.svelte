<script lang="ts">
	import { page } from '$app/stores';
	import Logo from './Logo.svelte';
	// import bmwsb from '$lib/images/BMWSB.png';
	// import aaalogo from '$lib/images/aaa-logo-bw.svg';
	import { Search, ArrowRight } from 'svelte-feathers';
	import Fhb from './FHB.svelte';
	import Nsp from './NSP.svelte';
	import { goto } from '$app/navigation';  
	import { activeName, activeColor } from '$lib/stores';
	import AAA from './AAA.svelte';
	import Bm from './BM.svelte';

  	let defaultColor = 'bg-lime-dk';
	$: activeName.set(active.name);
	$: activeColor.set(active.color);
  	$: searchQuery = '';
	$: active = { name: '', color: defaultColor };


	function searchPage(){
		let query = new URLSearchParams($page.url.searchParams.toString());
		query.set('search', searchQuery.toString());	
		goto(`/suche?${query.toString()}`);
	}
	
	let routes = [
		{ pathname: '/suche', name: 'Suche', color:  defaultColor},
		{ pathname: '/', name: 'News', color: defaultColor },
		{ pathname: '/netzwerk', name: 'Netzwerk', color: 'bg-grun-dk' },
		{ pathname: '/best-practice', name: 'Best Practice', color: 'bg-grun-lt' },
		{ pathname: '/arbeitsmaterialen', name: 'Arbeitsmaterialen', color: 'bg-oliv-dk' },
		{ pathname: '/kontakt', name: 'Kontakt', color: defaultColor },
		{ pathname: '/impressum', name: 'Impressum', color: defaultColor },
		{ pathname: '/datenschutz', name: 'Datenschutz', color: defaultColor }
	];
	
	$: for (let route of routes) {		
		if (route.pathname === $page.url.pathname || route.pathname === route.pathname.split('/')[1]) {
			active.name = route.name;
			active.color = route.color;
		}
	}

	let menuRoutes = routes.filter(route => route.name !== 'Datenschutz' && route.name !== 'Impressum');

</script>

<header class="overflow-hidden w-screen absolute bottom-0 sm:bottom-auto sm:top-0 sm:w-full flex z-30 justify-between bg-oliv-lt">
	
	<div class="w-full flex sm:w-3/4 flex-col-reverse sm:flex-col">

		<div class="flex items-center justify-between  h-20 sm:h-36 3xl:h-40 px-2 sm:px-5 overflow-hidden ">
			
			<div class="flex w-28 sm:w-auto ">
				<a href="/">
					<div class="sm:h-full object-contain">	
						<Logo class="w-full sm:min-w-[200px]"/>
					</div>
				</a>
			</div>

			<div class="hidden sm:block">	
				<div class="flex flex-row align-top h-20  justify-between pt-1 items-center">
					<div >
						<a	target="_blank" href="https://www.bmwsb.bund.de/Webs/BMWSB/DE/startseite/startseite-node.html">
						<Bm class="w-full"/>
						</a>
					</div>
					<div >
						<a	target="_blank" href="https://www.nationale-stadtentwicklungspolitik.de/NSPWeb/DE/Home/home_node.html">
						<Nsp class="w-full hidden md:flex " />
						</a>
					</div >
					<div >
						<a	target="_blank" href="https://bau.bremen.de/">
						<Fhb class="w-full"/>
						</a>
					</div>
					<div class=" w-autol">
						<a	target="_blank" href="https://www.aaa-bremen.de/aktuelles/">
						<AAA  class="w-full hidden lg:flex "/>
						</a>
					</div>
				</div>
			</div>

		</div>
		<nav class="main-nav h-12 sm:h-16 flex border-b border-t border-black justify-center font-nznBold overflow-x-auto scrollbar-hide overflow-y-hidden">
			<ul class="flex w-full justify-between px-5 text-base tracking-wider">
			
				{#each menuRoutes as menuItem}
					<li class="{menuItem.name === active.name ?
						'flex items-center md:mr-8 underline underline-offset-4' :
						'flex items-center md:mr-8'} {menuItem.name === "Suche" ? "sm:hidden border-r-2 border-black mr-4" : "group"} ">
						<a class="whitespace-nowrap" href={menuItem.pathname}> {menuItem.name} </a>
						<div class=" pointer-events-none  {menuItem.name === "Suche" ? "w-4 h-8" : "w-8 h-8"}">
							<div class="hidden arrow h-full group-hover:flex">
								<ArrowRight class="hidden xl:block self-center stroke-[3] h-10 w-10" />
							</div>
						</div>
					</li>
				{/each}
			</ul>
		</nav>

	</div>


	<div class=" fixed sm:block sm:w-1/4 bottom-4 sm:bottom-auto sm:top-0 right-0 sm:relative sm:border-l border-black ">

		<nav class="flex flex-row 0 sm:flex-col sm:h-36 3xl:h-40 p-2 font-nznBold place-content-center">
				<h2 class="pl-6 whitespace-nowrap hidden sm:block"> Anmeldung <span class="hidden xl:inline">zum Netzwerk</span> </h2>
				<ul class="flex flex-row sm:flex-col gap-2 w-full sm:text-base">
					<li>
						<a class={`block rounded-2xl ${active.color} py-1 px-2 sm:px-5 hover:shadow-inner-top`} href="/kontakt"> Teilnehmen </a>
					</li>
					<li>
						<a class={`block rounded-2xl ${active.color} py-1 px-2 sm:px-5 hover:shadow-inner-top`} href="mailto:verteilerNZN+subscribe@netzwerkzwischennutzung.de"> Mailverteiler </a>
					</li>
				</ul>
		</nav>

		<div class="hidden border-t border-b  border-gray-900 px-2 h-12 sm:h-16 sm:flex items-center ">
			<div class="flex gap-2 text-base font-nznBold items-center border border-black w-full rounded-full p-2 py-1 ">
				<Search class="shrink-0 w-8 h-8 cursor-pointer block" on:click={() => searchPage()}/>
				<input bind:value={searchQuery} on:keydown={(e) => { if (e.keyCode === 13 || e.which === 13) {searchPage()}}} class={`bg-transparent placeholder:text-black focus:outline-none`} placeholder="Suchebegriff"/>
			</div>
		</div>

	</div>

</header>

