import { gql, useMutation } from "@apollo/client";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  TextField,
  DialogActions,
  Button,
} from "@mui/material";
import React from "react";
import { CREATE_USER } from "./__generated__/CREATE_USER";

const CREATE_USER_MUTATION = gql`
  mutation CREATE_USER($email: String!, $password: String!) {
    createUser(email: $email, password: $password) {
      email
    }
  }
`;

const AddUser = ({
  dialogOpen,
  setDialogOpen,
  refetch,
}: {
  dialogOpen: boolean;
  setDialogOpen(value: boolean): void;
  refetch(): void;
}) => {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [addUser] = useMutation<CREATE_USER>(CREATE_USER_MUTATION, {
    variables: { email, password },
  });

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    await addUser();
    refetch();
    setPassword("");
    setEmail("");
  }
  return (
    <Dialog
      onClose={() => setDialogOpen(false)}
      open={dialogOpen}
      style={{ textAlign: "center" }}
    >
      <DialogTitle id="simple-dialog-title" style={{ minWidth: 500 }}>
        Add User
      </DialogTitle>
      <form onSubmit={onSubmit}>
        <DialogContent>
          <TextField
            fullWidth
            label="Email"
            onChange={(e) => setEmail(e.target.value)}
            required
            value={email}
            variant="outlined"
          />
          <TextField
            fullWidth
            label="Password"
            onChange={(e) => setPassword(e.target.value)}
            required
            type="password"
            value={password}
            variant="outlined"
          />
        </DialogContent>
        <DialogActions>
          <Button
            onClick={() => {
              setDialogOpen(false);
              setEmail("");
            }}
            color="primary"
            variant="contained"
          >
            Cancel
          </Button>
          <Button
            onClick={() => {
              setDialogOpen(false);
            }}
            color="primary"
            variant="contained"
            type="submit"
          >
            Add
          </Button>
        </DialogActions>
      </form>
    </Dialog>
  );
};

export default AddUser;
