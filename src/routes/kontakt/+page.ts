import { gql } from 'graphql-request';
import { client } from '$lib/api';
import { flattenJson} from '$lib/utils';

const kontaktQuery = gql`
  query getPages{
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