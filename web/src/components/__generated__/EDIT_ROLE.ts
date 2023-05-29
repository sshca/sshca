/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { SubroleInput } from "./../../../__generated__/globalTypes";

// ====================================================
// GraphQL mutation operation: EDIT_ROLE
// ====================================================

export interface EDIT_ROLE_editRoleSubroles {
  __typename: "Role";
  id: string;
}

export interface EDIT_ROLE {
  editRoleSubroles: EDIT_ROLE_editRoleSubroles | null;
}

export interface EDIT_ROLEVariables {
  id: string;
  subroles: SubroleInput[];
}
