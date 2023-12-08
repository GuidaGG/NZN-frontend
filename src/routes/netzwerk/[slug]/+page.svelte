<script lang="ts">
	import Page from '$lib/components/Page.svelte';
	import Image from '$lib/components/Image.svelte';
	import MemberSubList from '$lib/components/MemberSubList.svelte';
	import X from 'svelte-feathers/X.svelte';
	import { afterNavigate } from "$app/navigation";

	export let data;

	
	$: member = data.member.members[0]

	
	let main: HTMLElement;

	afterNavigate(() => {
	if (main) { 
		main.scrollIntoView();
	}
	});
</script>

<svelte:head>
	<title> {member.title}</title>
</svelte:head>


<Page scrollTop>
	<div class="w-full relative">
		
		{#if member.image}
				<Image image={member.image} class="max-h-[50vh]"/>
		{:else} 
			<div class="h-16 w-full" />
		{/if}
		
		<div class="absolute top-0 right-0 h-16 w-16 bg-oliv-lt">
			<a href="/netzwerk">
				<X class="h-16 w-16 stroke-[0.5] focus:outline-none"/>
			</a>
		</div>

		<div class="flex flex-col xl:flex-row gap-5 w-full p-5">
			<div class="xl:w-7/12 text-base shrink-0">
				<h1>{member.title}</h1>
				<div>{member.description}</div>
			</div>
			<div class="xl:w-5/12 font-nznBold text-xs">
				<MemberSubList values={member.states} label = "wirkungsraum:" />
				<MemberSubList values={member.organizational_forms} label = "organisationsform:" />
				<MemberSubList values={member.work_areas} label = "arbeitsbereiche:" />
				<MemberSubList values={member.context} label = "kontext:" />
				<div class="uppercase w-52">kontaktdaten:</div>
				<div class="flex gap-5 ">
					<div class="uppercase w-52">mailadresse</div>
					<div>{member.email}</div>
				</div>
				{#if member.website}
					<div class="flex gap-5">
						<div class="uppercase w-52">website</div>
						<div>{member.website}</div>
					</div>
				{/if}
				{#if member.phone_number}
				<div class="flex gap-5 ">
					<div class="uppercase w-52">telefonnummer</div>
					<div>{member.phone_number}</div>
				</div>
				{/if}
				{#if member.logo}
				<div class="w-60 pt-20">
					<Image image={member.logo} size="thumbnail"/>
				</div>
				{/if}
			</div>	
		</div>
	</div>
</Page>