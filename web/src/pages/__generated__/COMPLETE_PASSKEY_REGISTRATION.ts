/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: COMPLETE_PASSKEY_REGISTRATION
// ====================================================

export interface COMPLETE_PASSKEY_REGISTRATION_completePasskeyRegistration {
  __typename: "PasskeyCredential";
  id: string;
}

export interface COMPLETE_PASSKEY_REGISTRATION {
  completePasskeyRegistration: COMPLETE_PASSKEY_REGISTRATION_completePasskeyRegistration;
}

export interface COMPLETE_PASSKEY_REGISTRATIONVariables {
  response: string;
  name?: string | null;
}
