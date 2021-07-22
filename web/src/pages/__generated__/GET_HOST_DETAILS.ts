/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: GET_HOST_DETAILS
// ====================================================

export interface GET_HOST_DETAILS_host_subroles_role {
  __typename: "Role";
  name: string;
}

export interface GET_HOST_DETAILS_host_subroles {
  __typename: "Subrole";
  role: GET_HOST_DETAILS_host_subroles_role;
  username: string;
  id: string;
}

export interface GET_HOST_DETAILS_host {
  __typename: "Host";
  subroles: GET_HOST_DETAILS_host_subroles[];
  hostname: string;
  name: string;
}

export interface GET_HOST_DETAILS {
  host: GET_HOST_DETAILS_host | null;
}

export interface GET_HOST_DETAILSVariables {
  id: string;
}
