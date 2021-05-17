import {
  Button,
  Button as IconButton,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  List,
  ListItem,
  ListItemText,
  Paper,
  TextField,
  Typography,
} from "@material-ui/core";
import { Add } from "@material-ui/icons";
import React from "react";
import { useHistory } from "react-router";
import useSWR from "swr";
import fetcher from "../lib/fetcher";

const Users = () => {
  const {
    data: users,
    error,
    mutate: mutateUsers,
  } = useSWR<{ Email: string; ID: number }[] | undefined, any>(
    "/api/web/users",
    fetcher
  );
  const [email, setEmail] = React.useState("");
  const [dialogOpen, setDialogOpen] = React.useState(false);
  const history = useHistory();
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

  if (error) {
    return (
      <Paper className="paper">
        <Typography>Error Getting Users</Typography>
      </Paper>
    );
  } else if (!users) {
    return (
      <Paper className="paper">
        <Typography>Getting Users...</Typography>
      </Paper>
    );
  } else {
    return (
      <Paper className="paper">
        <IconButton
          aria-label="Add User"
          style={{ float: "right" }}
          onClick={() => setDialogOpen(true)}
        >
          <Add />
        </IconButton>
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
        <Typography>Users:</Typography>
        <List style={{ overflow: "scroll", maxHeight: "30vh" }}>
          {users.map((user) => (
            <ListItem
              key={user.ID}
              button
              onClick={() => history.push(`/user/${user.ID}`)}
            >
              <ListItemText primary={user.Email} />
            </ListItem>
          ))}
        </List>
      </Paper>
    );
  }
};

export default Users;
