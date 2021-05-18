import { MenuItem, Paper, Select, Typography } from "@material-ui/core";
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
        roles: Users.map((user) => user.ID),
      }),
    });
  }
  console.log(role);
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
      {[
        ...role.Users,
        {
          ID: 0,
          Email: "",
        },
      ].map((user, index) => (
        <Select
          fullWidth
          key={index}
          onChange={(e) => {
            mutate(
              {
                ...role,
                Users: [
                  ...role.Users.slice(0, index),
                  {
                    ...role.Subroles[index],
                    ID: e.target.value as number,
                    Email: users.filter(
                      (user) => user.ID === (e.target.value as number)
                    )[0].Email,
                  },
                  ...role.Users.slice(index + 1),
                ],
              },
              false
            ).then((value) => {
              if (value) {
                onSubmit(value);
              }
            });
          }}
          required={user.ID !== 0}
          style={{ marginTop: 10 }}
          value={user.ID}
          variant="outlined"
        >
          <MenuItem value={0}>None</MenuItem>
          {users.map((user) => (
            <MenuItem key={user.ID} value={user.ID}>
              {user.Email}
            </MenuItem>
          ))}
        </Select>
      ))}
    </Paper>
  );
};

export default Role;
