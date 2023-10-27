<script lang="ts">
    import { config } from "$lib/config";
	import type { ProjectPreview } from "$lib/types";

    export let project: ProjectPreview;
</script>

<a href="/netwerk/{project.slug}" class="w-full md:w-1/3 p-2 py-4 border-2 border-transparent hover:border-black rounded-xl font-semibold" >
   
    <img class="object-cover w-full h-40 font" src="{config.apiUrl + project.image?.url}" alt="{project.image?.alternativeText}">
    <h3 class="pt-2 text-base font-bold">{project.title}</h3>
    <div class="text-xs py-6">{project.state.name}</div>

    <div class="text-xs">
        {#each project.work_areas as area }
            <span> {area.name}, </span>
        {/each}     
    </div>
</a >
