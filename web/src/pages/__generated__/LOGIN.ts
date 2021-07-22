/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: LOGIN
// ====================================================

export interface LOGIN_login {
  __typename: "AuthPayload";
  id: string;
}

export interface LOGIN {
  login: LOGIN_login | null;
}

export interface LOGINVariables {
  email: string;
  password: string;
}
