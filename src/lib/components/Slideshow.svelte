<script lang="ts">
import type { Image } from '$lib/types';
import { onMount, onDestroy } from 'svelte';
import ImageComponent from './Image.svelte';
import { ArrowLeft, ArrowRight } from 'svelte-feathers';
import Logo from './Logo.svelte';

export let slideshow: Image[]
export let manual = false;   

let currentSlide = 0;
let currentSlideElement: number;
let container: HTMLDivElement;

let maskContainer: HTMLDivElement;
let counter = 0;

let autoPlay = true;
let transform: string;
$: buttons = false;
$: imgWidth = 100;

const nextSlide = (): void => {
    currentSlide = (currentSlide + 1) < slideshow.length ? currentSlide + 1 : 0;
    currentSlideElement = container?.children[currentSlide].offsetLeft;
    container.scrollLeft = currentSlideElement
};

const prevSlide = (): void => {
    currentSlide = (currentSlide - 1) >= 0 ? currentSlide - 1 : slideshow.length
    currentSlideElement = container?.children[currentSlide].offsetLeft;
    container.scrollLeft = currentSlideElement
};

const shiftLogo = (): void => {
    counter++;
    let maxScrollLeft = maskContainer.scrollWidth - maskContainer.clientWidth;
    let scrollAmount = maxScrollLeft / slideshow.length;
    maskContainer.scrollLeft = counter * scrollAmount;
    if (counter > slideshow.length) {
        counter = 0;
        maskContainer.scrollLeft = 0;
    }
}

let autoPlayInterval: number;
let shiftInterval: number;

const startAutoPlay = (): void => {
    // console.log('start autoplay');
    autoPlayInterval = setInterval(nextSlide, 3000);
    shiftInterval = setInterval(shiftLogo, 3500);
};

const stopAutoPlay = (): void => {
	if (autoPlayInterval) {
        clearInterval(autoPlayInterval);
        autoPlayInterval = 0;
    }
    if (shiftInterval) {
        clearInterval(shiftInterval);
        shiftInterval = 0;
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

    <div class={`flex transition-transform duration-500 ease-in-out overflow-x-auto scroll-smooth no-scrollbar ${manual && slideshow.length > 1 ? 'md:pr-[50%]' : 'pr-0'} ${slideshow.length > 1 ? "h-[50vh]" : "h-auto max-h-[80vh]"}`} bind:this={container}>
        {#each slideshow as image}
            <ImageComponent {image} {buttons} {manual} count={slideshow.length}/> 
        {/each}

        {#if !manual}
            <div class="absolute flex h-full w-full items-center overflow-hidden scroll-smooth" bind:this={maskContainer}>
                <div class="h-[300%]">
                    <Logo class='h-full relative transition-transform duration-500' />
                </div>
            </div>
        {/if}
    </div>

    {#if buttons}
    <div class="relative px-8 w-full bottom-10" >
        <div class="flex justify-between">
            {#if currentSlide !== 0} 
            <button on:click={prevSlide} class="border-2 p-2 rounded-lg sm:rounded-2xl border-black bg-oliv-lt hover:shadow-inner-top focus:hover:shadow-inner-top">
                <ArrowLeft class="h-6 w-6 sm:h-10 sm:w-10 stroke-[2.5] focus:outline-none"/>
            </button>
             {/if}
            {#if currentSlide !== slideshow.length - 1} 
            <button on:click={nextSlide} class="ml-auto border-2 p-2 rounded-lg sm:rounded-2xl border-black bg-oliv-lt hover:shadow-inner-top focus:hover:shadow-inner-to">
                <ArrowRight class="h-6 w-6 sm:h-10 sm:w-10 stroke-[2.5] focus:outline-none"/>
            </button>
            {/if} 
        </div>
    </div>
    {/if}
</div>