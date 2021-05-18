import {
  IconButton,
  ListItem,
  ListItemSecondaryAction,
  ListItemText,
} from "@material-ui/core";
import { Delete } from "@material-ui/icons";
import React from "react";
import { useHistory } from "react-router-dom";

const Role = ({
  role,
  mutate,
}: {
  role: { Name: string; Subroles: string; ID: number };
  mutate(): void;
}) => {
  const history = useHistory();
  return (
    <ListItem button onClick={() => history.push(`/role/${role.ID}`)}>
      <ListItemText primary={role.Name} />
      <ListItemSecondaryAction>
        <IconButton
          edge="end"
          aria-label="delete"
          onClick={() => {
            fetch("/api/web/deleteRole", {
              method: "POST",
              headers: { "content-type": "application/json" },
              body: JSON.stringify({ id: role.ID }),
              credentials: "include",
            }).then(() => mutate());
          }}
        >
          <Delete />
        </IconButton>
      </ListItemSecondaryAction>
    </ListItem>
  );
};

export default Role;
