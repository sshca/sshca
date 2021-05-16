import { MenuItem, Paper, Select, Typography } from "@material-ui/core";
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
    "http://localhost:5000/web/user?" +
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
  >("http://localhost:5000/web/roles", fetcher);

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
    fetch("http://localhost:5000/web/changeRoles", {
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
      {[
        ...user.Roles,
        {
          ID: 0,
          Name: "",
          Subroles: [],
        },
      ].map((subRole, index) => (
        <Select
          fullWidth
          key={index}
          onChange={(e) => {
            mutate(
              {
                ...user,
                Roles: [
                  ...user.Roles.slice(0, index),
                  {
                    ...user.Roles[index],
                    ID: e.target.value as number,
                    Name: roles.filter(
                      (role) => role.ID === (e.target.value as number)
                    )[0].Name,
                    Subroles: [],
                  },
                  ...user.Roles.slice(index + 1),
                ],
              },
              false
            ).then((value) => {
              if (value) {
                onSubmit(value);
              }
            });
          }}
          required={subRole.ID !== 0}
          style={{ marginTop: 10 }}
          value={subRole.ID}
          variant="outlined"
        >
          <MenuItem value={0}>None</MenuItem>
          {roles.map((role) => (
            <MenuItem key={role.ID} value={role.ID}>
              {role.Name}
            </MenuItem>
          ))}
        </Select>
      ))}
    </Paper>
  );
};

export default User;
