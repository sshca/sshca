import { gql, useQuery } from "@apollo/client";
import { Paper, Typography } from "@material-ui/core";
import React from "react";
import Highlight from "react-highlight.js";
import { useParams } from "react-router";
import { GET_HOST_DETAILS } from "./__generated__/GET_HOST_DETAILS";

const GET_HOST_QUERY = gql`
  query GET_HOST_DETAILS($id: ID!) {
    host(id: $id) {
      subroles {
        role {
          name
        }
        username
        id
      }
      hostname
      name
    }
  }
`;

const Host = () => {
  const { id } = useParams<{ id: string }>();
  const publicKey = "key";

  const { loading, error, data } = useQuery<GET_HOST_DETAILS>(GET_HOST_QUERY, {
    variables: { id },
  });

  if (error)
    return (
      <Paper className="paper">
        <Typography>Error Getting Host</Typography>
      </Paper>
    );
  if (loading || !data?.host)
    return (
      <Paper className="paper">
        <Typography>Getting Host</Typography>
      </Paper>
    );
  return (
    <Paper className="paper">
      <Typography>Name: {data.host.name}</Typography>
      <Typography>Hostname: {data.host.hostname}</Typography>
      <Typography>Permissions:</Typography>
      {data.host.subroles ? (
        <>
          <Typography>
            Usernames:{" "}
            {data.host.subroles.map((subrole) => subrole.username).join(", ")}
          </Typography>
          <Highlight language="bash">
            {`rm -rf /etc/ssh/sshca
if grep -Fxq "TrustedUserCAKeys /etc/ssh/sshca/ca.pub" /etc/ssh/sshd_config
then
  :
else
  echo "TrustedUserCAKeys /etc/ssh/sshca/ca.pub" >> /etc/ssh/sshd_config
fi
if grep -Fxq "AuthorizedPrincipalsFile /etc/ssh/sshca/auth_principals/%u" /etc/ssh/sshd_config
then
  :
else
  echo "AuthorizedPrincipalsFile /etc/ssh/sshca/auth_principals/%u" >> /etc/ssh/sshd_config
fi
mkdir -p /etc/ssh/sshca/auth_principals
echo "${publicKey.replace("\n", "")}" > /etc/ssh/sshca/ca.pub
${data.host.subroles
  .map(
    (subrole) =>
      `echo "sshca_subrole_${subrole.id}" > /etc/ssh/sshca/auth_principals/${subrole.username}`
  )
  .join("\n")}`}
          </Highlight>
        </>
      ) : (
        <Typography>No Permissions</Typography>
      )}
    </Paper>
  );
};

export default Host;
