<!-- Search.svelte -->
<script>

    import { MeiliSearch } from 'meilisearch'
    
  let searchQuery = '';
  let searchResults = [];

  const client = new MeiliSearch({
    host: 'http://127.0.0.1:7700',
    apiKey: 'K5nY2psKG9MnEChXBIldDxcppdfuDMT9KkaNKq5iDjU',
  })

  const performSearch = async () => {
    try {
        const index = await client.getIndex("post")
       // const response = await index.search(searchQuery);
       const response = await client.multiSearch({queries: [
      
        {
            indexUid: 'post',
            q: searchQuery,
            limit: 5,
        },
        {
            indexUid: 'project',
            q: searchQuery,
            limit: 5,
        },
 
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
   <pre>{JSON.stringify(searchResults, null, 2)}</pre> 
    {#if searchResults.length > 0}
      <ul>
        {#each searchResults as result (result.id)}
          <li>{result.title}</li>
          <!-- Display other relevant data -->
        {/each}
      </ul>
    {:else}
      <p>No results found.</p>
    {/if}
  </div>