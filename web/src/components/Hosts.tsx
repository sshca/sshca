import { gql, useQuery } from "@apollo/client";
import {
  Button as IconButton,
  List,
  Paper,
  Typography,
} from "@material-ui/core";
import { Add } from "@material-ui/icons";
import React from "react";
import AddHost from "./AddHost";
import Host from "./Host";
import { GET_HOSTS_DETAILS } from "./__generated__/GET_HOSTS_DETAILS";

const GET_HOSTS_QUERY = gql`
  query GET_HOSTS_DETAILS {
    allHosts {
      id
      hostname
      name
    }
  }
`;

const Hosts = () => {
  const { loading, error, data, refetch } =
    useQuery<GET_HOSTS_DETAILS>(GET_HOSTS_QUERY);
  const [dialogOpen, setDialogOpen] = React.useState(false);

  if (error) {
    return (
      <Paper className="paper">
        <Typography>Error Getting Hosts</Typography>
      </Paper>
    );
  } else if (loading || !data) {
    return (
      <Paper className="paper">
        <Typography>Getting Hosts...</Typography>
      </Paper>
    );
  } else {
    return (
      <Paper className="paper">
        <IconButton
          aria-label="Add Host"
          style={{ float: "right", marginLeft: -100 }}
          onClick={() => setDialogOpen(true)}
        >
          <Add />
        </IconButton>
        <AddHost
          setDialogOpen={setDialogOpen}
          dialogOpen={dialogOpen}
          refetch={() => {
            setDialogOpen(false);
            refetch();
          }}
        />
        <Typography>Hosts:</Typography>
        <List style={{ overflow: "scroll", maxHeight: "30vh" }}>
          {data.allHosts.map((host) => (
            <Host host={host} key={host.id} remove={refetch} />
          ))}
        </List>
      </Paper>
    );
  }
};

export default Hosts;
