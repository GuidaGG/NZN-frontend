<script lang="ts">
    import type { Select } from "$lib/types.ts";

    export let values: Select[];
    export let label: string;
</script>

<div class="flex flex-col md:flex-row md:gap-5 pb-5 text-xs w-full">
    <div class="uppercase min-w-[200px]">{label}</div>
    <ul class="grow">
        {#each values as value}
        <li class="break-words">{value.name}</li>	
        {/each}
    </ul>
</div>