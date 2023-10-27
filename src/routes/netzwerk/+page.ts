import type { PageLoad } from './$types';
import { gql } from 'graphql-request';
import { client } from '$lib/api';
import { flattenJson} from '$lib/utils';
const netzwerkQuery = gql`
{
    netzwerk{
    data {
        id
        attributes { 
            title
            slug
            content { 
            title
            body
        }
        }
        }
    }
}
`

const projectsPreviewQuery = gql`
{
    projects{
    data {
        id
        attributes { 
            title
            slug
            agreement 
             state {
                data {
                    attributes {
                    name
                    value
                    }
                }
            }
            work_areas{
                data {
                    attributes {
                    name
                    value
                    }
                }
            }
            image {
                data {
                    id
                    attributes{
                        name
                        alternativeText
                        url
                    }
                }
            }
        }
    }
  }
}
`

export const load = (async () => {
  try {
    const dataPage = await client.request(netzwerkQuery);
    const dataProjects = await client.request(projectsPreviewQuery);
    return {
        netzwerk: flattenJson(dataPage.netzwerk),
        projects:  flattenJson(dataProjects.projects)
    }
  } catch (error) {
    console.error('Error fetching data:', error);
    return {
      data: []
    };
  }
}) satisfies PageLoad;