import type { PageLoad } from './$types';
import { gql } from 'graphql-request';
import { client } from '$lib/api';
import { flattenJson } from '$lib/utils';

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
          gallery {
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
            title_file     
        }      
    }
  }
}
`
export const load: import('./$types').PageLoad = (async () => {

    try {
        const dataNews = await client.request(newsQuery);
        return {
          news: flattenJson(dataNews.posts)
        }
      } catch (error) {
        console.error('Error fetching data:', error);

        return {
          data: []
        };
      }
}) 