<script lang="ts">
	import { config } from '$lib/config';
	import Maintray from '$lib/components/Maintray.svelte';
	import Page from '$lib/components/Page.svelte';
	import Footer from '$lib/components/Footer.svelte';
	import Sidetray from '$lib/components/Sidetray.svelte';
	import Sidenews from '$lib/components/Sidenews.svelte';
	import { page } from '$app/stores';
	import type { NewsItem } from '$lib/types.js';
	import {  Download } from 'svelte-feathers';
	import Slideshow from '$lib/components/Slideshow.svelte';
	export let data;

	let news = data.news;

	$: slug = $page.params.slug;

	$: currentNews = news.find((news: NewsItem) => {return news.slug == slug});


</script>

<svelte:head>
	<title>{slug}</title>
</svelte:head>

<Maintray>
	<Page class="p-5 pt-10">
		<h1 class="pr-40">{currentNews.content.title}</h1>
		<p class="pt-8 text-base pr-40"> { @html currentNews.content.body}</p>
		{#if currentNews.file}
		<div class="py-8">
			<a href={`${config.apiUrl}${currentNews.file.url}`} download target="_blank" class="flex gap-4">
            	<span class="text-base">{currentNews.title_file}</span> <Download class="self-center inline stroke-[2.5] h-8 w-8"/>
          </a>
		</div>
		{/if}
		{#if currentNews.gallery.length > 0}
			<Slideshow slideshow={currentNews.gallery} manual/>

		{/if}
	</Page>
	<Footer />
</Maintray>

<Sidetray>
	<div class="flex flex-col">
		{#each news as newsItem}
			<Sidenews {newsItem} />
		{/each}
	</div>
</Sidetray>