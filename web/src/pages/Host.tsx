import { Paper, Typography } from "@material-ui/core";
import React from "react";
import { useParams } from "react-router";
import useSWR from "swr";
import fetcher from "../lib/fetcher";
import Highlight from "react-highlight.js";

const Host = () => {
  const { id } = useParams<{ id: string }>();
  const { data: host, error: hostError } = useSWR<
    | {
        Name: string;
        Hostname: string;
        ID: number;
        Subroles: { ID: number; Username: string }[];
      }
    | undefined,
    any
  >(
    "http://localhost:5000/web/host?" +
      new URLSearchParams({
        id,
      }),
    fetcher
  );
  const { data: publicKey, error: keyError } = useSWR<string>(
    "http://localhost:5000/web/getKey",
    (url: string) =>
      fetch(url, { credentials: "include" }).then((res) => res.text())
  );
  if (hostError || keyError)
    return (
      <Paper className="paper">
        <Typography>Error Getting Host</Typography>
      </Paper>
    );
  if (!host || !publicKey)
    return (
      <Paper className="paper">
        <Typography>Getting Host</Typography>
      </Paper>
    );
  return (
    <Paper className="paper">
      <Typography>Name: {host.Name}</Typography>
      <Typography>Hostname: {host.Hostname}</Typography>
      <Typography>Permissions:</Typography>
      <Typography>
        Usernames: {host.Subroles.map((subrole) => subrole.Username).join(", ")}
      </Typography>
      <Highlight language="bash">
        {`if grep -Fxq "Include /etc/ssh/sshca/sshca_config" /etc/ssh/sshd_config
then
    :
else
    echo "Include /etc/ssh/sshca/sshca_config" >> /etc/ssh/sshd_config
fi
rm -rf /etc/ssh/sshca
mkdir -p /etc/ssh/sshca/auth_principals
echo "${publicKey.replace("\n", "")}" > /etc/ssh/sshca/ca.pub
echo "TrustedUserCAKeys /etc/ssh/sshca/ca.pub" > /etc/ssh/sshca/sshca_config
echo "AuthorizedPrincipalsFile /etc/ssh/sshca/auth_principals/%u" > /etc/ssh/sshca/sshca_config
${host.Subroles.map(
  (subrole) =>
    `echo "sshca_subrole_${subrole.ID}" > /etc/sshca/auth_pricipals/${subrole.Username}`
)}`}
      </Highlight>
    </Paper>
  );
};

export default Host;
