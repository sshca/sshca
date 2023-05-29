import { gql, useMutation } from "@apollo/client";
import { SubroleInput } from "../../__generated__/globalTypes";
import RoleSubrolesDiaglog from "./RoleSubrolesDialog";
import { CREATE_ROLE } from "./__generated__/CREATE_ROLE";

const CREATE_ROLE_MUTATION = gql`
  mutation CREATE_ROLE($name: String!, $subroles: [SubroleInput!]!) {
    createRole(name: $name, subroles: $subroles) {
      id
    }
  }
`;

const AddRole = ({
  dialogOpen,
  setDialogOpen,
  refetch,
}: {
  dialogOpen: boolean;
  setDialogOpen(value: boolean): void;
  refetch(): void;
}) => {
  const [addRole] = useMutation<CREATE_ROLE>(CREATE_ROLE_MUTATION, {});

  async function onSubmit(name: string, subroles: SubroleInput[]) {
    await addRole({ variables: { name, subroles } });
    refetch();
  }

  return (
    <RoleSubrolesDiaglog
      dialogOpen={dialogOpen}
      setDialogOpen={setDialogOpen}
      onSubmit={onSubmit}
      title={"Create"}
    />
  );
};

export default AddRole;
