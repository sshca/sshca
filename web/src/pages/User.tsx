import { Paper, TextField, Typography } from "@material-ui/core";
import { Autocomplete } from "@material-ui/lab";
import React from "react";
import { useParams } from "react-router";
import useSWR from "swr";
import fetcher from "../lib/fetcher";

const User = () => {
  const { id } = useParams<{ id: string }>();
  const {
    data: user,
    error: userError,
    mutate,
  } = useSWR<
    {
      Email: string;
      Roles: {
        ID: number;
        Name: string;
        Subroles: { ID: number; Username: string }[];
      }[];
    },
    any
  >(
    "/api/web/user?" +
      new URLSearchParams({
        id,
      }),
    fetcher
  );
  const { data: roles, error: rolesError } = useSWR<
    | {
        Name: string;
        ID: number;
        Subroles: { ID: number; Username: string }[];
      }[],
    any
  >("/api/web/roles", fetcher);

  function onSubmit({
    Roles,
  }: {
    Email: string;
    Roles: {
      ID: number;
      Name: string;
      Subroles: { ID: number; Username: string }[];
    }[];
  }) {
    fetch("/api/web/changeRoles", {
      method: "POST",
      credentials: "include",
      headers: { "content-type": "application/json" },
      body: JSON.stringify({
        id: parseInt(id, 10),
        roles: Roles.map((role) => role.ID),
      }),
    });
  }
  if (userError || rolesError)
    return (
      <Paper className="paper">
        <Typography>Error Getting User</Typography>
      </Paper>
    );
  if (!user || !roles)
    return (
      <Paper className="paper">
        <Typography>Getting User</Typography>
      </Paper>
    );
  return (
    <Paper className="paper">
      <Typography>Email: {user.Email}</Typography>
      <Autocomplete
        multiple
        options={roles.map((role) => role.Name)}
        value={user.Roles.map((role) => role.Name)}
        onChange={(_, value) => {
          mutate(
            {
              ...user,
              Roles: value.map(
                (name) => roles.filter((role) => role.Name === name)[0]
              ),
            },
            false
          ).then((newValue) => {
            if (newValue) {
              onSubmit(newValue);
            }
          });
        }}
        renderInput={(params) => (
          <TextField {...params} variant="outlined" label="Roles" />
        )}
      />
    </Paper>
  );
};

export default User;
