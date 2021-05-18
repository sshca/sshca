import {
  Dialog,
  DialogTitle,
  DialogContent,
  TextField,
  DialogActions,
  Button,
} from "@material-ui/core";
import React from "react";

const AddUser = ({
  dialogOpen,
  setDialogOpen,
  mutateUsers,
  users,
}: {
  dialogOpen: boolean;
  setDialogOpen(value: boolean): void;
  mutateUsers(value: typeof users): void;
  users: { Email: string; ID: number }[] | undefined | undefined;
}) => {
  const [email, setEmail] = React.useState("");

  function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    fetch("/api/web/addUser", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify({ email }),
      credentials: "include",
    }).then((response) =>
      response.json().then((json) => {
        if (users) {
          mutateUsers([...users, json]);
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

export default AddUser;
