import { useQuery } from "@apollo/client";

import { GET_SINGLE_REPOSITORY } from "../graphql/queries";

const useSingleRepository = (variables) => {
  const { data, loading } = useQuery(GET_SINGLE_REPOSITORY, {
    fetchPolicy: "cache-and-network",
    variables,
  });

  const repository = data ? data.repository : null;

  return { repository, loading };
};

export default useSingleRepository;