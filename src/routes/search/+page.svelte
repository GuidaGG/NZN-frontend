<!-- Search.svelte -->
<script lang="ts">
  import { page } from '$app/stores';
	import { Search } from 'svelte-feathers';
	import Page from '$lib/components/Page.svelte';
  import SearchResult from '$lib/components/SearchResult.svelte';
  import { goto } from '$app/navigation';  
  export let data;

  $: searchQuery = '';
  $: searchResults = data.search?.results

  function searchPage(){
		let query = new URLSearchParams($page.url.searchParams.toString());
		query.set('search', searchQuery.toString());	
		goto(`/search?${query.toString()}`);
	}

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
    <div class=" sm:hidden px-2 h-12 sm:h-16 flex items-center py-10 ">
			<div class="flex gap-2 text-base font-nznBold items-center border border-black w-full rounded-full p-2">
				<Search class="cursor-pointer" on:click={() => searchPage()}/>
				<input bind:value={searchQuery} on:keydown={(e) => { if (e.keyCode === 13 || e.which === 13) {searchPage()}}} class={`grow bg-transparent placeholder:text-black focus:outline-none`} placeholder="Suchebegriff"/>
			</div>
		</div>
   

      {#if searchResults && (searchResults[0]?.hits.length  || searchResults[1]?.hits.length || searchResults[2]?.hits.length || searchResults[3]?.hits.length || searchResults[4]?.hits.length)}
        <h1 class="p-5">Suchergebnisse:</h1>
        <ul class="space-y-2">
          {#each searchResults as result}
            {#if result.hits.length }
              <li class="text-sm px-5">
                <span class="font-nznBold" >{getTypeTitle(result.indexUid).title}</span>
              </li>
              <ul class="flex flex-col md:flex-row gap-2 flex-wrap px-3 pb-5">
              {#each result.hits as hit}
                <SearchResult {hit} type={result.indexUid} />
              {/each}
              </ul>
            {/if}
          {/each}
        </ul>
        
      {:else if searchResults === undefined}
          <p class="min-h-screen"></p>
      {:else}
      <h1 class="p-5">Suchergebnisse:</h1>
      <p class="text-xl px-5">Oh nein, keine Ergebnisse! Versuche die Suche erneut und verwende andere Werte.</p>
      {/if}
        
  </div>
</Page>