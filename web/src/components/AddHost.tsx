import { gql, useMutation } from "@apollo/client";
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  TextField,
} from "@mui/material";
import React from "react";
import { CREATE_HOST } from "./__generated__/CREATE_HOST";

const CREATE_HOST_MUTATION = gql`
  mutation CREATE_HOST($name: String!, $hostname: String!) {
    createHost(name: $name, hostname: $hostname) {
      id
      hostname
      name
    }
  }
`;

const AddHost = ({
  dialogOpen,
  setDialogOpen,
  refetch,
}: {
  dialogOpen: boolean;
  setDialogOpen(value: boolean): void;
  refetch(): void;
}) => {
  const [name, setName] = React.useState("");
  const [hostname, setHostname] = React.useState("");
  const [addHost] = useMutation<CREATE_HOST>(CREATE_HOST_MUTATION, {
    variables: { name, hostname },
  });

  function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    addHost().then(() => {
      refetch();
    });
    setName("");
    setHostname("");
  }
  return (
    <Dialog
      onClose={() => setDialogOpen(false)}
      open={dialogOpen}
      style={{ textAlign: "center" }}
    >
      <DialogTitle id="simple-dialog-title" style={{ minWidth: 500 }}>
        Create Host
      </DialogTitle>
      <form onSubmit={onSubmit}>
        <DialogContent>
          <TextField
            fullWidth
            label="Name"
            onChange={(e) => setName(e.target.value)}
            required
            value={name}
            variant="outlined"
          />
          <TextField
            fullWidth
            label="Hostname"
            onChange={(e) => setHostname(e.target.value)}
            required
            style={{ marginTop: 10 }}
            value={hostname}
            variant="outlined"
          />
        </DialogContent>
        <DialogActions>
          <Button
            onClick={() => {
              setDialogOpen(false);
              setName("");
              setHostname("");
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

export default AddHost;
