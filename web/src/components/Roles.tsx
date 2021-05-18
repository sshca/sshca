import {
  Button as IconButton,
  List,
  Paper,
  Typography,
} from "@material-ui/core";
import { Add } from "@material-ui/icons";
import React from "react";
import useSWR from "swr";
import fetcher from "../lib/fetcher";
import AddRole from "./AddRole";
import Role from "./Role";

const Roles = () => {
  const {
    data: roles,
    error: roleError,
    mutate: mutateRoles,
  } = useSWR<{ Name: string; Subroles: string; ID: number }[] | undefined, any>(
    "/api/web/roles",
    fetcher
  );
  const [dialogOpen, setDialogOpen] = React.useState(false);

  if (roleError) {
    return (
      <Paper className="paper">
        <Typography>Error Getting Roles</Typography>
      </Paper>
    );
  } else if (!roles) {
    return (
      <Paper className="paper">
        <Typography>Getting Roles...</Typography>
      </Paper>
    );
  }
  return (
    <Paper className="paper">
      <IconButton
        aria-label="Add Role"
        style={{ float: "right" }}
        onClick={() => setDialogOpen(true)}
      >
        <Add />
      </IconButton>
      <AddRole
        dialogOpen={dialogOpen}
        setDialogOpen={setDialogOpen}
        roles={roles}
        mutateRoles={mutateRoles}
      />
      <Typography>Roles:</Typography>
      <List style={{ overflow: "scroll", maxHeight: "30vh" }}>
        {roles.map((role) => (
          <Role role={role} />
        ))}
      </List>
    </Paper>
  );
};

export default Roles;
