import { gql, useMutation, useQuery } from "@apollo/client";
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Paper,
  TextField,
  Typography,
} from "@mui/material";
import React from "react";
import { CREATE_ROLE } from "./__generated__/CREATE_ROLE";
import { GET_HOSTS } from "./__generated__/GET_HOSTS";
import SubroleCreator from "./SubroleCreator";
import { SubroleInput } from "../../__generated__/globalTypes";

const CREATE_ROLE_MUTATION = gql`
  mutation CREATE_ROLE($name: String!, $subroles: [SubroleInput!]!) {
    createRole(name: $name, subroles: $subroles) {
      id
    }
  }
`;

const AddRole = ({
  dialogOpen,
  setDialogOpen,
  refetch,
}: {
  dialogOpen: boolean;
  setDialogOpen(value: boolean): void;
  refetch(): void;
}) => {
  const [name, setName] = React.useState("");
  const [subroles, setSubroles] = React.useState<SubroleInput[]>([]);

  const [addRole] = useMutation<CREATE_ROLE>(CREATE_ROLE_MUTATION, {
    variables: { name, subroles },
  });

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    await addRole();
    refetch();
    setSubroles([]);
    setName("");
  }
  return (
    <Dialog
      onClose={() => setDialogOpen(false)}
      open={dialogOpen}
      style={{ textAlign: "center" }}
      fullWidth
      maxWidth="xl"
    >
      <DialogTitle id="simple-dialog-title">Create Role</DialogTitle>
      <form onSubmit={onSubmit}>
        <DialogContent>
          <TextField
            id="Name"
            fullWidth
            label="Name"
            onChange={(e) => setName(e.target.value)}
            required
            value={name}
            variant="outlined"
          />
          <SubroleCreator subroles={subroles} setSubroles={setSubroles} />
        </DialogContent>
        <DialogActions>
          <Button
            onClick={() => {
              setDialogOpen(false);
              setSubroles([]);
              setName("");
            }}
            color="primary"
            variant="contained"
          >
            Cancel
          </Button>
          <Button color="primary" variant="contained" type="submit">
            Add
          </Button>
        </DialogActions>
      </form>
    </Dialog>
  );
};

export default AddRole;
