<script lang="ts">
	import { onMount, onDestroy } from 'svelte';
	import Maintray from '$lib/components/Maintray.svelte';
	import Page from '$lib/components/Page.svelte';
	import Sidetray from '$lib/components/Sidetray.svelte';
	import Footer from '$lib/components/Footer.svelte';
	import { config } from '$lib/config';

	import type { Homepage } from '$lib/types';
	
	export let data;

	let homepage: Homepage = data.homepage;
	console.log(homepage);

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
			<div class="flex transition-transform duration-500 ease-in-out h-[58vh]" style="transform: translateX(-{currentSlide * 100}%)">
				{#each homepage.slideshow as image}
					<img
						class="w-full min-w-full object-cover"
						src={`${config.apiUrl}${image.url}`} alt={image.alternativeText}
					/>
				{/each}
			</div>
		</div>

		<div class="p-5 bg-oliv-dk">
			<h1> {homepage.content.title} </h1>
			<p> {@html homepage.content.body} </p>
		</div>
	</Page>

	<Footer />
</Maintray>

<Sidetray>
	<div class="p-5">
		<h1> Hello </h1>
		<p> Some information comes here and more </p>
	</div>
	
	<div class="p-5">
		<h1> Why do we use it? </h1>
		<p>
			The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.
		</p>
	</div>
</Sidetray>