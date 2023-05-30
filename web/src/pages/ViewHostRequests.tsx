import { gql, useQuery } from "@apollo/client";
import { Button, Paper, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import { HOST_VERIFICATIONS } from "./__generated__/HOST_VERIFICATIONS";

const HOST_VERIFICATIONS_QUERY = gql`
  query HOST_VERIFICATIONS {
    hostVerificationStatuses {
      fingerprint
      createdAt
      id
    }
  }
`;

const ViewHostRequests = () => {
  const { data, loading, error } = useQuery<HOST_VERIFICATIONS>(
    HOST_VERIFICATIONS_QUERY
  );
  if (error)
    return (
      <Paper className="paper">
        <Typography>Error Getting Verification Details</Typography>
      </Paper>
    );
  if (loading || !data?.hostVerificationStatuses)
    return (
      <Paper className="paper">
        <Typography>Getting Verification Details</Typography>
      </Paper>
    );
  if (data.hostVerificationStatuses.length === 0)
    return (
      <Paper className="paper">
        <Typography>No verification requests found</Typography>
      </Paper>
    );
  return (
    <>
      {data.hostVerificationStatuses.map((host) => (
        <Paper className="paper" key={host.fingerprint}>
          <Link to={`/verifyHost/${host.id}`}>
            <Button
              variant="contained"
              color="primary"
              style={{ float: "right" }}
            >
              View
            </Button>
          </Link>
          <Typography>Host Fingerprint: {host.fingerprint}</Typography>
          <Typography>
            Requested At: {new Date(host.createdAt).toLocaleString()}
          </Typography>
        </Paper>
      ))}
    </>
  );
};

export default ViewHostRequests;
