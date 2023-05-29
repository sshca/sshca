import { gql, useMutation } from "@apollo/client";
import { SubroleInput } from "../../__generated__/globalTypes";
import { GET_ROLE_USERS_DETAILS_role } from "../pages/__generated__/GET_ROLE_USERS_DETAILS";
import RoleSubrolesDiaglog from "./RoleSubrolesDialog";
import { EDIT_ROLE } from "./__generated__/EDIT_ROLE";

const EDIT_ROLE_MUTATION = gql`
  mutation EDIT_ROLE($id: ID!, $subroles: [SubroleInput!]!) {
    editRoleSubroles(id: $id, subroles: $subroles) {
      id
    }
  }
`;

const EditRole = ({
  dialogOpen,
  setDialogOpen,
  refetch,
  role,
}: {
  dialogOpen: boolean;
  setDialogOpen(value: boolean): void;
  refetch(): void;
  role: GET_ROLE_USERS_DETAILS_role;
}) => {
  const [editRole] = useMutation<EDIT_ROLE>(EDIT_ROLE_MUTATION, {
    variables: { id: role.id },
  });

  async function onSubmit(_: string, subroles: SubroleInput[]) {
    await editRole({
      variables: {
        subroles: subroles.map((subrole) => ({
          username: subrole.username,
          hostId: subrole.hostId,
          extensions: subrole.extensions,
          force_command: subrole.force_command,
          source_address: subrole.source_address,
        })),
      },
    });
    refetch();
  }

  return (
    <RoleSubrolesDiaglog
      dialogOpen={dialogOpen}
      setDialogOpen={setDialogOpen}
      onSubmit={onSubmit}
      title={"Update"}
      startingName={role.name}
      startingSubroles={role.subroles}
    />
  );
};

export default EditRole;
