import { gql, useMutation } from "@apollo/client";
import { DateTimePicker } from "@mui/lab";
import {
  Button,
  Checkbox,
  FormControlLabel,
  Paper,
  TextField,
  Typography,
} from "@mui/material";
import { FormEvent, useState } from "react";
import { GENERATE_CUSTOM } from "./__generated__/GENERATE_CUSTOM";

const GENERATE_CUSTOM_MUTATION = gql`
  mutation GENERATE_CUSTOM(
    $key: String!
    $user: String!
    $extensions: ExtensionsInput!
    $options: OptionsInput!
    $expiry: Float!
  ) {
    createCustomCertificate(
      key: $key
      user: $user
      extensions: $extensions
      options: $options
      expiry: $expiry
    )
  }
`;

const CustomCertificate = () => {
  const [username, setUsername] = useState("");
  const [key, setKey] = useState("");
  const [expiry, setExpiry] = useState<number | null>(
    Date.now() + 60 * 60 * 1000
  );
  const [options, setOptions] = useState<{
    force_command: { value: string; enabled: boolean };
    source_address: { value: string; enabled: boolean };
  }>({
    force_command: { value: "", enabled: false },
    source_address: { value: "", enabled: false },
  });
  const [extensions, setExtensions] = useState({
    permit_X11_forwarding: false,
    permit_agent_forwarding: false,
    permit_port_forwarding: false,
    permit_pty: false,
    permit_user_rc: false,
  });

  const [generateCustom] = useMutation<GENERATE_CUSTOM>(
    GENERATE_CUSTOM_MUTATION,
    {
      variables: { user: username, key, extensions, options, expiry },
    }
  );

  function onSubmit(e: FormEvent) {
    e.preventDefault();
    generateCustom().then((data) => {
      if (data.data) {
        const a = window.document.createElement("a");
        a.href = window.URL.createObjectURL(
          new Blob([data.data.createCustomCertificate], { type: "text/csv" })
        );
        a.download = "custom_cert.pub";

        // Append anchor to body.
        document.body.appendChild(a);
        a.click();

        // Remove anchor from body
        document.body.removeChild(a);
      }
    });
  }

  return (
    <Paper className="paper" sx={{ overflow: "hidden" }}>
      <form onSubmit={onSubmit}>
        <TextField
          label="SSH public key"
          onChange={(e) => setKey(e.target.value)}
          value={key}
        />
        <TextField
          label="Username"
          onChange={(e) => setUsername(e.target.value)}
          value={username}
          sx={{ mt: 1 }}
        />
        <DateTimePicker
          label="Expiry Date"
          minDateTime={Date.now()}
          onChange={setExpiry}
          renderInput={(params) => <TextField {...params} sx={{ mt: 1 }} />}
          value={expiry}
        />
        <Typography sx={{ mt: 1 }}>Custom Settings:</Typography>
        <ul style={{ listStyle: "none", paddingLeft: 0 }}>
          {(Object.keys(extensions) as (keyof typeof extensions)[]).map(
            (extension) => (
              <li key={extension}>
                <FormControlLabel
                  style={{ margin: 0 }}
                  control={
                    <Checkbox
                      value={extensions[extension]}
                      onChange={(e) =>
                        setExtensions({
                          ...extensions,
                          [extension]: e.target.checked,
                        })
                      }
                    />
                  }
                  label={extension}
                />
              </li>
            )
          )}
          {(Object.keys(options) as (keyof typeof options)[]).map((option) => (
            <li key={option} style={{ marginTop: 10, marginLeft: 0 }}>
              <Checkbox
                value={option}
                onChange={(e) =>
                  setOptions({
                    ...options,
                    [option]: {
                      value: options[option].value,
                      enabled: e.target.checked,
                    },
                  })
                }
              />
              <TextField
                sx={{ width: "75%" }}
                disabled={!options[option].enabled}
                value={options[option].value}
                onChange={(e) =>
                  setOptions({
                    ...options,
                    [option]: {
                      enabled: options[option].enabled,
                      value: e.target.value,
                    },
                  })
                }
                fullWidth={false}
                label={option}
              />
            </li>
          ))}
        </ul>
        <Button type="submit" sx={{ float: "right" }}>
          Submit
        </Button>
      </form>
    </Paper>
  );
};

export default CustomCertificate;
