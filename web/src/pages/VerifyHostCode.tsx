import { gql, useMutation, useQuery } from "@apollo/client";
import {
  Autocomplete,
  Button,
  Paper,
  TextField,
  Typography,
} from "@mui/material";
import { FormEvent, useState } from "react";
import { useHistory, useParams } from "react-router-dom";
import { HOST_VERIFICATION } from "./__generated__/HOST_VERIFICATION";
import { VERIFICATION_COMPLETION } from "./__generated__/VERIFICATION_COMPLETION";

const HOST_VERIFICATION_QUERY = gql`
  query HOST_VERIFICATION($id: ID!) {
    hostVerificationStatus(id: $id) {
      fingerprint
      createdAt
    }
    allHosts {
      id
      name
    }
  }
`;

const VERIFICATION_COMPLETION_MUTATION = gql`
  mutation VERIFICATION_COMPLETION(
    $id: ID!
    $hostId: ID!
    $accepted: Boolean!
  ) {
    completeHostVerification(id: $id, hostId: $hostId, accepted: $accepted)
  }
`;

const VerifyHostCode = () => {
  const history = useHistory();
  const { id } = useParams<{ id: string }>();
  const [hostId, setHostId] = useState("");

  const { data, loading, error } = useQuery<HOST_VERIFICATION>(
    HOST_VERIFICATION_QUERY,
    {
      variables: { id },
    }
  );
  const [completeVerification] = useMutation<VERIFICATION_COMPLETION>(
    VERIFICATION_COMPLETION_MUTATION,
    { variables: { id, hostId } }
  );

  async function completeHostVerification(accepted: boolean) {
    const response = await completeVerification({ variables: { accepted } });
    if (response.data?.completeHostVerification) {
      history.push(`/host/${response.data.completeHostVerification}`);
    } else {
      history.push("/dash");
    }
  }

  function onSubmit(e: FormEvent) {
    e.preventDefault();
    completeHostVerification(true);
  }

  if (error)
    return (
      <Paper className="paper">
        <Typography>Error Getting Verification Details</Typography>
      </Paper>
    );
  if (loading || !data?.hostVerificationStatus || !data?.allHosts)
    return (
      <Paper className="paper">
        <Typography>Getting Verification Details</Typography>
      </Paper>
    );
  return (
    <Paper className="paper" style={{ textAlign: "center" }}>
      <form onSubmit={onSubmit}>
        <Typography variant="h3">Verify Host</Typography>
        <Typography>
          Fingerprint: {data.hostVerificationStatus.fingerprint}
        </Typography>
        <Typography>
          Requested At:{" "}
          {new Date(data.hostVerificationStatus.createdAt).toLocaleString()}
        </Typography>
        <Autocomplete
          style={{ margin: "auto", marginBottom: 10, width: "50%" }}
          value={data.allHosts.find((host) => host.id === hostId) || null}
          onChange={(_, value) => {
            setHostId(value!.id);
          }}
          options={data.allHosts}
          getOptionLabel={(option) => option.name}
          renderInput={(params) => (
            <TextField {...params} variant="outlined" label="Host" required />
          )}
        />
        <Button
          variant="contained"
          color="primary"
          type="submit"
          style={{ marginRight: 10 }}
        >
          Accept
        </Button>
        <Button
          variant="contained"
          color="secondary"
          onClick={() => completeHostVerification(false)}
        >
          Deny
        </Button>
      </form>
    </Paper>
  );
};

export default VerifyHostCode;
