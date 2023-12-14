<!-- Search.svelte -->
<script lang="ts">
  import { MeiliSearch } from 'meilisearch'
  import { page } from '$app/stores';  
  import { Search } from 'svelte-feathers';
	import { dataset_dev } from 'svelte/internal';
	import Page from '$lib/components/Page.svelte';
  import SearchResult from '$lib/components/SearchResult.svelte';

  export let data;
 
  $: searchResults = data.search?.results

  
  const getTypeTitle = (type: string, element?: any | null) => {
    switch(type){
      case "post":
        return { 
          title: "News",
        }
      case "member":
        return { 
            title: "Netzwerk",
          }
      case "work-material":
      return { 
          title: "Arbeitmaterialen",
        }
      case "page": 
        return { 
          title: "Seite",
        }
      case "best-practice":
        return { 
            title: "Best Practice",
          }
      default: 
      return { 
            title: "",

          } 
    }
  }

  </script>
<Page >
  <div class="text-base">
      <h1 class="p-5">Suchergebnisse:</h1>

      {#if searchResults && (searchResults[0]?.hits.length  || searchResults[1]?.hits.length || searchResults[2]?.hits.length || searchResults[3]?.hits.length || searchResults[4]?.hits.length)}
        <ul class="space-y-2">
          {#each searchResults as result}
            {#if result.hits.length }
              <li class="text-sm px-5">
                <span class="font-nznBold" >{getTypeTitle(result.indexUid).title}</span>
              </li>
              <ul class="flex gap-2 flex-wrap px-3 pb-5">
              {#each result.hits as hit}
                <SearchResult {hit} type={result.indexUid} />
              {/each}
              </ul>
            {/if}
          {/each}
        </ul>
        
      {:else}
          <p class="text-xl px-5">Oh nein, keine Ergebnisse! Versuche die Suche erneut und verwende andere Werte.</p>
      {/if}
        
  </div>
</Page>