import { gql } from "@apollo/client";
import { useMutation } from "@apollo/client/react";
import {
  Alert,
  IconButton,
  ListItem,
  ListItemButton,
  ListItemText,
  Snackbar,
} from "@mui/material";
import { Delete } from "@mui/icons-material";
import { useNavigate } from "react-router";
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
  const navigate = useNavigate();
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
      <ListItem
        disablePadding
        secondaryAction={
          <IconButton
            edge="end"
            aria-label="delete"
            onClick={async () => {
              try {
                await deleteRole();
                remove();
              } catch (e) {
                if (e instanceof Error) {
                  setError(e.message);
                } else {
                  throw e;
                }
              }
            }}
          >
            <Delete />
          </IconButton>
        }
      >
        <ListItemButton onClick={() => navigate(`/role/${role.id}`)}>
          <ListItemText primary={role.name} />
        </ListItemButton>
      </ListItem>
    </>
  );
};

export default Role;
