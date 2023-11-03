<script lang="ts">
    import Image from "./Image.svelte";
	import type { MemberPreview, Select } from "$lib/types";

    export let member: MemberPreview;
    export let image = false;
    export let location = false;

    function addCommas(value: string, index: number, array: Select[]){
        return (index < array.length - 1) ? `${value}, ` : value;
    }
</script>

<div class="font-bold">
    {#if image}
        <Image class="h-72" image={member.image} />
    {/if}
    <h3 class="pt-2 text-base pb-2">{member.title}</h3>
    {#if location}
    <div class="text-xs pt-2">
        {#each member.states as state, index}
        <span>{addCommas(state.name, index, member.states)}</span>
        {/each}   
    </div>   
    {/if}
    <div class="text-xs pt-2">
        {#each member.work_areas as area, index }
            <span>{addCommas(area.name, index, member.work_areas)}</span>
        {/each}     
    </div>
</div>
