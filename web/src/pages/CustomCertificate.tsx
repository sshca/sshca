import { gql, useMutation } from "@apollo/client";
import { Button, Paper, TextField } from "@mui/material";
import { DateTimePicker } from "@mui/x-date-pickers";
import dayjs, { Dayjs } from "dayjs";
import { FormEvent, useState } from "react";
import { SubroleInput } from "../../__generated__/globalTypes";
import SubroleCreator from "../components/SubroleCreator";
import { GENERATE_CUSTOM } from "./__generated__/GENERATE_CUSTOM";

const GENERATE_CUSTOM_MUTATION = gql`
  mutation GENERATE_CUSTOM(
    $key: String!
    $subrole: SubroleInput!
    $expiry: Float!
  ) {
    createCustomCertificate(key: $key, subrole: $subrole, expiry: $expiry)
  }
`;

const CustomCertificate = () => {
  const [subrole, setSubrole] = useState<SubroleInput | null>(null);
  const [key, setKey] = useState("");
  const [expiry, setExpiry] = useState<Dayjs | null>(dayjs().add(1, "hour"));

  const [generateCustom] = useMutation<GENERATE_CUSTOM>(
    GENERATE_CUSTOM_MUTATION,
    {
      variables: { key, expiry, subrole },
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
        <DateTimePicker
          label="Expiry Date"
          minDate={dayjs()}
          maxDate={dayjs().add(1, "year")}
          onChange={setExpiry}
          value={expiry}
        />
        <SubroleCreator
          subroles={subrole ? [subrole] : []}
          setSubroles={(subroles) =>
            setSubrole(subroles.length === 1 ? subroles[0] : null)
          }
          single
        />
        <Button type="submit" sx={{ float: "right" }}>
          Submit
        </Button>
      </form>
    </Paper>
  );
};

export default CustomCertificate;
