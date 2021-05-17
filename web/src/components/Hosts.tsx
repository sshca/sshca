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

const Hosts = () => {
  const {
    data: hosts,
    error,
    mutate: mutateHosts,
  } = useSWR<{ Name: string; Hostname: string; ID: number }[] | undefined, any>(
    "/api/web/hosts",
    fetcher
  );
  const [name, setName] = React.useState("");
  const [hostname, setHostname] = React.useState("");
  const [dialogOpen, setDialogOpen] = React.useState(false);
  const history = useHistory();
  function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    console.log("hey");
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

  if (error) {
    return (
      <Paper className="paper">
        <Typography>Error Getting Hosts</Typography>
      </Paper>
    );
  } else if (!hosts) {
    return (
      <Paper className="paper">
        <Typography>Getting Hosts...</Typography>
      </Paper>
    );
  } else {
    return (
      <Paper className="paper">
        <IconButton
          aria-label="Add Host"
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
        <Typography>Hosts:</Typography>
        <List style={{ overflow: "scroll", maxHeight: "30vh" }}>
          {hosts.map((host) => (
            <ListItem
              key={host.ID}
              button
              onClick={() => history.push(`/host/${host.ID}`)}
            >
              <ListItemText primary={host.Name} />
            </ListItem>
          ))}
        </List>
      </Paper>
    );
  }
};

export default Hosts;
