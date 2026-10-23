import { gql } from "@apollo/client";
import { useMutation } from "@apollo/client/react";
import {
  IconButton,
  ListItem,
  ListItemButton,
  ListItemText,
  Snackbar,
} from "@mui/material";
import { Delete } from "@mui/icons-material";
import { Alert } from "@mui/material";
import React from "react";
import { useCookies } from "react-cookie";
import { useNavigate } from "react-router";
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
  const navigate = useNavigate();
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
      <ListItem
        disablePadding
        secondaryAction={
          user.id.toString() !== cookies.id && (
            <IconButton
              edge="end"
              aria-label="delete"
              onClick={async () => {
                try {
                  await deleteUser();
                } catch (error) {
                  if (error instanceof Error) {
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
          )
        }
      >
        <ListItemButton onClick={() => navigate(`/user/${user.id}`)}>
          <ListItemText primary={user.email} />
        </ListItemButton>
      </ListItem>
    </>
  );
};

export default User;
