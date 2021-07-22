import { gql, useQuery } from "@apollo/client";
import { Paper, TextField, Typography } from "@material-ui/core";
import { Autocomplete } from "@material-ui/lab";
import React from "react";
import { useParams } from "react-router";
import { GET_USER_ROLES_DETAILS } from "./__generated__/GET_USER_ROLES_DETAILS";

const GET_USER_QUERY = gql`
  query GET_USER_ROLES_DETAILS($id: ID!) {
    user(id: $id) {
      email
      roles {
        name
      }
    }
    allRoles {
      name
      id
    }
  }
`;

const User = () => {
  const { id } = useParams<{ id: string }>();
  const { loading, error, data, refetch } = useQuery<GET_USER_ROLES_DETAILS>(
    GET_USER_QUERY,
    { variables: { id } }
  );

  if (error)
    return (
      <Paper className="paper">
        <Typography>Error Getting User</Typography>
      </Paper>
    );
  if (loading || !data || !data.user || !data.allRoles)
    return (
      <Paper className="paper">
        <Typography>Getting User...</Typography>
      </Paper>
    );
  return (
    <Paper className="paper">
      <Typography>Email: {data.user.email}</Typography>
      <Autocomplete
        multiple
        options={data.allRoles.map((role) => role.name)}
        value={data.user.roles.map((role) => role.name)}
        onChange={(_, value) => {
          refetch();
        }}
        renderInput={(params) => (
          <TextField {...params} variant="outlined" label="Roles" />
        )}
      />
    </Paper>
  );
};

export default User;
