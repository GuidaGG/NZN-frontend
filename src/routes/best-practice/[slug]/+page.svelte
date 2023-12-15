<script lang="ts">
	import type { PageData } from './$types';
	import Page from '$lib/components/Page.svelte';
	import { X, ArrowRight } from 'svelte-feathers';
	import Slideshow from '$lib/components/Slideshow.svelte';
	import Member from '$lib/components/Member.svelte';
	import { getPageParams} from '$lib/utils';
	import { page } from '$app/stores';
	
	export let data: PageData;

	$: practice = data.bestPractice.bestPractices[0];
	$: member = data.member?.members[0];

</script>


<svelte:head>
	<title> {practice?.title} </title>
</svelte:head>

<Page scrollTop>
	<div class="w-full relative">
		
		<!-- CAN BE JUST ABSOLUTE (fixed / sticky problems) -->
		<div class="fixed sm:absolute z-10 right-0 bg-oliv-lt">
				<a href="/best-practice?page={getPageParams($page)}">
				<X class="h-12 w-12 sm:h-16 sm:w-16 stroke-[0.5] focus:outline-none"/>
			</a>
		</div>

		<div class="w-full p-5">
			<h2 class="text text-xl"> {practice.title} </h2>
			<div class="text-2xl font-nznBold"> {practice.header} </div>
		</div>

		<div class="my-5">
			<Slideshow slideshow={practice.gallery} manual/>
		</div>

		<div class="w-full p-5 text-xl">
			{@html practice.upper_content} 
		</div>

		<div class="flex flex-col xl:flex-row gap-5 w-full p-5 {member !== null ? 'border-b border-black pb-32' : ''}">
			<div class="xl:w-2/3 text-base shrink-0 font-nznBold">
				{@html practice.main_content}
			</div>

			<div class="xl:w-1/3 text-xs overflow-hidden">
				{#if practice.sidebar !== null}
					<div> {@html practice.sidebar} </div>
				{/if}
			</div>
		</div>

		{#if member }
		<div class="flex flex-col gap-6 sm:gap-12 lg:w-1/3 py-12 px-5">
			<Member {member} image location/>
			<a href="/netzwerk/{member.slug}" class="flex justify-between text-base items-center font-nznBold">
				<span>Zum Netzwerkprofil</span>
				<ArrowRight class="h-8 w-8 sm:h-12 sm:w-12 stroke-[2.5] focus:outline-none"/>
			</a>
		</div>
		{/if}

	</div>

</Page>
