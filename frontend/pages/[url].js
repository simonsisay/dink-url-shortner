import { withApollo } from "react-apollo";
import { useRouter } from "next/router";
import LinkNotFound from "../src/component/LinkNotFound";
import { useState, useEffect } from "react";
import { gql } from "apollo-boost";

const GET_ORIGINAL = gql`
  query GetOriginal($short: String!) {
    getOriginal(short: $short) {
      id
      original
    }
  }
`;

const Redirect = ({ client }) => {
  const [err, setErr] = useState(true);
  const [redirecting, setRedirecting] = useState(true);
  const { url } = useRouter().query;

  useEffect(() => {
    const redirect = async () => {
      try {
        const { data } = await client.query({
          query: GET_ORIGINAL,
          variables: { short: url }
        });
        if (data) {
          window.location.replace(data.getOriginal.original);
        }
      } catch (err) {
        setRedirecting(false);
        setError(true);
      }
    };
    redirect();
  }, []);

  if (redirecting) return null;
  if (err) return <LinkNotFound />;
};

export default withApollo(Redirect);
