<script lang="ts">
	import { config } from '$lib/config';
	import Maintray from '$lib/components/Maintray.svelte';
	import Page from '$lib/components/Page.svelte';
	import Footer from '$lib/components/Footer.svelte';
	import Sidetray from '$lib/components/Sidetray.svelte';
	import Sidenews from '$lib/components/Sidenews.svelte';
	import { page } from '$app/stores';
	import type { NewsItem } from '$lib/types.js';
	import { X, Download, ArrowLeft, ArrowRight } from 'svelte-feathers';
	import Slideshow from '$lib/components/Slideshow.svelte';
	export let data;

	let news = data.news;

	$: slug = $page.params.slug;
	$: currentNews = news.find((news: NewsItem) => {return news.slug == slug});
	$: currentIndex = news.findIndex((news: NewsItem) => {return news.slug == slug});
	$: nextSlug = news[currentIndex + 1]?.slug;
	$: prevSlug = news[currentIndex - 1]?.slug;

</script>

<svelte:head>
	<title>{slug}</title>
</svelte:head>

<Maintray>
	<Page scrollTop>
		<div class="relative">
			<div class="bg-transparent w-full sm:absolute relative flex">
				<a href="/" class="ml-auto bg-oliv-lt">
					<X class="h-12 w-12 sm:h-16 sm:w-16 stroke-[0.5] focus:outline-none"/>
				</a>
			</div>

			<h1 class="p-5 mb-6 sm:pr-40">{currentNews.content.title}</h1>
			<p class="p-5 text-base sm:pr-40"> { @html currentNews.content.body}</p>
			
			{#if currentNews.file}
			<div class="px-5 py-8">
				<a href={`${config.apiUrl}${currentNews.file.url}`} download target="_blank" class="flex gap-4">
	        <span class="text-base">{currentNews.title_file}</span>
					<Download class="self-center inline stroke-[2.5] h-8 w-8"/>
	      </a>
			</div>
			{/if}
			
			{#if currentNews.gallery.length > 0}
				<div class="px-5 py-8 lg:pr-40"> <!-- do it similar to best-practice gallery -->
					<Slideshow slideshow={currentNews.gallery} manual/>
				</div>
			{/if}

			<div class="p-5 pt-8 flex justify-between w-full">
				{#if prevSlug}
					<a href="/news/{prevSlug}" class="mr-auto flex justify-between text-base items-center font-nznBold p-2 sm:px-5 sm:py-2 border-2 border-black rounded-lg sm:rounded-2xl hover:shadow-inner-top focus:hover:shadow-inner-to">
						<ArrowLeft class="sm:hidden h-6 w-6 stroke-[2.5] focus:outline-none"/>
						<span class="hidden sm:block"> Vorheriger Post </span>
					</a>
				{/if}
				{#if nextSlug}
					<a href="/news/{nextSlug}" class="ml-auto flex justify-between text-base items-center font-nznBold p-2 sm:px-5 sm:py-2 border-2 border-black rounded-lg sm:rounded-2xl hover:shadow-inner-top focus:hover:shadow-inner-to">
						<span class="hidden sm:block"> Nächster Post </span>
						<ArrowRight class="sm:hidden h-6 w-6 stroke-[2.5] focus:outline-none"/>
					</a>
				{/if}
			</div>
		</div>
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