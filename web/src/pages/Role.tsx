import { Paper, TextField, Typography } from "@material-ui/core";
import { Autocomplete } from "@material-ui/lab";
import React from "react";
import { useParams } from "react-router";
import useSWR from "swr";
import fetcher from "../lib/fetcher";

const Role = () => {
  const { id } = useParams<{ id: string }>();
  const {
    data: role,
    error: roleError,
    mutate,
  } = useSWR<
    {
      ID: number;
      Name: string;
      Subroles: { ID: number; Username: string }[];
      Users: { Email: string; ID: number }[];
    },
    any
  >(
    "/api/web/role?" +
      new URLSearchParams({
        id,
      }),
    fetcher
  );
  const { data: users, error: usersError } = useSWR<
    {
      Email: string;
      ID: number;
    }[],
    any
  >("/api/web/users", fetcher);

  function onSubmit({
    Users,
  }: {
    ID: number;
    Name: string;
    Subroles: { ID: number; Username: string }[];
    Users: { Email: string; ID: number }[];
  }) {
    fetch("/api/web/changeUsers", {
      method: "POST",
      credentials: "include",
      headers: { "content-type": "application/json" },
      body: JSON.stringify({
        id: parseInt(id, 10),
        users: Users.map((user) => user.ID),
      }),
    });
  }

  if (roleError || usersError)
    return (
      <Paper className="paper">
        <Typography>Error Getting Role</Typography>
      </Paper>
    );
  if (!role || !users)
    return (
      <Paper className="paper">
        <Typography>Getting Role</Typography>
      </Paper>
    );
  return (
    <Paper className="paper">
      <Typography>Name: {role.Name}</Typography>
      <Typography>Permissions:</Typography>
      <Typography>Users:</Typography>
      <Autocomplete
        multiple
        options={users.map((user) => user.Email)}
        value={role.Users.map((user) => user.Email)}
        onChange={(_, value) => {
          mutate(
            {
              ...role,
              Users: value.map(
                (email) => users.filter((user) => user.Email === email)[0]
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
          <TextField {...params} variant="outlined" label="Users" />
        )}
      />
    </Paper>
  );
};

export default Role;
