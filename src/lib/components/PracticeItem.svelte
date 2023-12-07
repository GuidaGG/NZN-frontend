<script lang="ts">
  import Image from "./Image.svelte";
  import type { PracticePreview } from "$lib/types";

  export let practice: PracticePreview;
  export let image = false;
  // export let location = false;
  
</script>

<div class="font-nznBold">
  
  {#if image && practice.gallery.length}
    <div class="text-base pt-2 line-clamp-6"> {practice.title}</div>
    <h3 class="pt-2 text-xl pb-2">{practice.header}</h3> 
    <Image class="h-96" image={practice.gallery[0]} />
  {:else}
    <h3 class="pt-2 text-base">{practice.header}</h3> 
    <div class="text-xs pt-1 line-clamp-6"> {practice.title}</div>
  {/if}
</div>
