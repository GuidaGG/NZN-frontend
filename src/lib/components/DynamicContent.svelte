<script lang="ts">
import Slideshow from "./Slideshow.svelte";
import Image from "./Image.svelte";
import TextContent from "./TextContent.svelte";
import type {Page} from '$lib/types';
export let size = "text-xl"; 

export let page: Page;

</script>
{#if page?.content.length}
	{#each page?.content as section}
		{#if section.__typename === "ComponentTextTextContent"}
			<TextContent content={section} {size}/>
		{:else if section.__typename === "ComponentImageImage"}
			<Image image={section.image} />
		{:else if section.__typename === "ComponentImageSlideshow"}
			<Slideshow slideshow={section.images} />
		{:else if section.__typename === "ComponentTextContactData"}
			kontakt
		{/if}

	{/each}
{/if}
