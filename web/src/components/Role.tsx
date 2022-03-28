import { ApolloError, gql, useMutation } from "@apollo/client";
import {
  Alert,
  IconButton,
  ListItem,
  ListItemSecondaryAction,
  ListItemText,
  Snackbar,
} from "@mui/material";
import { Delete } from "@mui/icons-material";
import { useHistory } from "react-router-dom";
import { DELETE_ROLE } from "./__generated__/DELETE_ROLE";
import { useState } from "react";

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
  const [error, setError] = useState<string | null>(null);

  return (
    <>
      <Snackbar
        onClick={() => {}}
        open={error !== null}
        autoHideDuration={6000}
        onClose={() => setError(null)}
        anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
      >
        <Alert severity="error">{error}</Alert>
      </Snackbar>
      <ListItem button onClick={() => history.push(`/role/${role.id}`)}>
        <ListItemText primary={role.name} />
        <ListItemSecondaryAction>
          <IconButton
            edge="end"
            aria-label="delete"
            onClick={async () => {
              try {
                await deleteRole();
                remove();
              } catch (e) {
                if (e instanceof ApolloError) {
                  setError(e.message);
                } else {
                  throw e;
                }
              }
            }}
          >
            <Delete />
          </IconButton>
        </ListItemSecondaryAction>
      </ListItem>
    </>
  );
};

export default Role;
