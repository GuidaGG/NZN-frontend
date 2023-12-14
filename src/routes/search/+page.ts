
import { searchClient } from '$lib/api';
import { getSearchParams } from '$lib/utils';


export const load: import('./$types').PageLoad = (async (params, url) => {

    try {
        const searchQuery = getSearchParams(params)
        let response;
        if(searchQuery){
          // const response = await index.search(searchQuery);
                response = await searchClient.multiSearch({queries: [
                
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
            }
            else {
                response = []
            }
        return {
           search: response
        }
      } catch (error) {
        console.error('Error fetching data:', error);

        return {
          data: []
        };
      }
});