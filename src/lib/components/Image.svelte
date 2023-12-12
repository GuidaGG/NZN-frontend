<script lang="ts">
import type { Image } from "$lib/types";
import { config } from "$lib/config";

export let image: Image
export let size: "small" | "thumbnail" | "large" | "medium" | null = null
export let buttons = false;

$: url = size != null && image.formats[size].url ? image.formats[size].url : image.url

</script>

<img
    class={`w-full object-cover ${buttons ? 'min-w-[90%] pr-6' : 'min-w-full'} ${$$restProps.class}`}
    src={`${config.apiUrl}${url}`} 
    alt={image.alternativeText}
/>

<!-- class="w-full min-w-full object-cover {$$restProps.class} " -->