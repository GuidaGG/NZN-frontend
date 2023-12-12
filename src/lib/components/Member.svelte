<script lang="ts">
    import Image from "./Image.svelte";
	import type { MemberPreview, Select } from "$lib/types";

    export let member: MemberPreview;
    export let image = false;
    export let location = false;

    function addCommas(value: string, index: number, array: Select[]){
        return (index < array.length - 1) ? `${value}, ` : value;
    }
    // console.log(member);
    
</script>

<div class="font-nznBold">
    {#if image && member.image}
        <Image class="h-72" image={member.image} />
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
