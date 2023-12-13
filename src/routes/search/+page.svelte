<!-- Search.svelte -->
<script lang="ts">
  import { MeiliSearch } from 'meilisearch'
  import { page } from '$app/stores';  
  import { Search } from 'svelte-feathers';

  $: searchQuery = getSearchParam($page)
  $: searchResults = []

  $: performSearch(searchQuery)

  const getSearchParam = (page)  => {
    const query = new URLSearchParams(page.url.searchParams.toString());
    const searchQuery = query.get('search')
    return searchQuery
  }

  const getTypeTitle = (type: string) => {
    switch(type){
      case "post":
        return { 
          title: "News",
          path: "news"
        }
      case "member":
        return { 
            title: "Netzwerk",
            path: "netzwerk"
          }
      case "work-material":
      return { 
          title: "Arbeitmaterialen",
          path: "arbeitmaterialen"
        }
      case "page": 
        return { 
          title: "Seite",
          path: ""
        }
      case "best-practice":
        return { 
            title: "Best Practice",
            path: "best-practice"
          }
      default: 
      return { 
            title: "",
            path: ""
          } 
    }
  }

  const client = new MeiliSearch({
    host: 'http://49.13.77.99:7700',
    apiKey: 'tdg9hmRBUg7OrlRj63Z5XSJH4YrX7dizjNPF-3Q72qM',
  })

  const performSearch = async () => {
    try {
        const index = await client.getIndex("post")
       // const response = await index.search(searchQuery);
       const response = await client.multiSearch({queries: [
      
        {
            indexUid: 'post',
            q: searchQuery,
            limit: 10,
        },
        {
            indexUid: 'member',
            q: searchQuery,
            limit: 10,
        },
        {
            indexUid: 'page',
            q: searchQuery,
            limit: 10,
        },
        {
            indexUid: 'work-material',
            q: searchQuery,
            limit: 10,
        },
        {
            indexUid: 'best-practice',
            q: searchQuery,
            limit: 10,
        }
 
       ]})
      searchResults = response.results;
    } catch (error) {
      console.error('MeiliSearch error:', error);
    }
  };
  </script>
  

  <div class="p-5 text-base">
      <h1>Suchergebnisse:</h1>
      {#if searchResults[0]?.hits.length  || searchResults[1]?.hits.length || searchResults[2]?.hits.length || searchResults[3]?.hits.length || searchResults[4]?.hits.length}
        <ul class="space-y-2">
          {#each searchResults as result}
            {#if result.hits.length }
              <li class="text-sm">{getTypeTitle(result.indexUid).title}</li>
                <ul class="space-y-2">
              {#each result.hits as hit}
                <li><a href="{getTypeTitle(result.indexUid).path}/{hit.slug}">{hit.title}</a></li>
              {/each}
              </ul>
            {/if}
          {/each}
        </ul>
        
      {:else}
          <p class="text-xl">Oh nein, keine Ergebnisse! Versuche die Suche erneut und verwende andere Werte.</p>
      {/if}
    
  </div>