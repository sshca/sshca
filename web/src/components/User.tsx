import { ListItem, ListItemText } from "@material-ui/core";
import React from "react";
import { useHistory } from "react-router-dom";

const User = ({ user }: { user: { Email: string; ID: number } }) => {
  const history = useHistory();
  return (
    <ListItem
      key={user.ID}
      button
      onClick={() => history.push(`/user/${user.ID}`)}
    >
      <ListItemText primary={user.Email} />
    </ListItem>
  );
};

export default User;
