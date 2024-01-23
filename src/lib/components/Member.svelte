<script lang="ts">
    import Image from "./Image.svelte";
	import type { MemberPreview, Select } from "$lib/types";
    import thumbnail_1 from '$lib/images/netzwerk-thumbnail-1.png';
    import thumbnail_2 from '$lib/images/netzwerk-thumbnail-2.png';
    import thumbnail_3 from '$lib/images/netzwerk-thumbnail-3.png';

    const thumbnails = [thumbnail_1, thumbnail_2, thumbnail_3];
    let randomIndex =  Math.floor(Math.random() * thumbnails.length);

    export let member: MemberPreview;
    export let image = false;
    export let location = false;

    function addCommas(value: string, index: number, array: Select[]){
        return (index < array.length - 1) ? `${value}, ` : value;
    }
    
</script>

<div class="font-nznBold">
    {#if image && member.image}
        <Image class="h-72" image={member.image} />
    {:else if image && !member.image}
        <div class="h-72">
            <img alt="Netzwerk-Thumbnail" src={thumbnails[randomIndex]} class="object-cover h-full">
        </div>
    {/if}
    <h3 class="pt-2 text-base pb-2">{member.title}</h3>
    {#if location}
    <div class="text-xs pt-2 pb-4">
        {#each member.states as state, index}
        <span>{addCommas(state.name, index, member.states)}</span>
        {/each}   
    </div>   
    {/if}
    <div class="text-xs pt-2 line-clamp-6"> {member.description} </div>
</div>
