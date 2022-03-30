import { gql, useQuery } from "@apollo/client";
import { Button as IconButton, List, Paper, Typography } from "@mui/material";
import { Add } from "@mui/icons-material";
import React from "react";
import AddRole from "./AddRole";
import Role from "./Role";
import { GET_ROLES_DETAILS } from "./__generated__/GET_ROLES_DETAILS";

const GET_ROLES_QUERY = gql`
  query GET_ROLES_DETAILS {
    allRoles {
      id
      name
    }
  }
`;

const Roles = () => {
  const { loading, error, data, refetch } =
    useQuery<GET_ROLES_DETAILS>(GET_ROLES_QUERY);
  const [dialogOpen, setDialogOpen] = React.useState(false);

  if (error) {
    return (
      <Paper className="paper">
        <Typography>Error Getting Roles</Typography>
      </Paper>
    );
  } else if (loading || !data) {
    return (
      <Paper className="paper">
        <Typography>Getting Roles...</Typography>
      </Paper>
    );
  }
  return (
    <Paper className="paper">
      <IconButton
        id="Add-Role"
        aria-label="Add Role"
        style={{ float: "right", marginLeft: -100 }}
        onClick={() => setDialogOpen(true)}
      >
        <Add />
      </IconButton>
      <AddRole
        dialogOpen={dialogOpen}
        setDialogOpen={setDialogOpen}
        refetch={() => {
          setDialogOpen(false);
          refetch();
        }}
      />
      <Typography>Roles:</Typography>
      <List style={{ overflow: "scroll", maxHeight: "30vh" }}>
        {data.allRoles.map((role) => (
          <Role role={role} key={role.id} remove={refetch} />
        ))}
      </List>
    </Paper>
  );
};

export default Roles;
