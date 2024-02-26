<script lang="ts">
	import { afterNavigate } from "$app/navigation";
	import { sidetrayVisible, activeName, activeColor } from '$lib/stores';
	import { ArrowRight } from 'svelte-feathers';
	import { onMount } from 'svelte';
	import { page } from '$app/stores';

	export let scrollTop = false;
	export let noSidebar = false; // for pages without sidebar e.g. kontakt

	$: isOpen = false;
	$: title = '';
	$: bgColor = '';
	$: isSearch = $page.url.pathname  === "/suche"; 

	const toggleSidetray = () => {
    sidetrayVisible.update(value => !value);
  }

	sidetrayVisible.subscribe(value => {
		isOpen = value;
	});

	$: activeName.subscribe(value => {
		title = value;
	});

	$: activeColor.subscribe(value => {
		bgColor = value;
	});
	
	onMount(() => {
		// console.log('Page.svelte mounted');
		sidetrayVisible.set(false);
	});

	let main: HTMLElement;

	afterNavigate(() => {
	if (main && scrollTop) { 
		main.scrollIntoView();
	}
	});
</script>

<section class="pb-10" {...$$restProps} bind:this={main}>
	{#if !noSidebar}
	<div class={`sm:hidden absolute z-10 ${bgColor} flex justify-between items-center w-full border-b border-black h-12 pr-1 ${!isOpen ? 'pl-4': 'pl-1'}`}>
		{#if !isOpen}
		<h2 class="text-base font-nznBold"> {title} </h2>
		{/if}
		{#if !isSearch}
		<button on:click={toggleSidetray} class="flex justify-center items-center">
			{#if !isOpen}	<span class="text-base mr-1">Mehr</span> {/if}
			<ArrowRight class={`h-10 w-10 stroke-[2] ${isOpen ? 'transform rotate-180' : ''} focus:outline-none`}/>
		</button>
		{/if}
	</div>
	{/if}
	<div class="pt-12 sm:p-0">
		<slot />
	</div>
</section>