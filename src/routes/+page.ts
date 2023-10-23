import type { PageLoad } from './$types';
import { gql } from 'graphql-request';
import { client } from '$lib/api';

const query = gql`
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

export const load = (async () => {
  try {
    const data = await client.request(query);
    return data;
  } catch (error) {
    console.error('Error fetching data:', error);
    // return [];
    return {
      data: []
    };
  }
}) satisfies PageLoad;