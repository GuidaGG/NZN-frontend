<script lang="ts">
import type { Image } from "$lib/types";
import { config } from "$lib/config";

export let image: Image
export let size: "small" | "thumbnail" | "large" | "medium" | null = null
export let buttons = false;
export let count = 1;

$: url = size != null && image.formats[size].url ? image.formats[size].url : image.url

</script>

<img
    class={`object-cover ${buttons ? count > 1 ? 'w-auto pr-6' : 'w-auto' : 'w-full  min-w-full'} ${$$restProps.class}` }
    src={`${config.apiUrl}${url}`} 
    alt={image.alternativeText}
    loading="lazy"
/>

<!-- class="w-full min-w-full object-cover {$$restProps.class} " -->