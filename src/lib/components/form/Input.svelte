<script lang="ts">
    export let label: string;
    export let name: string;
    export let hidden = false;
    export let required = false;
    export let value = '';
</script>

<div class="py-4" class:hidden={hidden}>
    <label for="{name}" class="block uppercase text-xs pb-1 relative">
        {label} 
        {#if required}
        <span class="text-grun-dk text-xl absolute -top-2">*</span>
        {/if}
    </label>
    <input id="{name}" class="bg-transparent w-full focus:bg-grun-lt h-10 px-1 text-[16px] focus:outline-0 focus:border rounded-md focus:border-black font-nznBold" bind:value {...$$restProps}/>
</div> 