import { Typography, TextField, Autocomplete } from "@mui/material";

const SubroleCreator = ({
  subroles,
  hosts,
  setSubroles,
}: {
  subroles: {
    username: string;
    hostId: string;
  }[];
  hosts: {
    id: string;
    name: string;
  }[];
  setSubroles: (
    subroles: {
      username: string;
      hostId: string;
    }[]
  ) => void;
}) => {
  return (
    <div>
      <Typography style={{ marginTop: 10 }}>Permissions:</Typography>
      <Typography style={{ float: "right" }}>Host:</Typography>
      <Typography align="left">Username:</Typography>
      {[...subroles, { username: "", hostId: "" }].map((subRole, index) => (
        <div key={index}>
          <TextField
            label="Username"
            id={`Username-${index + 1}`}
            onChange={(e) => {
              setSubroles([
                ...subroles.slice(0, index),
                {
                  ...subroles[index],
                  username: e.target.value,
                  hostId: subRole.hostId || "",
                },
                ...subroles.slice(index + 1),
              ]);
            }}
            required={subRole.hostId !== "" || subRole.username !== ""}
            style={{
              marginTop: 10,
              width: "47.5%",
              marginRight: "5%",
            }}
            value={subRole.username}
            variant="outlined"
          />
          <Autocomplete
            style={{ marginTop: 10, width: "47.5%", float: "right" }}
            value={hosts.find((host) => host.id === subRole.hostId)}
            id={`Host-${index + 1}`}
            onChange={(_, value) => {
              setSubroles([
                ...subroles.slice(0, index),
                {
                  ...subroles[index],
                  hostId: value!.id,
                },
                ...subroles.slice(index + 1),
              ]);
            }}
            options={hosts}
            getOptionLabel={(option) => option.name}
            renderInput={(params) => (
              <TextField {...params} variant="outlined" label="Host" />
            )}
          />
        </div>
      ))}
    </div>
  );
};

export default SubroleCreator;
