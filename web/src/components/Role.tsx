import { gql, useMutation } from "@apollo/client";
import {
  IconButton,
  ListItem,
  ListItemSecondaryAction,
  ListItemText,
} from "@mui/material";
import { Delete } from "@mui/icons-material";
import React from "react";
import { useHistory } from "react-router-dom";
import { DELETE_ROLE } from "./__generated__/DELETE_ROLE";

const DELETE_ROLE_MUTATION = gql`
  mutation DELETE_ROLE($id: ID!) {
    deleteRole(id: $id) {
      id
    }
  }
`;

const Role = ({
  role,
  remove,
}: {
  role: { name: string; id: string };
  remove(): void;
}) => {
  const history = useHistory();
  const [deleteRole] = useMutation<DELETE_ROLE>(DELETE_ROLE_MUTATION, {
    variables: { id: role.id },
  });
  return (
    <ListItem button onClick={() => history.push(`/role/${role.id}`)}>
      <ListItemText primary={role.name} />
      <ListItemSecondaryAction>
        <IconButton
          edge="end"
          aria-label="delete"
          onClick={async () => {
            await deleteRole();
            remove();
          }}
        >
          <Delete />
        </IconButton>
      </ListItemSecondaryAction>
    </ListItem>
  );
};

export default Role;
