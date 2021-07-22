/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: GET_HOSTS_DETAILS
// ====================================================

export interface GET_HOSTS_DETAILS_allHosts {
  __typename: "Host";
  id: string;
  hostname: string;
  name: string;
}

export interface GET_HOSTS_DETAILS {
  allHosts: GET_HOSTS_DETAILS_allHosts[];
}
