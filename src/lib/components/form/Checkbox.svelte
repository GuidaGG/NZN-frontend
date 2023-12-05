<script lang="ts">
	import type {Select} from "$lib/types.ts";
    import X from 'svelte-feathers/X.svelte';

    export let option: Select;
    export let group: number[]
    export let groupvalues: string[]

    let checked= false;
    let checkbox;
    
    $: updateGroup(checked)

    function updateGroup(checked:boolean) {
		const index = group.indexOf(option.id)
		if (checked) {
			if (index < 0) {
				group.push(option.id)
                groupvalues.push(option.attributes.value)
				group = group
                groupvalues = groupvalues
			}
		} else {
			if (index >= 0) {
				group.splice(index, 1)
                groupvalues.splice(index, 1)
				group = group
                groupvalues = groupvalues
			}
		}
	}
    
    function onKeyDown(e){
        if(e.keyCode == 13){
            checkbox.click()
        }
    }
</script>

<div class="flex items-center gap-2 relative text-sm">
    <div class="relative h-8">
        <input type="checkbox" name={option.attributes.value} value={option.id}
        class="appearance-none w-8 h-8  border-0 rounded-md bg-grun-dk 
        shrink-0  border-black cursor-pointer                    " 
        bind:checked={checked} {...$$restProps} bind:this={checkbox}
        on:keydown={onKeyDown}/>

        {#if checked }
           <X class="absolute -top-6 -left-6 h-20 w-20 stroke-[0.5] focus:outline-none" on:click={() => checkbox.click()} />
        {/if} 
    </div>
    <label for={option.attributes.value} class="text-[16px] 0 font-nznBold">{option.attributes.name}</label>
</div>
