<script lang="ts">
import type { Image } from '$lib/types';
import { onMount, onDestroy } from 'svelte';
import ImageComponent from './Image.svelte';
import { ArrowLeft, ArrowRight } from 'svelte-feathers';

export let slideshow: Image[]
export let manual = false;   

let currentSlide = 0;
let currentSlideElement: number;
let container: HTMLDivElement;


let autoPlay = true;
let transform: string;
$: buttons = false;
$: imgWidth = 100;

const nextSlide = (): void => {
    currentSlide = (currentSlide + 1) ;
    currentSlideElement = container?.children[currentSlide].offsetLeft;
    container.scrollLeft = currentSlideElement
};

const prevSlide = (): void => {
    currentSlide = currentSlide - 1;
    currentSlideElement = container?.children[currentSlide].offsetLeft;
    container.scrollLeft = currentSlideElement
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
    if (autoPlay && !manual) {
        startAutoPlay();
    } else {
        buttons = true;
        imgWidth = 90;
    }
});

onDestroy(() => {
    stopAutoPlay();
});


</script>

<div class="relative overflow-hidden">

    <div class={`flex transition-transform duration-500 ease-in-out overflow-x-auto scroll-smooth no-scrollbar ${manual && slideshow.length > 1 ? 'pr-[50%]' : 'pr-0'} ${slideshow.length > 1 ? "h-[50vh]" : "h-auto max-h-[80vh]"}`} bind:this={container}>
        {#each slideshow as image}
            <ImageComponent {image} {buttons} {manual} count={slideshow.length}/> 
        {/each}
    
    </div>

    {#if buttons}
    <div class="relative px-8 w-full bottom-10" >
        <div class="flex justify-between">
            {#if currentSlide !== 0} 
            <button on:click={prevSlide} class="border-2 p-2  rounded-2xl border-black bg-oliv-lt hover:shadow-inner-top focus:hover:shadow-inner-top">
                <ArrowLeft class="h-10 w-10 stroke-[2.5] focus:outline-none"/>
            </button>
             {/if}
            {#if currentSlide !== slideshow.length - 1} 
            <button on:click={nextSlide} class="ml-auto border-2 p-2 rounded-2xl border-black bg-oliv-lt hover:shadow-inner-top focus:hover:shadow-inner-to">
                <ArrowRight class="h-10 w-10 stroke-[2.5] focus:outline-none"/>
            </button>
            {/if} 
        </div>
    </div>
    {/if}
</div>