import { gql, useQuery } from "@apollo/client";
import { Paper, Typography } from "@mui/material";
import { useParams } from "react-router";
import { GET_HOST_KEY } from "./__generated__/GET_HOST_KEY";

const GET_HOST_KEY_QUERY = gql`
  query GET_HOST_KEY($id: ID!) {
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
      fingerprint
      caPub
    }
  }
`;

const Host = () => {
  const { id } = useParams<{ id: string }>();

  const { loading, error, data } = useQuery<GET_HOST_KEY>(GET_HOST_KEY_QUERY, {
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
      <Typography>
        Fingerprint: {data.host.fingerprint || "Fingerprint Not Configured"}
      </Typography>
      {data.host.subroles.length > 0 ? (
        <>
          <Typography>
            {data.host.subroles.length > 0
              ? "Permissions:"
              : "No Configured Access"}
          </Typography>
          <ul style={{ marginTop: 0 }}>
            {data.host.subroles.map((subrole) => (
              <li key={subrole.id}>
                <Typography>
                  Role: {subrole.role.name} Username: {subrole.username}
                </Typography>
              </li>
            ))}
          </ul>
        </>
      ) : (
        <Typography>No Permissions</Typography>
      )}
    </Paper>
  );
};

export default Host;
