<script lang="ts">
	import { page } from '$app/stores';
	import nzn from '$lib/images/nzn_.png';
	import ArrowRight from 'svelte-feathers/ArrowRight.svelte';

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


<header class="flex justify-between border-b border-gray-900 bg-oliv-lt">

	<div class="w-3/4 border-r border-gray-900">

		<div class="flex items-center h-40 px-5">
			<div class="h-3/4">
				<a href="/">
					<img class="h-full object-contain" src={nzn} alt="NZN-logo" />
				</a>
			</div>
		</div>

		<nav class="main-nav h-16 flex border-t border-gray-900 justify-center font-nznBold overflow-x-auto scrollbar-hide overflow-y-hidden">
			<ul class="flex w-full justify-between px-5 text-base">
				{#each menuRoutes as menuItem}
					<li class={menuItem.name === active.name ?
						'flex items-center mr-8 underline underline-offset-4' :
						'flex items-center mr-8'}>
						<a class="whitespace-nowrap" href={menuItem.pathname}> {menuItem.name} </a>
						<div class="w-10 h-8">
							<div class="hidden arrow h-full">
								<ArrowRight class="self-center stroke-[3] h-10 w-10" />
							</div>
						</div>
					</li>
				{/each}
			</ul>
		</nav>

	</div>


	<div class="w-1/4 flex-col">

		<nav class="h-40 p-2 font-nznBold">
			<h2 class="pl-6 whitespace-nowrap"> Anmeldung zum Netzwerk </h2>
			<ul class="flex flex-col gap-2 w-full text-base">
				<li>
					<a class={`block rounded-2xl ${active.color} py-1 px-5 hover:shadow-inner-top`} href="/anmeldung-netzwerk"> Mitglieschaft </a>
				</li>
				<li>
					<a class={`block rounded-2xl ${active.color} py-1 px-5 hover:shadow-inner-top`} href="/anmeldung-mail"> Mailverteiler </a>
				</li>
			</ul>
		</nav>

		<div class="flex h-16 border-t border-gray-900 items-center px-5">
			<div class="text-base font-nznBold"> {active.name} </div>
		</div>

	</div>

</header>

<style>
	.main-nav li:hover .arrow {
		display: inline-flex;
	}
</style>