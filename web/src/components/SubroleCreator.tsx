import { gql, useQuery } from "@apollo/client";
import {
  Typography,
  TextField,
  Autocomplete,
  Checkbox,
  FormControlLabel,
} from "@mui/material";
import { SubroleInput, Extension } from "../../__generated__/globalTypes";
import { GET_HOSTS } from "./__generated__/GET_HOSTS";

const GET_HOSTS_QUERY = gql`
  query GET_HOSTS {
    allHosts {
      id
      name
    }
  }
`;

const SubroleCreator = ({
  subroles,
  setSubroles,
  single = false,
}: {
  subroles: SubroleInput[];
  setSubroles: (subroles: SubroleInput[]) => void;
  single?: boolean;
}) => {
  const { loading, error, data } = useQuery<GET_HOSTS>(GET_HOSTS_QUERY);
  if (error) {
    return <Typography>Error Getting Hosts</Typography>;
  } else if (loading || !data) {
    return <Typography>Getting Hosts...</Typography>;
  }
  return (
    <div style={{ textAlign: "left" }}>
      <Typography style={{ marginTop: 10, textAlign: "center" }}>
        Permissions:
      </Typography>
      {subroles.map((subrole, index) => (
        <div key={index}>
          <TextField
            autoFocus
            label="Username"
            id={`Username-${index + 1}`}
            onChange={(e) => {
              if (e.target.value === "" && subrole.hostId === "") {
                setSubroles([
                  ...subroles.slice(0, index),
                  ...subroles.slice(index + 1),
                ]);
              } else {
                setSubroles([
                  ...subroles.slice(0, index),
                  {
                    ...subrole,
                    username: e.target.value,
                  },
                  ...subroles.slice(index + 1),
                ]);
              }
            }}
            required={subrole.hostId !== "" || subrole.username !== ""}
            style={{
              marginTop: 10,
              width: "25%",
            }}
            value={subrole.username}
            variant="outlined"
          />
          <Autocomplete
            style={{ marginTop: 10, width: "25%", float: "right" }}
            value={data.allHosts.find((host) => host.id === subrole.hostId)}
            id={`Host-${index + 1}`}
            onChange={(_, value) => {
              if (value === null && subrole.username === "") {
                setSubroles([
                  ...subroles.slice(0, index),
                  ...subroles.slice(index + 1),
                ]);
              } else {
                setSubroles([
                  ...subroles.slice(0, index),
                  {
                    ...subroles[index],
                    hostId: value!.id,
                  },
                  ...subroles.slice(index + 1),
                ]);
              }
            }}
            options={data.allHosts}
            getOptionLabel={(option) => option.name}
            renderInput={(params) => (
              <TextField
                {...params}
                variant="outlined"
                label="Host"
                required={subrole.hostId !== "" || subrole.username !== ""}
              />
            )}
          />
          <TextField
            label="Force Command (Optional)"
            id={`Force-Command-${index + 1}`}
            onChange={(e) => {
              setSubroles([
                ...subroles.slice(0, index),
                {
                  ...subrole,
                  force_command: e.target.value,
                },
                ...subroles.slice(index + 1),
              ]);
            }}
            style={{
              marginTop: 10,
              width: "25%",
            }}
            value={subrole.force_command}
            variant="outlined"
          />
          <TextField
            label="Source Address (Optional)"
            id={`Source-Address-${index + 1}`}
            onChange={(e) => {
              setSubroles([
                ...subroles.slice(0, index),
                {
                  ...subrole,
                  source_address: e.target.value,
                },
                ...subroles.slice(index + 1),
              ]);
            }}
            style={{
              marginTop: 10,
              width: "25%",
            }}
            value={subrole.source_address}
            variant="outlined"
          />
          {(Object.keys(Extension) as Extension[]).map((extension) => (
            <FormControlLabel
              style={{ margin: 0 }}
              control={
                <Checkbox
                  value={subrole}
                  onChange={(e) =>
                    setSubroles([
                      ...subroles.slice(0, index),
                      {
                        ...subrole,
                        extensions: e.target.checked
                          ? subrole.extensions.concat(extension)
                          : subrole.extensions.filter(
                              (srExtension) => srExtension != extension
                            ),
                      },
                      ...subroles.slice(index + 1),
                    ])
                  }
                />
              }
              label={extension}
            />
          ))}
        </div>
      ))}
      {(!single || subroles.length === 0) && (
        <TextField
          label="Additional Subrole"
          helperText="Start entering text to add another subrole"
          id={`Add-Subrole`}
          onChange={(e) => {
            setSubroles([
              ...subroles,
              { extensions: [], hostId: "", username: e.target.value },
            ]);
          }}
          style={{
            marginTop: 10,
            width: "47.5%",
            marginRight: "5%",
          }}
          value=""
          variant="outlined"
        />
      )}
    </div>
  );
};

export default SubroleCreator;
