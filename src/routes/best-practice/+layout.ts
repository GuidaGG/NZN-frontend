import { gql } from 'graphql-request';
import { client } from '$lib/api';
import { flattenJson} from '$lib/utils';

const AllBestPracticesQuery = gql`
    query getBestPractices {
        bestPractices(pagination: { limit: -1}){
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

const BestPracticesQuery = gql`
    query getBestPractices( $page: Int!) {
        bestPractices(pagination: { page: $page, pageSize: 9 }){
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

export const load: import('./$types').PageLoad = (async ({ params, url }) => {
  try {

    const page = url.searchParams.get('page') ? url.searchParams.get('page')  : 0
    const dataAllPractices = await client.request(AllBestPracticesQuery)
    const dataPractices = await client.request(BestPracticesQuery, {page: parseInt(page)})
    const pagination = dataPractices.bestPractices.meta

    return {
        practices:  flattenJson(dataPractices),
        allpractices:  flattenJson(dataAllPractices),
        pagination: pagination
    }
  } catch (error) {
    console.error('Error fetching data:', error);
    return {
      data: []
    };
  }
}) 