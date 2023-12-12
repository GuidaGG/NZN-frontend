import { gql } from 'graphql-request';
import { client } from '$lib/api';
import { flattenJson} from '$lib/utils';

const BestPracticesQuery = gql`
    query getBestPractices($slug: String!) {
        bestPractices(filters: {slug: { eq: $slug}}, pagination: { limit: 1}){
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
                    member { 
                        data {
                            id
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

const MembersPreviewQuery= gql`
    query getMembers($id: ID!) {
        members(filters: {id: { eq: $id }}){
            data {
                id
                attributes { 
                    title
                    slug
                    agreement 
                    latitude
                    longitude
                    description
                    states {
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

export const load: import('./$types').PageLoad = (async ({ params }) => {
  try {
    const variables = {
        slug : params.slug
      }
    const bestPractice = await client.request(BestPracticesQuery, variables);
    let assignedMember = await bestPractice.bestPractices.data[0].attributes.member.data;
    if (Object.is(assignedMember, null)) {
        return {
            bestPractice:  flattenJson(bestPractice),
            member: null,
        }
    } else {
        const member = await client.request(MembersPreviewQuery, {id: assignedMember.id});
        return {
            bestPractice:  flattenJson(bestPractice),
            member: flattenJson(member),
        }
    }
  } catch (error) {
    console.error('Error fetching data:', error);
    return {
      data: []
    };
  }
}) 