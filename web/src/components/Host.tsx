import { gql } from "@apollo/client";
import { useMutation } from "@apollo/client/react";
import {
  IconButton,
  ListItem,
  ListItemButton,
  ListItemText,
} from "@mui/material";
import { Delete } from "@mui/icons-material";
import React from "react";
import { useNavigate } from "react-router";
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
  const navigate = useNavigate();
  const [deleteHost] = useMutation<DELETE_HOST>(DELETE_HOST_MUTATION, {
    variables: { id: host.id },
  });
  return (
    <ListItem
      disablePadding
      secondaryAction={
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
      }
    >
      <ListItemButton onClick={() => navigate(`/host/${host.id}`)}>
        <ListItemText primary={host.name} />
      </ListItemButton>
    </ListItem>
  );
};

export default Host;
