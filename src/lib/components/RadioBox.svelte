<script lang="ts">
    export let name: string;
    export let value: string;
    export let label: string
    export let selected: string
</script>

<div class="flex items-center gap-4">
    <input id="green-checkbox" type="radio" {name} bind:group={selected} {value} class="
    appearance-none w-8 h-8 border-0 rounded-md bg-grun-dk 
    shrink-0 checked:border-2 border-black cursor-pointer" />
    <label for="green-checkbox" class="font-bold">{label}</label>
</div>