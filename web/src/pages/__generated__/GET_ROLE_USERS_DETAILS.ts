/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: GET_ROLE_USERS_DETAILS
// ====================================================

export interface GET_ROLE_USERS_DETAILS_role_users {
  __typename: "User";
  email: string;
  id: string;
}

export interface GET_ROLE_USERS_DETAILS_role_subroles_host {
  __typename: "Host";
  hostname: string;
}

export interface GET_ROLE_USERS_DETAILS_role_subroles {
  __typename: "Subrole";
  username: string;
  id: string;
  host: GET_ROLE_USERS_DETAILS_role_subroles_host;
}

export interface GET_ROLE_USERS_DETAILS_role {
  __typename: "Role";
  name: string;
  users: GET_ROLE_USERS_DETAILS_role_users[];
  subroles: GET_ROLE_USERS_DETAILS_role_subroles[];
}

export interface GET_ROLE_USERS_DETAILS_allUsers {
  __typename: "User";
  email: string;
  id: string;
}

export interface GET_ROLE_USERS_DETAILS {
  role: GET_ROLE_USERS_DETAILS_role | null;
  allUsers: GET_ROLE_USERS_DETAILS_allUsers[];
}

export interface GET_ROLE_USERS_DETAILSVariables {
  id: string;
}
