import {
  IconButton,
  ListItem,
  ListItemSecondaryAction,
  ListItemText,
} from "@material-ui/core";
import { Delete } from "@material-ui/icons";
import React from "react";
import { useHistory } from "react-router-dom";

const Host = ({
  host,
  mutate,
}: {
  host: { Name: string; Hostname: string; ID: number };
  mutate(): void;
}) => {
  const history = useHistory();
  return (
    <ListItem button onClick={() => history.push(`/host/${host.ID}`)}>
      <ListItemText primary={host.Name} />
      <ListItemSecondaryAction>
        <IconButton
          edge="end"
          aria-label="delete"
          onClick={() => {
            fetch("/api/web/deleteHost", {
              method: "POST",
              headers: { "content-type": "application/json" },
              body: JSON.stringify({ id: host.ID }),
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

export default Host;
