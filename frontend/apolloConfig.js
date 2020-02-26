import { ApolloClient } from "apollo-client";
import { InMemoryCache } from "apollo-cache-inmemory";
import withApollo from "next-with-apollo";
import { createHttpLink } from "apollo-link-http";
import fetch from "isomorphic-unfetch";

// Update the GraphQL endpoint to any instance of GraphQL that you like
const GRAPHQL_URL = "http://localhost:4000/graphql";

const link = createHttpLink({
  fetch, // Switches between unfetch & node-fetch for client & server.
  uri: GRAPHQL_URL
});

export default withApollo(
  ({ initialState }) =>
    new ApolloClient({
      link: link,
      cache: new InMemoryCache().restore(initialState || {})
    })
);
