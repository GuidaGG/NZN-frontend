<script lang="ts">
    import type { TextContent } from "$lib/types";
    export let content: TextContent
    export let size = "text-xl";
</script>

<div class="px-5 text-content">
    {#if content.title}
        <h1>{content.title}</h1>
    {/if}
    <div class={size}> { @html content.body}</div>
</div>