<script lang="ts">
import type { Image } from '$lib/types';
import { onMount, onDestroy } from 'svelte';
import ImageComponent from './Image.svelte';
import { ArrowLeft, ArrowRight } from 'svelte-feathers';

export let slideshow: Image[]

let currentSlide = 0;
let autoPlay = true;
export let manual = false;
$: buttons = false;
$: imgWidth = 100;

const nextSlide = (): void => {
    currentSlide = (currentSlide + 1) % slideshow.length;
};

const prevSlide = (): void => {
    currentSlide = (currentSlide - 1 + slideshow.length) % slideshow.length;
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
    <div class="flex transition-transform duration-500 ease-in-out h-[50vh]" style="transform: translateX(-{currentSlide * imgWidth}%)">
        {#each slideshow as image}
            <ImageComponent {image} {buttons}/>
        {/each}
    </div>

    {#if buttons}
    <div class="relative px-8 w-full bottom-10">
        <div class="flex justify-between">
            <!-- {#if currentSlide !== 0} -->
            <button on:click={prevSlide} class="border-2 p-2 rounded-2xl border-black bg-oliv-lt">
                <ArrowLeft class="h-10 w-10 stroke-[2.5]"/>
            </button>
            <!-- {/if} -->
            <!-- {#if currentSlide !== slideshow.length - 1} -->
            <button on:click={nextSlide} class="ml-auto border-2 p-2 rounded-2xl border-black bg-oliv-lt">
                <ArrowRight class="h-10 w-10 stroke-[2.5]"/>
            </button>
            <!-- {/if} -->
        </div>
    </div>
    {/if}
</div>