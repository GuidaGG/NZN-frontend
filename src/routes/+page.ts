import type { PageLoad } from './$types';
import { gql } from 'graphql-request';
import { client } from '$lib/api';
import { flattenJson } from '$lib/utils';

const homeQuery = gql`
    query getPages{
        pages(filters: {slug: { eq: "startseite" }}, pagination: { limit: 1}){
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

const newsQuery = gql`
  {
    posts( sort: "publishedAt:desc") {
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
      homepage: flattenJson(dataPage),
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