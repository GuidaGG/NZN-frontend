<script lang="ts">
	import Page from '$lib/components/Page.svelte';
	import Image from '$lib/components/Image.svelte';
	import MemberSubList from '$lib/components/MemberSubList.svelte';
	import { X } from 'svelte-feathers';
	import { afterNavigate } from "$app/navigation";
	import { getURLParams } from '$lib/utils.js';
	import { page } from '$app/stores';
	import PracticeItem from '$lib/components/PracticeItem.svelte';

	export let data;

	$: member= data.member.members[0];
	$: practices = data.practices?.bestPractices;

	$: imageAlignment = member.imageRelevantArea ? member.imageRelevantArea : 'center';

	let main: HTMLElement;

	afterNavigate(() => {
	if (main) { 
		main.scrollIntoView();
	}
	});

	function parseUrls(input: string): string[] {
    const urlArray = input.replace(/\s/g, '').split(',');
    const trimmedUrls = urlArray.map(url => url.trim());
    return trimmedUrls;
}

	$: websites = member.website.length ? parseUrls(member?.website) : [];
</script>

<svelte:head>
	<title> {member?.title}</title>
</svelte:head>

<Page scrollTop>
	<div class="w-full relative">
		{#if member.image}
		<div class="relative h-[50vh] w-full bg-yellow-50 ">
				<Image image={member.image} class="border-b border-black h-full text-xs object-cover object-{imageAlignment}"/>
				{#if member.image.caption} 
					<div class="absolute right-0 bottom-0 bg-oliv-lt  px-2 border-b border-black ">{member.image.caption}</div>	
				{/if}
		</div>
		{:else} 
			<div class="h-16 w-full" />
		{/if}
		
		<div class="absolute top-0 right-0 bg-oliv-lt">
			<a href="/netzwerk?page={getURLParams($page, 'page')}&sort={getURLParams($page, 'page')}">
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
				<div class="flex flex-col md:flex-row gap-5 pb-5 text-xs w-full">
					<div class="uppercase min-w-[200px]">stadt:</div>
					<p>{member.city}</p>
				</div>
				<MemberSubList values={member.organizational_forms} label = "organisationsform:" />
				<MemberSubList values={member.work_areas} label = "arbeitsbereiche:" />
				<MemberSubList values={member.context} label = "kontext:" />
				<MemberSubList values={member.expertise} label = "expertise:" />
				<MemberSubList values={member.support} label = "unterstützung benötigen bei:" />
				<div class="uppercase min-w-[200px] pb-5 md:pb-0">kontaktdaten:</div>
				<div class="flex flex-col md:flex-row md:gap-5">
					<div class="uppercase min-w-[200px]">mailadresse</div>
					<div>{member.email}</div>
				</div>
				{#if member.website}
					<div class="flex flex-col md:flex-row md:gap-5">
						<div class="uppercase min-w-[200px]">website</div>
						<div class="break-all flex-col w-full">
						{#each websites as website}
						<div>
							<a href={website} target="_blank" class="text-grun-dk		">{website}</a>
						</div>
						{/each}
						</div>
					</div>
				{/if}
				{#if member.phone_number}
				<div class="flex flex-col md:flex-row gap-5 pb-5">
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