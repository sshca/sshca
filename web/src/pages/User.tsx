import { gql, useMutation, useQuery } from "@apollo/client";
import { Delete } from "@mui/icons-material";
import {
  Autocomplete,
  Button,
  IconButton,
  List,
  ListItem,
  ListItemSecondaryAction,
  ListItemText,
  Paper,
  TextField,
  Typography,
} from "@mui/material";
import { startRegistration } from "@simplewebauthn/browser";
import { useParams } from "react-router";
import { BEGIN_PASSKEY_REGISTRATION } from "./__generated__/BEGIN_PASSKEY_REGISTRATION";
import { COMPLETE_PASSKEY_REGISTRATION } from "./__generated__/COMPLETE_PASSKEY_REGISTRATION";
import { DELETE_PASSKEY_CREDENTIAL } from "./__generated__/DELETE_PASSKEY_CREDENTIAL";
import { EDIT_USER_ROLES } from "./__generated__/EDIT_USER_ROLES";
import { GET_USER_ROLES_DETAILS } from "./__generated__/GET_USER_ROLES_DETAILS";

const GET_USER_QUERY = gql`
  query GET_USER_ROLES_DETAILS($id: ID!) {
    user(id: $id) {
      email
      fingerprint {
        fingerprint
      }
      passkeys {
        id
        name
        createdAt
        lastUsedAt
        transports
      }
      roles {
        name
        id
      }
    }
    me {
      id
    }
    allRoles {
      name
      id
    }
  }
`;
const EDIT_USER_ROLES_MUTATION = gql`
  mutation EDIT_USER_ROLES($id: ID!, $roleIds: [ID!]!) {
    editUserRoles(id: $id, roleIds: $roleIds) {
      id
    }
  }
`;
const BEGIN_PASSKEY_REGISTRATION_MUTATION = gql`
  mutation BEGIN_PASSKEY_REGISTRATION {
    beginPasskeyRegistration
  }
`;
const COMPLETE_PASSKEY_REGISTRATION_MUTATION = gql`
  mutation COMPLETE_PASSKEY_REGISTRATION($response: String!, $name: String) {
    completePasskeyRegistration(response: $response, name: $name) {
      id
    }
  }
`;
const DELETE_PASSKEY_CREDENTIAL_MUTATION = gql`
  mutation DELETE_PASSKEY_CREDENTIAL($id: ID!) {
    deletePasskeyCredential(id: $id) {
      id
    }
  }
`;

const User = () => {
  const { id } = useParams<{ id: string }>();
  const { loading, error, data, refetch } = useQuery<GET_USER_ROLES_DETAILS>(
    GET_USER_QUERY,
    { variables: { id } },
  );
  const [editRoleUsers] = useMutation<EDIT_USER_ROLES>(
    EDIT_USER_ROLES_MUTATION,
  );
  const [beginPasskeyRegistration] = useMutation<BEGIN_PASSKEY_REGISTRATION>(
    BEGIN_PASSKEY_REGISTRATION_MUTATION,
  );
  const [completePasskeyRegistration] =
    useMutation<COMPLETE_PASSKEY_REGISTRATION>(
      COMPLETE_PASSKEY_REGISTRATION_MUTATION,
    );
  const [deletePasskeyCredential] = useMutation<DELETE_PASSKEY_CREDENTIAL>(
    DELETE_PASSKEY_CREDENTIAL_MUTATION,
  );

  async function addPasskey() {
    const optionsResult = await beginPasskeyRegistration();
    const options = optionsResult.data?.beginPasskeyRegistration;
    if (!options) {
      return;
    }
    const response = await startRegistration({
      optionsJSON: JSON.parse(options),
    });
    const name = window.prompt("Passkey name") || undefined;
    await completePasskeyRegistration({
      variables: { response: JSON.stringify(response), name },
    });
    refetch();
  }

  if (error)
    return (
      <Paper className="paper">
        <Typography>Error Getting User</Typography>
      </Paper>
    );
  if (loading || !data || !data.user || !data.allRoles)
    return (
      <Paper className="paper">
        <Typography>Getting User...</Typography>
      </Paper>
    );
  return (
    <Paper className="paper">
      <Typography>Email: {data.user.email}</Typography>
      {data.user.fingerprint.length > 0 ? (
        <ul>
          {data.user.fingerprint.map((fingerprint) => (
            <li key={fingerprint.fingerprint}>
              Fingerprint: {fingerprint.fingerprint}
            </li>
          ))}
        </ul>
      ) : (
        <Typography>Fingerprint Not Configured</Typography>
      )}
      <Typography variant="h6">Passkeys</Typography>
      {data.user.passkeys.length > 0 ? (
        <List>
          {data.user.passkeys.map((passkey) => (
            <ListItem key={passkey.id}>
              <ListItemText
                primary={passkey.name || "Passkey"}
                secondary={`Created: ${new Date(
                  passkey.createdAt,
                ).toLocaleString()}${
                  passkey.lastUsedAt
                    ? ` Last used: ${new Date(
                        passkey.lastUsedAt,
                      ).toLocaleString()}`
                    : ""
                }`}
              />
              {data.me?.id === id && (
                <ListItemSecondaryAction>
                  <IconButton
                    edge="end"
                    aria-label="delete passkey"
                    onClick={async () => {
                      await deletePasskeyCredential({
                        variables: { id: passkey.id },
                      });
                      refetch();
                    }}
                  >
                    <Delete />
                  </IconButton>
                </ListItemSecondaryAction>
              )}
            </ListItem>
          ))}
        </List>
      ) : (
        <Typography>Passkeys Not Configured</Typography>
      )}
      {data.me?.id === id && (
        <Button onClick={addPasskey} style={{ marginBottom: "10px" }}>
          Add passkey
        </Button>
      )}
      <Autocomplete
        id="Roles"
        multiple
        options={data.allRoles}
        value={data.user.roles}
        getOptionLabel={(option) => option.name}
        onChange={async (_, value) => {
          await editRoleUsers({
            variables: { id, roleIds: value.map((role) => role.id) },
          });
          refetch();
        }}
        renderInput={(params) => (
          <TextField {...params} variant="outlined" label="Roles" />
        )}
      />
    </Paper>
  );
};

export default User;
