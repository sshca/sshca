import { ListItem, ListItemText } from "@material-ui/core";
import React from "react";
import { useHistory } from "react-router-dom";

const Role = ({
  role,
}: {
  role: { Name: string; Subroles: string; ID: number };
}) => {
  const history = useHistory();
  return (
    <ListItem
      key={role.ID}
      button
      onClick={() => history.push(`/role/${role.ID}`)}
    >
      <ListItemText primary={role.Name} />
    </ListItem>
  );
};

export default Role;
