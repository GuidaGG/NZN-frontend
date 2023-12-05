import { gql } from 'graphql-request';
import { client } from '$lib/api/index.js';
import { error } from '@sveltejs/kit';
import type { RequestHandler } from './$types';
import { config } from '$lib/config';

const registerMember = gql`
 mutation CreateMember(
  $name: String!, 
  $agreement: Boolean!,
  $states: [ID]!,
  $city: String!, 
  $organizationalForms: [ID]!,
  $other_organizational_forms: String!,
  $workAreas: [ID]!,
  $other_work_areas: String!,
  $contexts: [ID]!,
  $other_contexts:String!,
  $description: String!,
  $email: String!,
  $website: String!,
  $contact_person: String!,
  $phone: String!, 
  $organizationalGoals: [ID]!,
  $other_organizational_goals: String!,
  $workTypes: [ID]!,
  $other_work_types: String!,
  $finances: String!,
  $expertises: [ID]!,
  $other_expertises: String!,
  $supports: [ID]!,
  $other_supports: String!,
  $special_info: String!,
 )
  {
   createMember(
    data: {
      title: $name,
      agreement: $agreement,
      states: $states,
      city: $city,
      organizational_forms: $organizationalForms,
      other_organizational_forms: $other_organizational_forms,
      work_areas: $workAreas,
      other_work_areas: $other_work_areas,
      context: $contexts,
      other_context: $other_contexts,
      description: $description,
      email: $email,
      website: $website,
      contact_person: $contact_person,
      phone: $phone,
      organisation_goals: $organizationalGoals,
      other_organisation_goals: $other_organizational_goals,
      work_types: $workTypes,
      other_work_types: $other_work_types,
      finances: $finances,
      expertise: $expertises,
      other_expertise: $other_expertises,
      support: $supports,
      other_support: $other_supports,
      special_info: $special_info
    }
  ) {
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
      }
    }
  }
}
`



export const POST: RequestHandler = async (event) => { 

    try {

      const formData = await event.request.json();

      const response = await fetch(`${config.apiUrl}/api/upload`, {
        method: 'post',
        body: formData
      })

      //file upload 
      /*const formData = await event.request.json();


      const response = await client.request(registerMember, formData);
*/
      return new Response(JSON.stringify({ success: true, message: "registration sucessfull" }), {
        status: 200,
        headers: { 'Content-Type': 'application/json' },
      });

    } catch (err) {
      return new Response(JSON.stringify({ success: false, message: 'Internal Server Error', error: err }), {
        status: 500,
        headers: { 'Content-Type': 'application/json' },
      });
      
    } 


}