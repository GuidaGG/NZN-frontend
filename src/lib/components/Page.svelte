<script lang="ts">
	import { afterNavigate } from "$app/navigation";
	import { sidetrayVisible, activeName } from '$lib/stores';
	import { ArrowRight } from 'svelte-feathers';
	import { onMount } from 'svelte';
	
	export let scrollTop = false;
	export let noSidebar = false;

	$: isOpen = false;
	$: title = '';

	const toggleSidetray = () => {
    sidetrayVisible.update(value => !value);
  }

	sidetrayVisible.subscribe(value => {
		isOpen = value;
	});

	$: activeName.subscribe(value => {
		title = value;
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
	<div class={`sm:hidden flex justify-between items-center w-full border-b border-black h-12 pr-1 ${!isOpen ? 'pl-4': 'pl-1'}`}>
		{#if !isOpen}
		<h2 class="text-base font-nznBold"> {title} </h2>
		{/if}
		<button on:click={toggleSidetray} class="flex justify-center items-center">
			<ArrowRight class={`p-2 h-10 w-10 stroke-[3] ${isOpen ? 'transform rotate-180' : ''} focus:outline-none`}/>
		</button>
	</div>
	{/if}
	<slot />
</section>