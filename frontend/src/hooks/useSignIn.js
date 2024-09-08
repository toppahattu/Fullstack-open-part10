import { useMutation } from "@apollo/client";

import { SIGN_IN } from "../graphql/mutations";

const useSignIn = () => {
  const [login, result] = useMutation(SIGN_IN);

  const signIn = async ({ username, password }) => {
    const { data } = await login({
      variables: {
        credentials: {
          username,
          password,
        }
      }
    })
    return data;
  };

  return [signIn, result];
};

export default useSignIn;