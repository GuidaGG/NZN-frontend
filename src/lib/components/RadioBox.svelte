<script lang="ts">
    import X from 'svelte-feathers/X.svelte';
    export let name: string;
    export let value: string;
    export let label: string
    export let selected: string

</script>

<div class="flex items-center gap-4 relative ">
    <div class="relative">
        <input id="green-checkbox" type="radio" {name} bind:group={selected} {value} class="
        appearance-none w-8 h-8 border-0 rounded-md bg-grun-dk 
        shrink-0  border-black cursor-pointer" />
        {#if (selected === value)}
            <X class="absolute -top-6 -left-6 h-20 w-20 stroke-[0.5]"/>
        {/if}
    </div>
    <label for="green-checkbox" class="font-bold">{label}</label>
</div>