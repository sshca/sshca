/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: EDIT_USER_ROLES
// ====================================================

export interface EDIT_USER_ROLES_editUserRoles {
  __typename: "User";
  id: string;
}

export interface EDIT_USER_ROLES {
  editUserRoles: EDIT_USER_ROLES_editUserRoles | null;
}

export interface EDIT_USER_ROLESVariables {
  id: string;
  roleIds: string[];
}
