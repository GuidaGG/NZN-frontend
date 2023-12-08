

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
      const variables = {
        slug : params.slug
      }
      const data = await client.request(MembersQuery, variables);
      return {
        member : flattenJson(data)
      }
    } catch (error) {
      console.error('Error fetching data:', error);
      // return [];
      return {
        data: []
      };
    }
  }) 