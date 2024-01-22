<script lang="ts">
  import { onMount } from 'svelte';
  import { ArrowRight, Download } from 'svelte-feathers';
  import type { MaterialPreview } from "$lib/types";

  export let index: number;
  export let materialGroup: MaterialPreview[];
  // console.log(materialGroup);
  

  let active: boolean;
  let order: number;
  let length: number;

  const toggleVisibility = () => {
    if (active) {
      active = false;
    } else {
      active = true;
    }
  }
  
  onMount(() => {
    active = false;
    order = index + 1;
    length = materialGroup.length;
  })

  // TO CHECK !!!
  // const donwnloadPdf = (url: string, name: string) => {    
  //   const anchor = document.createElement('a');
  //   anchor.href = `https://admin.netzwerkzwischennutzung.de${url}`;
  //   anchor.download = name;
  //   document.body.appendChild(anchor);
  //   anchor.click();
  //   document.body.removeChild(anchor);
  // }
  
</script>


<div class="font-nznBold">

  <button on:click={toggleVisibility} class="flex justify-between items-center w-full text-base py-3 px-5 border-b border-black break-all">
    <span class="pointer-events-none">
      {#if typeof order !== 'undefined'} {order}. {/if}
      {materialGroup[0].category.name}
    </span>
    <span class="pointer-events-none" style={`transform: rotate(${active ? 90 : 0}deg)`}>
      <ArrowRight class="self-center stroke-[2.5] h-10 w-10"/>
    </span>
  </button>

  {#if active}
    {#each materialGroup as material, index}
      {#if material.file}
      <a href="/arbeitsmaterialen/{material.slug}" class={`flex p-5 ${index === length-1 ? 'border-b border-black' : ''} hover:bg-oliv-dk`}>
        <div class="w-full flex-col">
          <h2 class="text-base mb-2">{order}.{index + 1} {material.title}</h2>
          <p class="mb-4 pr-2 line-clamp-4">{material.description}</p>
          {#if material.url}
            <div class="pb-4">
              <a href={material.url} target="_blank" class="underline break-all">
                {material.url}
              </a>
            </div>
          {/if}
          <p class="uppercase">{material.author}</p>
        </div>
        <div class="flex flex-col justify-end">
          <!-- <button on:click={() => donwnloadPdf(material.file.url, material.file.name)}> -->
          <a href={`https://admin.netzwerkzwischennutzung.de${material.file?.url}`} class="hover:border hover:border-black" download target="_blank">
            <Download class="self-center stroke-[2.5] h-10 w-10"/>
          </a>
        </div>
      </a>
      {:else}
        <div class={`w-full flex-col p-5 ${index === length-1 ? 'border-b border-black' : ''}`}>
          <h2 class="text-base mb-2">{order}.{index + 1} {material.title}</h2>
          <p class="pr-2 mb-4">{material.description}</p>
          {#if material.url}
            <div class="pb-4">
              <a href={material.url} target="_blank" class="underline break-all">
                {material.url}
              </a>
            </div>
          {/if}
          <p class="uppercase">{material.author}</p>
        </div>
      {/if}
    {/each}
  {/if}  

</div>