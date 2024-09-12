import { useQuery } from "@apollo/client";

import { GET_ME } from "../graphql/queries";

const useMe = () => {
  const { data, loading, refetch } = useQuery(GET_ME, {
    fetchPolicy: 'cache-and-network',
  });

  const me = data?.me || {};
  const { id = null, username = '' } = me;

  return {id, username, loading, refetch}
};

export default useMe;