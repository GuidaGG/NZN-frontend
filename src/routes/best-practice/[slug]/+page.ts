import { gql } from 'graphql-request';
import { client } from '$lib/api';
import { flattenJson} from '$lib/utils';

const BestPracticesQuery = gql`
    query getBestPractices($slug: String!) {
        bestPractices(filters: {slug: { eq: $slug}}, pagination: { limit: 1}){
            data {
                id
                attributes { 
                    title
                    slug
                    header
                    upper_content
                    main_content
                    sidebar
                    gallery {
                        data {
                            id 
                            attributes { 
                                url
                                formats
                                alternativeText
                                name
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
    const material = await client.request(BestPracticesQuery, variables);

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