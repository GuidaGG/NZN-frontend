import type { PageLoad } from './$types';
import { gql } from 'graphql-request';
import { client } from '$lib/api';
import { flattenJson } from '$lib/utils';

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

export const load = (async () => {
  try {
    const data = await client.request(query);
    // return data;
    return {
      homepage: flattenJson(data.homepage)
    }
  } catch (error) {
    console.error('Error fetching data:', error);
    // return [];
    return {
      data: []
    };
  }
}) satisfies PageLoad;