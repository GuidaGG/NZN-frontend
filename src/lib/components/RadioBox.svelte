<script lang="ts">
    import X from 'svelte-feathers/X.svelte';
    export let name: string;
    export let value: number[] | string | string[] | boolean;
    export let label: string
    export let selected: number[] | string | string[] | boolean 

</script>

<div class="flex items-center gap-4 relative ">
    <div class="relative">
        <input id="green-checkbox" type="radio" {name} bind:group={selected} {value} class="
        appearance-none w-8 h-8 border-0 rounded-md bg-grun-dk 
        shrink-0  border-black cursor-pointer"/>
        {#if (selected === value)}
            <X class="absolute -top-6 -left-6 h-20 w-20 stroke-[0.5] focus:outline-none"/>
        {/if}
    </div>
    <label for="green-checkbox" class="font-nznBold">{label}</label>
</div>