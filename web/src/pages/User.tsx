import { gql, useMutation, useQuery } from "@apollo/client";
import { Autocomplete, Paper, TextField, Typography } from "@mui/material";
import { useParams } from "react-router";
import { EDIT_USER_ROLES } from "./__generated__/EDIT_USER_ROLES";
import { GET_USER_ROLES_DETAILS } from "./__generated__/GET_USER_ROLES_DETAILS";

const GET_USER_QUERY = gql`
  query GET_USER_ROLES_DETAILS($id: ID!) {
    user(id: $id) {
      email
      roles {
        name
        id
      }
    }
    allRoles {
      name
      id
    }
  }
`;
const EDIT_USER_ROLES_MUTATION = gql`
  mutation EDIT_USER_ROLES($id: ID!, $roleIds: [ID!]!) {
    editUserRoles(id: $id, roleIds: $roleIds) {
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
  const [editRoleUsers] = useMutation<EDIT_USER_ROLES>(
    EDIT_USER_ROLES_MUTATION
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
        id="Roles"
        multiple
        options={data.allRoles}
        value={data.user.roles}
        getOptionLabel={(option) => option.name}
        onChange={async (_, value) => {
          await editRoleUsers({
            variables: { id, roleIds: value.map((role) => role.id) },
          });
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
