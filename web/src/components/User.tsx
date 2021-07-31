import { ApolloError, gql, useMutation } from "@apollo/client";
import {
  IconButton,
  ListItem,
  ListItemSecondaryAction,
  ListItemText,
  Snackbar,
} from "@material-ui/core";
import { Delete } from "@material-ui/icons";
import { Alert } from "@material-ui/lab";
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
  const [selfDeleted, setSelfDeleted] = React.useState(false);
  const [deleteUser] = useMutation<DELETE_USER>(DELETE_USER_MUTATION, {
    variables: { id: user.id },
  });
  return (
    <>
      <Snackbar
        open={selfDeleted}
        autoHideDuration={6000}
        onClose={() => setSelfDeleted(false)}
        anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
      >
        <Alert onClose={() => setSelfDeleted(false)} severity="error">
          You cannot delete yourself.
        </Alert>
      </Snackbar>
      <ListItem button onClick={() => history.push(`/user/${user.id}`)}>
        <ListItemText primary={user.email} />
        {user.id.toString() !== cookies.id && (
          <ListItemSecondaryAction>
            <IconButton
              edge="end"
              aria-label="delete"
              onClick={async () => {
                try {
                  await deleteUser();
                } catch (error) {
                  if (error instanceof ApolloError) {
                    if (error.message === "Cannot delete yourself") {
                      setSelfDeleted(true);
                    }
                  } else {
                    throw error;
                  }
                }
                remove();
              }}
            >
              <Delete />
            </IconButton>
          </ListItemSecondaryAction>
        )}
      </ListItem>
    </>
  );
};

export default User;
