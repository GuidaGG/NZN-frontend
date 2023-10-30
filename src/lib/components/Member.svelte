<script lang="ts">
    import { config } from "$lib/config";
	import type { MemberPreview, Select } from "$lib/types";

    export let member: MemberPreview;
    export let image = false;
    export let location = false;

    function addCommas(value: string, index: number){
        return (index < member.work_areas.length - 1) ? `${value}, ` : value;
    }
</script>

<div class="font-bold">
    {#if image}
        <img class="object-cover w-full h-72" src="{config.apiUrl + member.image?.formats?.small?.url}" alt="{member.image?.alternativeText}">
    {/if}
    <h3 class="pt-2 text-base pb-2">{member.title}</h3>
    {#if location}
        {#each member.states as state}
            <div class="text-xs">{state.name}</div>
        {/each}     
    {/if}
    <div class="text-xs pt-2">
        {#each member.work_areas as area, index }
            <span>{addCommas(area.name, index)}</span>
        {/each}     
    </div>
</div>
