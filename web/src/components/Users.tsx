import { gql, useQuery } from "@apollo/client";
import { Button as IconButton, List, Paper, Typography } from "@mui/material";
import { Add } from "@mui/icons-material";
import React from "react";
import AddUser from "./AddUser";
import User from "./User";
import { GET_USERS_DETAILS } from "./__generated__/GET_USERS_DETAILS";

const GET_USERS_QUERY = gql`
  query GET_USERS_DETAILS {
    allUsers {
      id
      email
    }
  }
`;

const Users = () => {
  const { loading, error, data, refetch } =
    useQuery<GET_USERS_DETAILS>(GET_USERS_QUERY);
  const [dialogOpen, setDialogOpen] = React.useState(false);

  if (error) {
    return (
      <Paper className="paper">
        <Typography>Error Getting Users</Typography>
      </Paper>
    );
  } else if (loading || !data) {
    return (
      <Paper className="paper">
        <Typography>Getting Users...</Typography>
      </Paper>
    );
  } else {
    return (
      <Paper className="paper">
        <IconButton
          id="Add-User"
          aria-label="Add User"
          style={{ float: "right", marginLeft: -100 }}
          onClick={() => setDialogOpen(true)}
        >
          <Add />
        </IconButton>
        <AddUser
          dialogOpen={dialogOpen}
          setDialogOpen={setDialogOpen}
          refetch={() => {
            setDialogOpen(false);
            refetch();
          }}
        />
        <Typography>Users:</Typography>
        <List style={{ overflow: "scroll", maxHeight: "30vh" }}>
          {data.allUsers.map((user) => (
            <User user={user} key={user.id} remove={refetch} />
          ))}
        </List>
      </Paper>
    );
  }
};

export default Users;
