import gql from "graphql-tag";

export const CREATE_SHORT_URL = gql`
  mutation createLink($original: String!) {
    createLink(original: $original) {
      id
      original
      short
    }
  }
`;
