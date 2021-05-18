import {
  Button as IconButton,
  List,
  Paper,
  Typography,
} from "@material-ui/core";
import { Add } from "@material-ui/icons";
import React from "react";
import useSWR from "swr";
import fetcher from "../lib/fetcher";
import AddHost from "./AddHost";
import Host from "./Host";

const Hosts = () => {
  const {
    data: hosts,
    error,
    mutate: mutateHosts,
  } = useSWR<{ Name: string; Hostname: string; ID: number }[] | undefined, any>(
    "/api/web/hosts",
    fetcher
  );
  const [dialogOpen, setDialogOpen] = React.useState(false);

  if (error) {
    return (
      <Paper className="paper">
        <Typography>Error Getting Hosts</Typography>
      </Paper>
    );
  } else if (!hosts) {
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
          mutateHosts={mutateHosts}
          hosts={hosts}
        />
        <Typography>Hosts:</Typography>
        <List style={{ overflow: "scroll", maxHeight: "30vh" }}>
          {hosts.map((host) => (
            <Host
              host={host}
              key={host.ID}
              mutate={() =>
                mutateHosts(hosts.filter((newHost) => newHost.ID !== host.ID))
              }
            />
          ))}
        </List>
      </Paper>
    );
  }
};

export default Hosts;
