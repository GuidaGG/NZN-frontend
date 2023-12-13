import { gql } from 'graphql-request';
import { client } from '$lib/api';
import { flattenJson} from '$lib/utils';
import { randomArray } from '$lib/utils.js';


const WorkMaterialsQuery= gql`
    query getWorkMaterials($slug: String!) {
        workMaterials(filters: {slug: { eq: $slug}}, pagination: { limit: 1}){
            data {
                id
                attributes { 
                    title
                    slug
                    author
                    description
                    url
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

export const load: import('./$types').PageLoad = (async ({ params }) => {
  try {
    const variables = {
        slug : params.slug
      }
    const material = await client.request(WorkMaterialsQuery, variables);

    return {
        material:  flattenJson(material),
    }
  } catch (error) {
    console.error('Error fetching data:', error);
    return {
      data: []
    };
  }
}) 