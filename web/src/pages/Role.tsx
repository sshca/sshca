import { gql, useMutation, useQuery } from "@apollo/client";
import { Edit } from "@mui/icons-material";
import {
  Autocomplete,
  IconButton,
  Paper,
  TextField,
  Typography,
} from "@mui/material";
import { useState } from "react";
import { useParams } from "react-router";
import EditRole from "../components/EditRole";
import { EDIT_ROLE_USERS } from "./__generated__/EDIT_ROLE_USERS";
import { GET_ROLE_USERS_DETAILS } from "./__generated__/GET_ROLE_USERS_DETAILS";

const GET_ROLE_QUERY = gql`
  query GET_ROLE_USERS_DETAILS($id: ID!) {
    role(id: $id) {
      name
      id
      users {
        email
        id
      }
      subroles {
        username
        id
        hostId
        extensions
        host {
          hostname
        }
      }
    }
    allUsers {
      email
      id
    }
  }
`;

const EDIT_ROLE_USERS_MUTATION = gql`
  mutation EDIT_ROLE_USERS($id: ID!, $userIds: [ID!]!) {
    editRoleUsers(id: $id, userIds: $userIds) {
      id
    }
  }
`;

const Role = () => {
  const { id } = useParams<{ id: string }>();
  const [dialogOpen, setDialogOpen] = useState(false);
  const { loading, error, data, refetch } = useQuery<GET_ROLE_USERS_DETAILS>(
    GET_ROLE_QUERY,
    { variables: { id } }
  );
  const [editRoleUsers] = useMutation<EDIT_ROLE_USERS>(
    EDIT_ROLE_USERS_MUTATION
  );

  if (error)
    return (
      <Paper className="paper">
        <Typography>Error Getting Role</Typography>
      </Paper>
    );
  if (loading || !data || !data.role)
    return (
      <Paper className="paper">
        <Typography>Getting Role</Typography>
      </Paper>
    );
  return (
    <Paper className="paper">
      <IconButton
        id="Edit-Role"
        aria-label="Edit Role"
        style={{ float: "right", marginLeft: -100 }}
        onClick={() => setDialogOpen(true)}
      >
        <Edit />
      </IconButton>
      <EditRole
        dialogOpen={dialogOpen}
        setDialogOpen={setDialogOpen}
        refetch={() => {
          setDialogOpen(false);
          refetch();
        }}
        role={data.role}
      />
      <Typography>Name: {data.role.name}</Typography>
      <Typography>Permissions:</Typography>
      <ul>
        {data.role.subroles.map((subrole) => (
          <li key={subrole.id}>
            <Typography>
              {subrole.host.hostname}: {subrole.username}
            </Typography>
          </li>
        ))}
      </ul>
      <br />
      <Typography>Users:</Typography>
      <Autocomplete
        id="Users"
        multiple
        options={data.allUsers}
        value={data.role.users}
        getOptionLabel={(option) => option.email}
        onChange={async (_, value) => {
          await editRoleUsers({
            variables: { id, userIds: value.map((user) => user.id) },
          });
          refetch();
        }}
        renderInput={(params) => (
          <TextField {...params} variant="outlined" label="Users" />
        )}
      />
    </Paper>
  );
};

export default Role;
