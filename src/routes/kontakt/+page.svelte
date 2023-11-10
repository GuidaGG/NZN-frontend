<script lang="ts">
	import Maintray from '$lib/components/Maintray.svelte';
	import Page from '$lib/components/Page.svelte';
	import Sidetray from '$lib/components/Sidetray.svelte';
	import Footer from '$lib/components/Footer.svelte';
	import TextContent from '$lib/components/TextContent.svelte';
	
	export let data;

	let page = data.page.pages[0]


</script>


<svelte:head>
	<title>{page.title}</title>
	<meta name="NZN" content="website for netzwerkzwischennutzung" />
</svelte:head>



<Maintray>
	<Page class="{page.slug}">
		registration form
	</Page>

	<Footer />
</Maintray>

<Sidetray>
	<div class="flex flex-col">
		{#each page.content as section}
			{#if section.__typename === "ComponentTextTextContent"}
				<!--<TextContent content={section} /> -->
			{:else if section.__typename === "ComponentTextContactData"}
				<ul class="text-base py-5">
					<li>
						<li class="border-b border-black text-xs px-5 py-2">Netzwerk Zwischennutzung:</li>
						<li class="px-5 py-2 pb-14">{section.description}</li>
					<li>
					<li>
						<li class="border-b border-black text-xs px-5 py-2">Umsetzung der Webseite:</li>
						<li class="px-5 py-2 pb-14">{section.website}</li>
					<li>
					<li>
						<li class="border-b border-black text-xs px-5 py-2">Ansprechpartnerin:</li>
						<li class="px-5 py-2 pb-14">{section.contact_person}</li>
					<li>
					<li>
						<li class="border-b border-black text-xs px-5 py-2">Telefon:</li>
						<li class="px-5 py-2 pb-14">{section.phone_number}</li>
					<li>
					<li>
						<li class="border-b border-black text-xs px-5 py-2">Mail:</li>
						<li class="px-5 py-2 pb-14">{section.email}</li>
					<li class="border-t border-black  px-5 py-2 pb-14">
						{section.steuer}
					<li>
	

				</ul>
			{/if}
		{/each}
	</div>
</Sidetray>
