<script lang="ts">
    export let label: string;
    export let name: string;
    export let value: string;
</script>

<div class="py-4">
    <label for="{name}" class="block text-xs uppercase pb-1">{label}</label>
    <textarea id="{name}" class="bg-transparent w-full focus:bg-grun-lt h-40 p-1 text-[16px] outline-0 font-nznBold focus:border focus:border-black"  maxlength="1800" bind:value></textarea>
</div> 