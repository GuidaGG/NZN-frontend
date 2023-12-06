import { gql } from 'graphql-request';
import { client } from '$lib/api';
import { flattenJson} from '$lib/utils';
import { randomArray } from '$lib/utils.js';

const PageQuery = gql`
    query getPages{
        pages(filters: {slug: { eq: "arbeitsmaterialien" }}, pagination: { limit: 1}){
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

const WorkMaterialsQuery= gql`
    query getWorkMaterials {
        workMaterials(pagination: { limit: -1}){
            data {
                id
                attributes { 
                    title
                    slug
                    author
                    description
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

export const load: import('./$types').PageLoad = (async ({ params, url }) => {
  try {


    const dataPage = await client.request(PageQuery);
    const dataMaterials = await client.request(WorkMaterialsQuery)

    return {
        materials_page: flattenJson(dataPage),
        materials:  flattenJson(dataMaterials),
    }
  } catch (error) {
    console.error('Error fetching data:', error);
    return {
      data: []
    };
  }
}) 