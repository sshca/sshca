/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: GET_USER_ROLES_DETAILS
// ====================================================

export interface GET_USER_ROLES_DETAILS_user_roles {
  __typename: "Role";
  name: string;
  id: string;
}

export interface GET_USER_ROLES_DETAILS_user {
  __typename: "User";
  email: string;
  fingerprint: string | null;
  roles: GET_USER_ROLES_DETAILS_user_roles[];
}

export interface GET_USER_ROLES_DETAILS_allRoles {
  __typename: "Role";
  name: string;
  id: string;
}

export interface GET_USER_ROLES_DETAILS {
  user: GET_USER_ROLES_DETAILS_user | null;
  allRoles: GET_USER_ROLES_DETAILS_allRoles[];
}

export interface GET_USER_ROLES_DETAILSVariables {
  id: string;
}
