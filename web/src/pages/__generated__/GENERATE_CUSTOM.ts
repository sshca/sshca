/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { SubroleInput } from "./../../../__generated__/globalTypes";

// ====================================================
// GraphQL mutation operation: GENERATE_CUSTOM
// ====================================================

export interface GENERATE_CUSTOM {
  createCustomCertificate: string;
}

export interface GENERATE_CUSTOMVariables {
  key: string;
  subrole: SubroleInput;
  expiry: number;
}
