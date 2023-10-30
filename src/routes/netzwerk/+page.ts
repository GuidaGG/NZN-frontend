
import { gql } from 'graphql-request';
import { client } from '$lib/api';
import { flattenJson} from '$lib/utils';
import { randomArray } from '$lib/utils.js';

const netzwerkQuery = gql`
{
    netzwerk{
    data {
        id
        attributes { 
            title
            slug
            content { 
            title
            body
        }
        }
        }
    }
}
`

const MembersPreviewQuery= gql`
    query getMembers($sort: String!) {
        members(sort: [$sort]){
            data {
                id
                attributes { 
                    title
                    slug
                    agreement 
                    states {
                        data {
                            attributes {
                            name
                            value
                            }
                        }
                    }
                    work_areas{
                        data {
                            attributes {
                            name
                            value
                            }
                        }
                    }
                    image {
                        data {
                            id
                            attributes{
                                name
                                alternativeText
                                url
                                formats
                            }
                        }
                    }
                }
            }
            meta { 
                pagination {
                    page
                    pageSize
                    pageCount
                }
            }
        }
    }
`

export const load: import('./$types').PageLoad = (async ({ params, url }) => {
  try {
    const filter = url.searchParams.get('sort') ? url.searchParams.get('sort')  : 'title'

    const variables = {
        sort : filter ,
    }
    const dataPage = await client.request(netzwerkQuery);
    const dataMembers = await client.request(MembersPreviewQuery, variables)

    const organizedMembers = filter !== "description" ? flattenJson(dataMembers.members) : randomArray(flattenJson(dataMembers.members));
   
    return {
        netzwerk: flattenJson(dataPage.netzwerk),
        members:  organizedMembers,
    }
  } catch (error) {
    console.error('Error fetching data:', error);
    return {
      data: []
    };
  }
}) satisfies PageLoad;