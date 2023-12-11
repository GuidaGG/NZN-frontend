
import { gql } from 'graphql-request';
import { client } from '$lib/api';
import { flattenJson} from '$lib/utils';

const pagesQuery = gql`
  query getPages($slug: String!){
    pages(filters: {slug: { eq: $slug }}){
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
  }`

export const load: import('./$types').PageLoad = (async ({ params, url }) => {
  try {
    const variables = {
      slug : params.slug
    }
    const page = await client.request(pagesQuery, variables);
    return {
      page : flattenJson(page)
    }
  } catch (error) {
      console.error('Error fetching data:', error);
    return {
      data: []
    };
  }
}) 