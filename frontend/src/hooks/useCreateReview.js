import { useMutation } from "@apollo/client";

import { CREATE_REVIEW } from "../graphql/mutations";

const useCreateReview = () => {
  const [createReview, result] = useMutation(CREATE_REVIEW);

  const makeReview = async ({ ownerName, repositoryName, rating, text }) => {
    try {
      const { data } = await createReview({
        variables: {
          review: {
            ownerName,
            repositoryName,
            rating: Number(rating),
            text,
          },
        },
      });
      return data;
    } catch (e) {
      console.error('reviewing error', e)
      return { error: e.message }
    }
  };

  return [makeReview, result];
};

export default useCreateReview;