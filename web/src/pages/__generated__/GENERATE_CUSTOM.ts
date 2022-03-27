/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import {
  ExtensionsInput,
  OptionsInput,
} from "./../../../__generated__/globalTypes";

// ====================================================
// GraphQL mutation operation: GENERATE_CUSTOM
// ====================================================

export interface GENERATE_CUSTOM {
  createCustomCertificate: string;
}

export interface GENERATE_CUSTOMVariables {
  key: string;
  user: string;
  extensions: ExtensionsInput;
  options: OptionsInput;
  expiry?: number | null;
}
