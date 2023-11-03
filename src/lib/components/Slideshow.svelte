<script lang="ts">
import type { Image } from '$lib/types';
import { onMount, onDestroy } from 'svelte';
import ImageComponent from './Image.svelte';

export let slideshow: Image[]

let currentSlide = 0;
let autoPlay = true;

const nextSlide = (): void => {
    currentSlide = (currentSlide + 1) % slideshow.length;
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

<div class="relative overflow-hidden">
    <div class="flex transition-transform duration-500 ease-in-out h-[58vh]" style="transform: translateX(-{currentSlide * 100}%)">
        {#each slideshow as image}
            <ImageComponent {image} />
        {/each}
    </div>
</div>