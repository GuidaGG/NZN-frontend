<script lang="ts">
    import type {SelectID} from '$lib/types'
	import Checkbox from './Checkbox.svelte';
    import Input from './Input.svelte';
    import Star from 'svelte-feathers/Star.svelte';

    export let group: number[] | string | string[] | boolean;
    export let other: number[] | string | string[] | boolean; 
    let groupvalues: string[] = [];
    export let options: SelectID[];
    export let label: string;
    export let name: string;
    export let other_value: string | null = null;
    export let required = false;



</script>
<div class="py-4 ">
    <fieldset name={name} id={name} class="scroll-mt-20">
        <legend class="uppercase text-xs pb-2 relative inline">
            {label}
            {#if required}
            <span class="text-grun-dk">
                <Star class="inline h-5 pb-2"/>
            </span>
            {/if}
        </legend>
        <div class="flex flex-col gap-3">
        {#each options.data as option}
    
        	<Checkbox {option}  bind:group bind:groupvalues/>
        {/each}  
        </div>
        {#if other_value && groupvalues.includes("other")}
            <Input name="{other_value}" bind:value={other} label="Sonstiges" />
        {/if}
    </fieldset>
</div>