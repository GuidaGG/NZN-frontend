<script lang="ts">
	import Page from '$lib/components/Page.svelte';
	import Image from '$lib/components/Image.svelte';
	import MemberSubList from '$lib/components/MemberSubList.svelte';
	import { X } from 'svelte-feathers';
	import { afterNavigate } from "$app/navigation";
	import { getSortParams, getPageParams } from '$lib/utils.js';
	import { page } from '$app/stores';
	import PracticeItem from '$lib/components/PracticeItem.svelte';

	export let data;

	$: member = data.member.members[0];
	$: practices = data.practices?.bestPractices;

	let main: HTMLElement;

	afterNavigate(() => {
	if (main) { 
		main.scrollIntoView();
	}
	});
</script>

<svelte:head>
	<title> {member?.title}</title>
</svelte:head>

<Page scrollTop>
	<div class="w-full relative">

		{#if member.image}
		<div class="relative">
				<Image image={member.image} class="max-h-[50vh] border-b border-black text-xs"/>
				{#if member.image.caption} 
					<div class="absolute right-0 bottom-0 bg-oliv-lt  px-2 border-b border-black ">{member.image.caption}</div>	
				{/if}
		</div>
		{:else} 
			<div class="h-16 w-full" />
		{/if}
		
		<div class="absolute top-0 right-0 bg-oliv-lt">
			<a href="/netzwerk?page={getPageParams($page)}&sort={getSortParams($page)}">
				<X class="h-12 w-12 sm:h-16 sm:w-16 stroke-[0.5] focus:outline-none"/>
			</a>
		</div>
		<div class="flex flex-col xl:flex-row gap-5 w-full p-5">
			<div class="xl:w-7/12 text-base shrink-0">
				<h1>{member.title}</h1>
				<div>{member.description}</div>
			</div>
			<div class="xl:w-5/12 font-nznBold text-xs overflow-hidden">
				<MemberSubList values={member.states} label = "wirkungsraum:" />
				<MemberSubList values={member.organizational_forms} label = "organisationsform:" />
				<MemberSubList values={member.work_areas} label = "arbeitsbereiche:" />
				<MemberSubList values={member.context} label = "kontext:" />
				<div class="uppercase min-w-[200px]">kontaktdaten:</div>
				<div class="flex gap-5 ">
					<div class="uppercase min-w-[200px]">mailadresse</div>
					<div>{member.email}</div>
				</div>
				{#if member.website}
					<div class="flex gap-5">
						<div class="uppercase min-w-[200px]">website</div>
						<div class="break-all"><a href={member.website} class="text-grun-dk		">{member.website}</a></div>
					</div>
				{/if}
				{#if member.phone_number}
				<div class="flex gap-5 ">
					<div class="uppercase min-w-[200px]">telefonnummer</div>
					<div>{member.phone_number}</div>
				</div>
				{/if}
				{#if member.logo}
				<div class="max-w-[200px] w-full h-auto pt-20">
					<Image image={member.logo} size="thumbnail"/>
				</div>
				{/if}
			</div>	
		</div>

		{#if practices }
		<div class="border-t mt-10 border-black w-full py-5">
			<h4 class="text-base font-nznBold px-5 pb-5">Projekt:</h4>
			<div class="flex flex-col lg:flex-row flex-wrap px-3">
				{#each practices as practice}
					<a href="/best-practice/{practice.slug}" class="w-full lg:w-1/2 p-2 py-4 border-2 border-transparent hover:border-black rounded-xl" >
					<PracticeItem {practice} image />
					</a>
				{/each}
			</div>
		</div>
		{/if}
	</div>
</Page>