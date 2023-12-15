

import { gql } from 'graphql-request';
import { client } from '$lib/api';
import { flattenJson} from '$lib/utils';

const MembersQuery= gql`
    query getMembers($slug: String!) {
        members(filters: {slug: { eq: $slug }}){
            data {
                id
                attributes {
                    title
                    agreement 
                    description
                    states {
                        data {
                            attributes {
                            name
                            value
                            }
                        }
                    }
                    city 
                    organizational_forms{
                        data {
                            attributes {
                            name
                            value
                            }
                        }
                    }
                    other_organizational_forms
                    work_areas{
                        data {
                            attributes {
                            name
                            value
                            }
                        }
                    }
                    other_work_areas
                    context{
                        data {
                            attributes {
                            name
                            value
                            }
                        }
                    }
                    other_context
                    email
                    website
                    contact_person
                    phone
                    organisation_goals{
                        data {
                            attributes {
                            name
                            value
                            }
                        }
                    }
                    other_organisation_goals
                    work_types{
                        data {
                            attributes {
                            name
                            value
                            }
                        }
                    }
                    other_work_types
                    finances
                    expertise{
                        data {
                            attributes {
                            name
                            value
                            }
                        }
                    }
                    other_expertise
                    support{
                        data {
                            attributes {
                            name
                            value
                            }
                        }
                    }
                    other_support
                    special_info
                    image {
                        data {
                            id
                            attributes{
                                name
                                alternativeText
                                url
                                formats
                                caption
                            }
                        }
                    }
                    logo {
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
                    bestPractices{
                        data{
                            id
                         
                        }
                    }
                }
            }
          
        }
    }
`

const BestPracticesQuery = gql`
    query getBestPractices($id: [ID]!) {
        bestPractices(filters: {id: { in: $id }}){
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

        }
    }
`

export const load: import('./$types').PageLoad = (async ({ params, url }) => {
    try {
      const variables = {
        slug : params.slug
      }
      const data = await client.request(MembersQuery, variables);
      let practices = []

      const practiceIds = data.members.data[0].attributes.bestPractices
      const IDs = [] 
      if(practiceIds) {
        for (const item of practiceIds.data) {
            IDs.push(item.id)
          }
       practices = await client.request(BestPracticesQuery, {id: IDs});
      }
      
      return {
        member : flattenJson(data),
        practices: flattenJson(practices)
      }
    } catch (error) {
      console.error('Error fetching data:', error);
      // return [];
      return {
        data: []
      };
    }
  }) 