<!-- Search.svelte -->
<script>

    import { MeiliSearch } from 'meilisearch'
    
  let searchQuery = '';
  let searchResults = [];

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
  

  <div>
    <input bind:value={searchQuery} placeholder="Search..." />
    <button on:click={performSearch}>Search</button>

    {#if searchResults.length > 0}
      <ul>
        {#each searchResults as result}
          {#if result.hits.length }
            <li>{result.indexUid}</li>
            {#each result.hits as hit}
            <li>{hit.slug}</li>
            {/each}
          {/if}
        {/each}
      </ul>
    {:else}
      <p>No results found.</p>
    {/if}
    <pre>{JSON.stringify(searchResults, null, 2)}</pre> 
  </div>