import { ListItem, ListItemText } from "@material-ui/core";
import React from "react";
import { useHistory } from "react-router-dom";

const Host = ({
  host,
}: {
  host: { Name: string; Hostname: string; ID: number };
}) => {
  const history = useHistory();
  return (
    <ListItem
      key={host.ID}
      button
      onClick={() => history.push(`/host/${host.ID}`)}
    >
      <ListItemText primary={host.Name} />
    </ListItem>
  );
};

export default Host;
