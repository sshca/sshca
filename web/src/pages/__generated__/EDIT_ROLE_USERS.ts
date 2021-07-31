/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: EDIT_ROLE_USERS
// ====================================================

export interface EDIT_ROLE_USERS_editRoleUsers {
  __typename: "Role";
  id: string;
}

export interface EDIT_ROLE_USERS {
  editRoleUsers: EDIT_ROLE_USERS_editRoleUsers | null;
}

export interface EDIT_ROLE_USERSVariables {
  id: string;
  userIds: string[];
}
