import {
  IconButton,
  ListItem,
  ListItemSecondaryAction,
  ListItemText,
} from "@material-ui/core";
import { Delete } from "@material-ui/icons";
import React from "react";
import { useCookies } from "react-cookie";
import { useHistory } from "react-router-dom";

const User = ({
  user,
  mutate,
}: {
  user: { Email: string; ID: number };
  mutate(): void;
}) => {
  const history = useHistory();
  const [cookies] = useCookies();
  console.log(cookies, user);
  return (
    <ListItem button onClick={() => history.push(`/user/${user.ID}`)}>
      <ListItemText primary={user.Email} />
      {user.ID.toString() !== cookies.id && (
        <ListItemSecondaryAction>
          <IconButton
            edge="end"
            aria-label="delete"
            onClick={() => {
              fetch("/api/web/deleteUser", {
                method: "POST",
                headers: { "content-type": "application/json" },
                body: JSON.stringify({ id: user.ID }),
                credentials: "include",
              }).then(() => mutate());
            }}
          >
            <Delete />
          </IconButton>
        </ListItemSecondaryAction>
      )}
    </ListItem>
  );
};

export default User;
