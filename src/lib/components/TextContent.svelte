<script lang="ts">
    import type { TextContent } from "$lib/types";
    export let content: TextContent
    export let size = "text-xl";
    import { page } from '$app/stores';
    if ($page.url.pathname === "/best-practice") size = "text-base";
</script>

<div class="px-5 pt-10 text-content">
    {#if content.title}
        <h1>{content.title}</h1>
    {/if}
    <div class="break-word {size}"> { @html content.body}</div>
</div>