/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { SubroleInput } from "./../../../__generated__/globalTypes";

// ====================================================
// GraphQL mutation operation: CREATE_ROLE
// ====================================================

export interface CREATE_ROLE_createRole {
  __typename: "Role";
  id: string;
}

export interface CREATE_ROLE {
  createRole: CREATE_ROLE_createRole | null;
}

export interface CREATE_ROLEVariables {
  name: string;
  subroles: SubroleInput[];
}
