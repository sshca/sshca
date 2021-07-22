import { gql, useMutation } from "@apollo/client";
import {
  IconButton,
  ListItem,
  ListItemSecondaryAction,
  ListItemText,
} from "@material-ui/core";
import { Delete } from "@material-ui/icons";
import React from "react";
import { useCookies } from "react-cookie";
import { useHistory } from "react-router-dom";
import { DELETE_USER } from "./__generated__/DELETE_USER";

const DELETE_USER_MUTATION = gql`
  mutation DELETE_USER($id: ID!) {
    deleteUser(id: $id) {
      id
    }
  }
`;

const User = ({
  user,
  remove,
}: {
  user: { email: string; id: string };
  remove(): void;
}) => {
  const history = useHistory();
  const [cookies] = useCookies();
  const [deleteUser] = useMutation<DELETE_USER>(DELETE_USER_MUTATION, {
    variables: { id: user.id },
  });
  return (
    <ListItem button onClick={() => history.push(`/user/${user.id}`)}>
      <ListItemText primary={user.email} />
      {user.id.toString() !== cookies.id && (
        <ListItemSecondaryAction>
          <IconButton
            edge="end"
            aria-label="delete"
            onClick={async () => {
              await deleteUser();
              remove();
            }}
          >
            <Delete />
          </IconButton>
        </ListItemSecondaryAction>
      )}
    </ListItem>
  );
};

export default User;
