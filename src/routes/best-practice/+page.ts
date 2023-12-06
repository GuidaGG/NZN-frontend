import { gql } from 'graphql-request';
import { client } from '$lib/api';
import { flattenJson} from '$lib/utils';

const PageQuery = gql`
    query getPages{
        pages(filters: {slug: { eq: "best-practice" }}, pagination: { limit: 1}){
            data{
                id
                attributes{ 
                    title
                    slug
                    content {
                        __typename
                        ... on ComponentTextTextContent {
                            title
                            body
                        }
                        ... on ComponentImageImage {
                            image {
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
                        ... on ComponentImageSlideshow {
                            images {
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
                }
            }
        }
    }
`


export const load: import('./$types').PageLoad = (async () => {
  try {

    const dataPage = await client.request(PageQuery);

    return {
        practices_page: flattenJson(dataPage),
    }
  } catch (error) {
    console.error('Error fetching data:', error);
    return {
      data: []
    };
  }
}) 