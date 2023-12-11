<script lang="ts">
import type { Image } from '$lib/types';
import ImageComponent from './Image.svelte';

export let gallery: Image[]

let currentImage = 0;


</script>

<div class="relative overflow-hidden">
    <div class="flex flex-col md:flex-row gap-5 relative flex-wrap">
        {#each gallery as image}
            <ImageComponent {image} size="large" class="md:max-w-[30%] min-w-0 w-auto"/>
        {/each}
    </div>
</div>