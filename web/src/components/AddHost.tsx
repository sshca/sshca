import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  TextField,
} from "@material-ui/core";
import React from "react";

const AddHost = ({
  dialogOpen,
  setDialogOpen,
  mutateHosts,
  hosts,
}: {
  dialogOpen: boolean;
  setDialogOpen(value: boolean): void;
  mutateHosts(value: typeof hosts): void;
  hosts: { Name: string; Hostname: string; ID: number }[] | undefined;
}) => {
  const [name, setName] = React.useState("");
  const [hostname, setHostname] = React.useState("");
  function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    fetch("/api/web/addHost", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify({ name, hostname }),
      credentials: "include",
    }).then((response) =>
      response.json().then((json) => {
        if (hosts) {
          mutateHosts([...hosts, json]);
        }
      })
    );
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
            onClick={() => setDialogOpen(false)}
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
