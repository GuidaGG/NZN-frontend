<script lang="ts">
import type { Image } from "$lib/types";
import { config } from "$lib/config";

export let image: Image
export let size = null

const url = size != null && image.formats[size].url ? image.formats[size].url : image.url

</script>
    <img
        class="w-full min-w-full object-cover {$$restProps.class}"
        src={`${config.apiUrl}${url}`} 
        alt={image.alternativeText}
    />