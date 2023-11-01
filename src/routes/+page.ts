import type { PageLoad } from './$types';
import { gql } from 'graphql-request';
import { client } from '$lib/api';
import { flattenJson } from '$lib/utils';

const homeQuery = gql`
  {
    homepage {
      data {
        id
        attributes {
          title
          slug
          slideshow {
            data {
              id
              attributes {
                name
                alternativeText
                url
                formats
              }
            }
          }
          content {
            title
            body
          }
        }
      }
    }
  }
`

const newsQuery = gql`
  {
    posts {
      data {
        id
        attributes { 
          title
          slug
        
          content {
            title
            body
          }
          publishedAt
        }
      }
    }
  }
`

export const load = (async () => {
  try {
    const dataPage = await client.request(homeQuery);
    const dataNews = await client.request(newsQuery);
    // return data;
    return {
      homepage: flattenJson(dataPage.homepage),
      news: flattenJson(dataNews.posts)
    }
  } catch (error) {
    console.error('Error fetching data:', error);
    // return [];
    return {
      data: []
    };
  }
}) satisfies PageLoad;