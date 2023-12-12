<script lang="ts">
	import type { PageData } from './$types';
	import Page from '$lib/components/Page.svelte';
	import { X, ArrowRight } from 'svelte-feathers';
	import Slideshow from '$lib/components/Slideshow.svelte';
	import Member from '$lib/components/Member.svelte';
	
	export let data: PageData;

	$: practice = data.bestPractice.bestPractices[0];
	$: member = data.member;

</script>


<svelte:head>
	<title> {practice.title} </title>
</svelte:head>

<Page scrollTop>
	<div class="w-full relative">
		
		<div class="sticky ml-auto z-10 top-0 h-16 w-16 bg-oliv-lt">
			<a href="/best-practice">
				<X class="h-16 w-16 stroke-[0.5] focus:outline-none"/>
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

		{#if member !== null}
		<div class="flex flex-col gap-12 lg:w-1/3 py-12 px-5">
			<Member member={member.members[0]} image location/>
			<a href="/netzwerk/{member.slug}" class="flex justify-between text-base items-center font-nznBold">
				Zum Netzwerkprofil
				<ArrowRight class="h-14 w-14 stroke-[2.5] focus:outline-none"/>
			</a>
		</div>
		{/if}

	</div>

</Page>


<!-- <pre>{JSON.stringify(member, null, 2)}</pre> -->
<!-- <pre>{JSON.stringify(practice, null, 2)}</pre> -->
