import { ApolloClient, InMemoryCache } from '@apollo/client';
import Constants from 'expo-constants';


const createApolloClient = () => {
  const uri = Constants.expoConfig.extra.apolloUri
  return new ApolloClient({
    uri: `${uri}/graphql`,
    cache: new InMemoryCache(),
  });
};

export default createApolloClient;