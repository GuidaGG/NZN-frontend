import { gql } from 'graphql-request';
import { client } from '$lib/api';
import { flattenJson} from '$lib/utils';

const kontaktQuery = gql`
  query getContactPage{
        pages(filters: {slug: { eq: "kontakt" }}){
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
                        ... on ComponentTextContactData {
                            description
                            website
                            contact_person
                            phone_number
                            email
                            steuer 
                        }
                    }
                }
            }
        }
        states{
          data{
            id
            attributes{
              name
              value
            }
          }
        }
        workAreas{ 
          data{
              id
              attributes{
                name
                value
              }
          }		
        }
        expertises{
          data{
            id
            attributes{
              name
              value
            }
        }		
      }
      workTypes{
        data{
            id
            attributes{
              name
              value
            }
        }		
      }
      contexts {
        data{
            id
            attributes{
              name
              value
            }
        }		
      }
      organizationalGoals{ 
        data{
            id
            attributes{
              name
              value
            }
        }	
      }
      organizationalForms{ 
        data{
            id
            attributes{
              name
              value
            }
        }	
      }
      supports {
        data{
            id
            attributes{
              name
              value
            }
        }	
      }
    }
  `

export const load: import('./$types').PageLoad = (async () => {
  try {

    const page = await client.request(kontaktQuery);
    return {
      page : flattenJson(page)
    }
  } catch (error) {
    console.error('Error fetching data:', error);
    // return [];
    return {
      data: []
    };
  }
}) 