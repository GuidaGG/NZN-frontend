<script lang="ts">
	import type { PageData } from './$types';
	import Page from '$lib/components/Page.svelte';
	import { PdfViewer } from "svelte-pdf-simple";
	import type {
    PdfLoadFailureContent,
    PdfLoadSuccessContent,
    PdfPageContent,
  } from "svelte-pdf-simple";
	import { X, ArrowLeft, ArrowRight, Download, Maximize, Minimize, Loader } from 'svelte-feathers';
    import { getURLParams } from '$lib/utils';
	import { page } from '$app/stores';

	export let data: PageData;
	// $: material = data.material?.workMaterials[0];
	let material: any;
	$: {
    material = data.material?.workMaterials[0];
    if (material) {
      resetElements();
    }
  }

  	$: order = getURLParams($page, 'order')

	$: pathToPDF = `https://admin.netzwerkzwischennutzung.de${material?.file.url}`;
	let pdfViewer: PdfViewer;
  let pageNumber = 0;
  let totalPages = 0;
  let isPdfLoaded = false;
	let fullscreen = false;

	function goToPage(page: number): void {
    pdfViewer.goToPage(page);
  }

  function handlePageChanged(event: CustomEvent<PdfPageContent>): void {
    pageNumber = event.detail.pageNumber;
  }

  function handleLoadedSuccess(event: CustomEvent<PdfLoadSuccessContent>) {
		console.log('PDF loaded successfully');
    totalPages = event.detail.totalPages;
    pageNumber = 1;
    isPdfLoaded = true;
  }

  function handleLoadFailure(event: CustomEvent<PdfLoadFailureContent>) {
    // Put your logic on how to handle PDF loading failure
  }

	const resetElements = () => {
    // console.log('resetElements');
		isPdfLoaded = false;
  }

	const toggleFullscreen = (): void => {
    const element = document.getElementById('pdf-container');
    if (element) {
      if (document.fullscreenElement) {
        document.exitFullscreen();
				fullscreen = false;
				element.style.overflow = 'auto';
      	element.style.height = 'auto';
      } else {
        element.requestFullscreen();
				fullscreen = true;
				element.style.overflow = 'hidden';
      	element.style.height = '100vh';
      }
    }
		console.log('fullscreen: ', fullscreen);
		
  }

	const downloadPdf = () => {
		const anchor = document.createElement('a');
		anchor.href = pathToPDF;
		anchor.download = material.title;
		document.body.appendChild(anchor);
		anchor.click();
		document.body.removeChild(anchor);
	}

</script>

<svelte:head>
	<title> {material?.title} </title>
	<meta name="description" content={material.description} />
</svelte:head>


<Page >
	<div class="relative">
		<div class="bg-transparent w-full sm:absolute relative flex">
			<a href="/arbeitsmaterialen" class="ml-auto bg-oliv-lt">
				<X class="h-12 w-12 sm:h-16 sm:w-16 stroke-[0.5] focus:outline-none"/>
			</a>
		</div>
		<h1 class="p-5 pb-0 text-xl">{order} {material.title}</h1>	
		<div class="text-base font-nznBold p-5 mb-14 sm:mb-0"> {material.description} </div>

		<div class="relative flex flex-col w-full items-center justify-center center" id="pdf-container">
			
			{#if isPdfLoaded}
			
			<div class="absolute flex flex-col sm:flex-row gap-5 left-8 -top-14 sm:top-8">
				<button
					on:click={downloadPdf}
					class="border-2 p-2 rounded-lg sm:rounded-2xl border-black bg-oliv-lt hover:shadow-inner-top focus:hover:shadow-inner-top">
					<Download class="h-6 w-6 sm:h-10 sm:w-10 stroke-[2.5] focus:outline-none"/>
				</button>
				<button
					on:click={toggleFullscreen}
					class="ml-auto hidden sm:block border-2 p-2 rounded-lg sm:rounded-2xl border-black bg-oliv-lt hover:shadow-inner-top focus:hover:shadow-inner-top">
					{#if fullscreen}
					<Minimize class="h-6 w-6 sm:h-10 sm:w-10 stroke-[2.5] focus:outline-none"/>
					{:else}
					<Maximize class="h-6 w-6 sm:h-10 sm:w-10 stroke-[2.5] focus:outline-none"/>
					{/if}
				</button>
			</div>
		
			<div class="absolute flex w-32 sm:w-48 items-center justify-between -top-14 sm:top-8">
				{#if pageNumber !== 1} 
				<button
					on:click={() => goToPage(pageNumber - 1)}
					class="border-2 p-2 rounded-lg sm:rounded-2xl border-black bg-oliv-lt hover:shadow-inner-top focus:hover:shadow-inner-top">
					<ArrowLeft class="h-6 w-6 sm:h-10 sm:w-10 stroke-[2.5] focus:outline-none"/>
				</button>
				{/if}
				<!-- <span > {pageNumber}/{totalPages} </span> -->
				{#if pageNumber !== totalPages} 
				<button
					on:click={() => goToPage(pageNumber + 1)}
					class="ml-auto border-2 p-2 rounded-lg sm:rounded-2xl border-black bg-oliv-lt hover:shadow-inner-top focus:hover:shadow-inner-to">
					<ArrowRight class="h-6 w-6 sm:h-10 sm:w-10 stroke-[2.5] focus:outline-none"/>
				</button>
				{/if}
			</div>
			{/if}
		
			{#key material.slug}
			<PdfViewer
				bind:this={pdfViewer}
				props={{
					path: pathToPDF,
					scale: 3,
					// withAnnotations: true,
					// withTextContent: true,
				}}
				style={`display: block; ${fullscreen ? 'width: auto;' : 'width: 100%;'} overflow: auto;`}
				on:load_success={handleLoadedSuccess}
				on:load_failure={handleLoadFailure}
				on:page_changed={handlePageChanged}
			>
				<svelte:fragment slot="loading">
					<div class="flex h-32 w-full opacity-60 items-center justify-center">
						<Loader class="animate-spin duration-1000 text-black h-10 w-10 "/>
					</div>
				</svelte:fragment>
			</PdfViewer>
			{/key}
		</div>
	</div>	
</Page>

<!-- <pre>{JSON.stringify(material, null, 2)}</pre> -->