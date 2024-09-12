import { useApolloClient, useMutation } from "@apollo/client";

import { SIGN_IN } from "../graphql/mutations";
import useAuthStorage from "./useAuthStorage";

const useSignIn = () => {
  const authStorage = useAuthStorage();
  const apolloClient = useApolloClient();
  const [login, result] = useMutation(SIGN_IN);

  const signIn = async ({ username, password }) => {
    try {
      const { data } = await login({
        variables: {
          credentials: {
            username,
            password,
          },
        },
      });
      if (data && data.authenticate && data.authenticate.accessToken) {
        try {
          await authStorage.setAccessToken(data.authenticate.accessToken)
        } catch (e) {
          console.log(e);
        }
        await apolloClient.resetStore();
        return data;
      } else {
        console.log('login failed: no access token received');
        return { error: 'invalid credentials or token not received' };
      }
    } catch (e) {
      console.error('login error', e)
      return { error: e.message }
    }
  };

  return [signIn, result];
};

export default useSignIn;