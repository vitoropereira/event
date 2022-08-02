import { ApolloClient, InMemoryCache } from "@apollo/client";

export const client = new ApolloClient({
  uri: "https://api-sa-east-1.hygraph.com/v2/cl5ztq8v43g8401t50mnn2p85/master",

  cache: new InMemoryCache(),
});
