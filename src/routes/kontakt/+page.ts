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
  }
  `

const formQuery = gql`
  query getFormData{
    states(pagination: { limit: -1}) {
          data{
            id
            attributes{
              name
              value
            }
          }
        }
        workAreas(pagination: { limit: -1}) { 
          data{
              id
              attributes{
                name
                value
              }
          }		
        }
        expertises(pagination: { limit: -1}) {
          data{
            id
            attributes{
              name
              value
            }
        }		
      }
      workTypes(pagination: { limit: -1}) {
        data{
            id
            attributes{
              name
              value
            }
        }		
      }
      contexts(pagination: { limit: -1}) {
        data{
            id
            attributes{
              name
              value
            }
        }		
      }
      organizationalGoals(pagination: { limit: -1}) { 
        data{
            id
            attributes{
              name
              value
            }
        }	
      }
      organizationalForms(pagination: { limit: -1}) { 
        data{
            id
            attributes{
              name
              value
            }
        }	
      }
      supports(pagination: { limit: -1}) {
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
    const form = await client.request(formQuery);
    return {
      page : flattenJson(page),
      form: form
    }
  } catch (error) {
    console.error('Error fetching data:', error);
    // return [];
    return {
      data: []
    };
  }
}) 