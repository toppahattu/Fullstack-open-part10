import { ApolloClient, InMemoryCache } from '@apollo/client';


const createApolloClient = () => {
  const uri = 'https://beige-bottles-bake.loca.lt'
  return new ApolloClient({
    uri: `${uri}/graphql`,
    cache: new InMemoryCache(),
  });
};

export default createApolloClient;