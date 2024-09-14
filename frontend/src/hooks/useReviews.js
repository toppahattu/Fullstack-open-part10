import { useQuery } from "@apollo/client";

import { GET_REVIEWS } from "../graphql/queries";

const useReviews = (variables) => {
  const { data, loading } = useQuery(GET_REVIEWS, {
    fetchPolicy: "cache-and-network",
    variables,
  });

  const reviews = data ? data.repository.reviews.edges.map(edge => edge.node) : null;
  const loadingReviews = loading;

  return { reviews, loadingReviews };
};

export default useReviews;