import { gql, useMutation } from "@apollo/client";
import {
  IconButton,
  ListItem,
  ListItemSecondaryAction,
  ListItemText,
} from "@mui/material";
import { Delete } from "@mui/icons-material";
import React from "react";
import { useHistory } from "react-router-dom";
import { DELETE_HOST } from "./__generated__/DELETE_HOST";

const DELETE_HOST_MUTATION = gql`
  mutation DELETE_HOST($id: ID!) {
    deleteHost(id: $id) {
      id
    }
  }
`;

const Host = ({
  host,
  remove,
}: {
  host: { name: string; hostname: string; id: string };
  remove(): void;
}) => {
  const history = useHistory();
  const [deleteHost] = useMutation<DELETE_HOST>(DELETE_HOST_MUTATION, {
    variables: { id: host.id },
  });
  return (
    <ListItem button onClick={() => history.push(`/host/${host.id}`)}>
      <ListItemText primary={host.name} />
      <ListItemSecondaryAction>
        <IconButton
          edge="end"
          aria-label="delete"
          onClick={async () => {
            await deleteHost();
            remove();
          }}
        >
          <Delete />
        </IconButton>
      </ListItemSecondaryAction>
    </ListItem>
  );
};

export default Host;
