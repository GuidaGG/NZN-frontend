<script lang="ts">
    import type {Select} from '$lib/types'
	import Checkbox from './Checkbox.svelte';
    import Input from './Input.svelte';

    export let group: string[]
    export let options: Select[];
    export let label: string;
    export let name: string;
    export let other_value: string | null = null
    export let required = false



</script>

<div class="py-4">
    <fieldset name={name} >
        <legend class="uppercase text-xs pb-2 relative">
            {label}
            {#if required}
            <span class="text-grun-dk text-xl absolute -top-2">*</span>
            {/if}
        </legend>
        <div class="flex flex-col gap-3">
        {#each options as option}
        	<Checkbox {option}  bind:group/>
        {/each}  
        </div> 
        {#if other_value && group.includes("other")}
            <Input name="{other_value}" label="Sonstiges" />
        {/if}
    </fieldset>
</div>