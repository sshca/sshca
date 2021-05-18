import {
  Dialog,
  DialogTitle,
  DialogContent,
  TextField,
  Typography,
  Select,
  MenuItem,
  DialogActions,
  Button,
  Paper,
} from "@material-ui/core";
import React from "react";
import useSWR from "swr";
import fetcher from "../lib/fetcher";

const AddRole = ({
  dialogOpen,
  setDialogOpen,
  roles,
  mutateRoles,
}: {
  dialogOpen: boolean;
  setDialogOpen(value: boolean): void;
  roles: { Name: string; Subroles: string; ID: number }[] | undefined;
  mutateRoles(value: typeof roles): void;
}) => {
  const [name, setName] = React.useState("");
  const [subRoles, setSubRoles] = React.useState<
    {
      Username: string;
      HostID: number;
    }[]
  >([]);

  const { data: hosts, error: hostError } = useSWR<
    { Name: string; Hostname: string; ID: number }[] | undefined,
    any
  >("/api/web/hosts", fetcher);

  function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    fetch("/api/web/addRole", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify({ name, subRoles }),
      credentials: "include",
    }).then((response) =>
      response.json().then((json) => {
        if (roles) {
          mutateRoles([...roles, json]);
        }
      })
    );
    setDialogOpen(false);
    setSubRoles([]);
    setName("");
  }
  if (hostError) {
    return (
      <Paper className="paper">
        <Typography>Error Getting Roles</Typography>
      </Paper>
    );
  } else if (!hosts) {
    return (
      <Paper className="paper">
        <Typography>Getting Roles...</Typography>
      </Paper>
    );
  }
  return (
    <Dialog
      onClose={() => setDialogOpen(false)}
      open={dialogOpen}
      style={{ textAlign: "center" }}
      fullWidth
      maxWidth="md"
    >
      <DialogTitle id="simple-dialog-title">Create Role</DialogTitle>
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
          <Typography style={{ marginTop: 10 }}>Permissions:</Typography>
          <Typography style={{ float: "right" }}>Host:</Typography>
          <Typography align="left">Username:</Typography>
          {[...subRoles, { Username: "", HostID: 0 }].map((subRole, index) => (
            <div key={index}>
              <TextField
                label="Username"
                onChange={(e) => {
                  setSubRoles([
                    ...subRoles.slice(0, index),
                    {
                      ...subRoles[index],
                      Username: e.target.value,
                      HostID: subRole.HostID || 0,
                    },
                    ...subRoles.slice(index + 1),
                  ]);
                }}
                required={subRole.HostID !== 0 || subRole.Username !== ""}
                style={{
                  marginTop: 10,
                  width: "47.5%",
                  marginRight: "5%",
                }}
                value={subRole.Username}
                variant="outlined"
              />
              <Select
                required={subRole.HostID !== 0 || subRole.Username !== ""}
                variant="outlined"
                style={{ marginTop: 10, width: "47.5%" }}
                value={subRole.HostID}
                onChange={(e) => {
                  setSubRoles([
                    ...subRoles.slice(0, index),
                    {
                      ...subRoles[index],
                      HostID: e.target.value as number,
                    },
                    ...subRoles.slice(index + 1),
                  ]);
                }}
              >
                <MenuItem value={0}>None</MenuItem>
                {hosts.map((host) => (
                  <MenuItem key={host.ID} value={host.ID}>
                    {host.Name}
                  </MenuItem>
                ))}
              </Select>
            </div>
          ))}
        </DialogContent>
        <DialogActions>
          <Button
            onClick={() => {
              setDialogOpen(false);
              setSubRoles([]);
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
