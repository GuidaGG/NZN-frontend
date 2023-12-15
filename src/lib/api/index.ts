import { GraphQLClient } from 'graphql-request';
import { config } from '../config';
import { MeiliSearch } from 'meilisearch'

export const client = new GraphQLClient(`${config.apiUrl}/graphql`);

export const searchClient = new MeiliSearch({
    host: 'http://49.13.77.99:7700',
    apiKey: 'tdg9hmRBUg7OrlRj63Z5XSJH4YrX7dizjNPF-3Q72qM',
  })
