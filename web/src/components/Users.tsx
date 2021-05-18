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
import AddUser from "./AddUser";
import User from "./User";

const Users = () => {
  const {
    data: users,
    error,
    mutate: mutateUsers,
  } = useSWR<{ Email: string; ID: number }[] | undefined, any>(
    "/api/web/users",
    fetcher
  );
  const [dialogOpen, setDialogOpen] = React.useState(false);

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
        <AddUser
          dialogOpen={dialogOpen}
          setDialogOpen={setDialogOpen}
          mutateUsers={mutateUsers}
          users={users}
        />
        <Typography>Users:</Typography>
        <List style={{ overflow: "scroll", maxHeight: "30vh" }}>
          {users.map((user) => (
            <User user={user} />
          ))}
        </List>
      </Paper>
    );
  }
};

export default Users;
