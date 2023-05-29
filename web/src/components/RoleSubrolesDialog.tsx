import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  TextField,
} from "@mui/material";
import React from "react";
import { SubroleInput } from "../../__generated__/globalTypes";
import SubroleCreator from "./SubroleCreator";

const RoleSubrolesDiaglog = ({
  dialogOpen,
  setDialogOpen,
  onSubmit,
  title,
  startingName = "",
  startingSubroles = [],
}: {
  dialogOpen: boolean;
  setDialogOpen(value: boolean): void;
  onSubmit(name: string, subroles: SubroleInput[]): void;
  title: string;
  startingName?: string;
  startingSubroles?: SubroleInput[];
}) => {
  const [name, setName] = React.useState(startingName);
  const [subroles, setSubroles] =
    React.useState<SubroleInput[]>(startingSubroles);

  return (
    <Dialog
      onClose={() => setDialogOpen(false)}
      open={dialogOpen}
      style={{ textAlign: "center" }}
      fullWidth
      maxWidth="xl"
    >
      <DialogTitle id="simple-dialog-title">{title} Role</DialogTitle>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          setName(startingName);
          setSubroles(startingSubroles);
          onSubmit(name, subroles);
        }}
      >
        <DialogContent>
          <TextField
            id="Name"
            fullWidth
            label="Name"
            onChange={(e) => setName(e.target.value)}
            required
            value={name}
            variant="outlined"
          />
          <SubroleCreator subroles={subroles} setSubroles={setSubroles} />
        </DialogContent>
        <DialogActions>
          <Button
            onClick={() => {
              setDialogOpen(false);
              setSubroles([]);
              setName("");
            }}
            color="primary"
            variant="contained"
          >
            Cancel
          </Button>
          <Button color="primary" variant="contained" type="submit">
            {title}
          </Button>
        </DialogActions>
      </form>
    </Dialog>
  );
};

export default RoleSubrolesDiaglog;
