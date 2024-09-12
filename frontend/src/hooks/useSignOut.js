import { useApolloClient } from "@apollo/client";

import useAuthStorage from "./useAuthStorage";

const useSignOut = () => {
  const authStorage = useAuthStorage();
  const apolloClient = useApolloClient();

  const signOut = async () => {
    try {
      await authStorage.removeAccessToken();
    } catch (e) {
      console.log(e);
    }
    await apolloClient.resetStore();
  };

  return signOut;
};

export default useSignOut;