/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: COMPLETE_PASSKEY_LOGIN
// ====================================================

export interface COMPLETE_PASSKEY_LOGIN_completePasskeyLogin {
  __typename: "AuthPayload";
  id: string;
  admin: boolean;
}

export interface COMPLETE_PASSKEY_LOGIN {
  completePasskeyLogin: COMPLETE_PASSKEY_LOGIN_completePasskeyLogin;
}

export interface COMPLETE_PASSKEY_LOGINVariables {
  response: string;
}
