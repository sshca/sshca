/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: CREATE_HOST
// ====================================================

export interface CREATE_HOST_createHost {
  __typename: "Host";
  id: string;
  hostname: string;
  name: string;
}

export interface CREATE_HOST {
  createHost: CREATE_HOST_createHost | null;
}

export interface CREATE_HOSTVariables {
  name: string;
  hostname: string;
}
