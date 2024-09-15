import { useMutation } from "@apollo/client";

import { CREATE_USER } from "../graphql/mutations";

const useCreateUser = () => {
  const [createUser, result] = useMutation(CREATE_USER);

  const makeUser = async ({ username, password }) => {
    try {
      const { data } = await createUser({
        variables: {
          user: {
            username,
            password,
          },
        },
      });
      return data;
    } catch (e) {
      console.error('error creating new user', e)
      return { error: e.message }
    }
  };

  return [makeUser, result];
};

export default useCreateUser;