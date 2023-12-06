import { gql } from 'graphql-request';
import { client } from '$lib/api';
import { flattenJson} from '$lib/utils';
import { randomArray } from '$lib/utils.js';

const WorkMaterialsQuery= gql`
    query getWorkMaterials {
        workMaterials(pagination: { limit: -1}){
            data {
                id
                attributes { 
                    title
                    slug
                    author
                    description
                    file {
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


    const dataMaterials = await client.request(WorkMaterialsQuery)

    return {
        materials:  flattenJson(dataMaterials),
    }
  } catch (error) {
    console.error('Error fetching data:', error);
    return {
      data: []
    };
  }
}) 