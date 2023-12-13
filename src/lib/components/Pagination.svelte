<script lang="ts">
    import type { Pagination } from "$lib/types";
    import ArrowLeft from 'svelte-feathers/ArrowLeft.svelte';
	import ArrowRight from 'svelte-feathers/ArrowRight.svelte';
    import { page } from "$app/stores";
    import { goto } from "$app/navigation";
    export let pagination: Pagination

    function gotoPage(page: number){
		let query = new URLSearchParams($page.url.searchParams.toString());
		query.set('page', page.toString());	
		goto(`?${query.toString()}`);
	}
	
</script>

{#if pagination.pageCount > 1}
<div class="w-full">
    <div class="flex gap-3 text-base m-auto w-min items-center">
        <div class="w-12">
        {#if pagination.page > 1}
            <ArrowLeft class="w-12 h-12 cursor-pointer" on:click="{() => { gotoPage(pagination.page-1)}}"/>
        {/if}
        </div>
        {#each Array(pagination.pageCount) as value, index}
           <div class="cursor-pointer" on:keydown={() => { gotoPage(index+1)}} on:click="{() => { gotoPage(index+1)}}" class:font-nznBold={pagination.page === index+1}>{index+1}</div>
        {/each}
        <div class="w-12">                  
        {#if pagination.page < pagination.pageCount}
            <ArrowRight class="w-12 h-12 cursor-pointer" on:click="{() => { gotoPage(pagination.page+1)}}" />
        {/if}
        </div>
    </div>
</div>
{/if}