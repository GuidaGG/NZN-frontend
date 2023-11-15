<script lang="ts">
    import type {Select} from '$lib/types'

    export let options: Select[];
    export let label: string;
    export let name: string;

</script>

<div class="py-2">
    <label for="{name}" class="block">{label}</label>
    <select class="block w-full bg-transparent h-10 focus:bg-oliv-dk border border-black rounded-md" name="{name}" id="{name}">
        {#each options as option}
        <option class="hover:bg-red-200" value="{option.value}">{option.name}</option>
        {/each}
    </select>
</div>