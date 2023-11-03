<script lang="ts">
	import { onMount, onDestroy } from 'svelte';
	import Maintray from '$lib/components/Maintray.svelte';
	import Page from '$lib/components/Page.svelte';
	import Sidetray from '$lib/components/Sidetray.svelte';
	import Footer from '$lib/components/Footer.svelte';
	import Sidenews from '$lib/components/Sidenews.svelte';
	import { config } from '$lib/config';

	import type { Homepage } from '$lib/types';
	
	export let data;

	let homepage: Homepage = data.homepage;
	let news = data.news;
	// console.log(news);

	let currentSlide = 0;
  let autoPlay = true;

	const nextSlide = (): void => {
    currentSlide = (currentSlide + 1) % homepage.slideshow.length;
  };

  let autoPlayInterval: number;
  const startAutoPlay = (): void => {
    autoPlayInterval = setInterval(nextSlide, 3000);
  };

  const stopAutoPlay = (): void => {
		if (autoPlayInterval) {
      clearInterval(autoPlayInterval);
      autoPlayInterval = 0;
    }
  };

	onMount(() => {
    if (autoPlay) {
      startAutoPlay();
    }
  });

  onDestroy(() => {
    stopAutoPlay();
  });

</script>


<svelte:head>
	<title> NZN </title>
	<meta name="NZN" content="website for netzwerkzwischennutzung" />
</svelte:head>


<Maintray>
	<Page>
		<div class="relative overflow-hidden">
			<div class="flex transition-transform duration-500 ease-in-out h-[55vh]" style="transform: translateX(-{currentSlide * 100}%)">
				{#each homepage.slideshow as image}
					<img
						class="w-full min-w-full object-cover"
						src={`${config.apiUrl}${image.url}`} alt={image.alternativeText}
					/>
				{/each}
			</div>
		</div>

		<div class="p-5 bg-lime-dk">
			<h1> {homepage.content.title} </h1>
			<div class="text-xl"> {@html homepage.content.body} </div>
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