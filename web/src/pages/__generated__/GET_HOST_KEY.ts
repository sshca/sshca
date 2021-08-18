/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: GET_HOST_KEY
// ====================================================

export interface GET_HOST_KEY_host_subroles_role {
  __typename: "Role";
  name: string;
}

export interface GET_HOST_KEY_host_subroles {
  __typename: "Subrole";
  role: GET_HOST_KEY_host_subroles_role;
  username: string;
  id: string;
}

export interface GET_HOST_KEY_host {
  __typename: "Host";
  subroles: GET_HOST_KEY_host_subroles[];
  hostname: string;
  name: string;
  fingerprint: string | null;
}

export interface GET_HOST_KEY {
  host: GET_HOST_KEY_host | null;
  key: string;
}

export interface GET_HOST_KEYVariables {
  id: string;
}
