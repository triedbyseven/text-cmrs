import { InMemoryCache } from '@apollo/client';
import { Query } from './typePolicies/Query';

const cache: InMemoryCache = new InMemoryCache({
  typePolicies: {
    Query: Query
  }
});

export default cache;