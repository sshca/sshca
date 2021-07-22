/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: GET_USER_DETAILS
// ====================================================

export interface GET_USER_DETAILS_user_roles {
  __typename: "Role";
  name: string;
}

export interface GET_USER_DETAILS_user {
  __typename: "User";
  email: string;
  roles: GET_USER_DETAILS_user_roles[];
}

export interface GET_USER_DETAILS {
  user: GET_USER_DETAILS_user | null;
}

export interface GET_USER_DETAILSVariables {
  id: string;
}
