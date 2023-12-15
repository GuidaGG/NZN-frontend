import { GraphQLClient } from 'graphql-request';
import { config } from '../config';
import { MeiliSearch } from 'meilisearch'

export const client = new GraphQLClient(`${config.apiUrl}/graphql`);

export const searchClient = new MeiliSearch({
    host: 'https://search.netzwerkzwischennutzung.de',
    apiKey: 'tdg9hmRBUg7OrlRj63Z5XSJH4YrX7dizjNPF-3Q72qM',
  })
