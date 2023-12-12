<script lang="ts">
import type { Image } from '$lib/types';
import ImageComponent from './Image.svelte';
import { config } from '$lib/config';
export let gallery: Image[]

let currentImage = 0;


</script>

<div class="relative overflow-hidden">
    <div class="flex flex-col md:flex-row flex-wrap gap-5">
        {#each gallery as image}
        <img
            class="w-auto max-h-[50vh] object-cover "
            src={`${config.apiUrl}${image.url}`} 
            alt={image.alternativeText}
        />

        {/each}
    </div>
</div>