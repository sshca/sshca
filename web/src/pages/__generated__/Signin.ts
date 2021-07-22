/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: Signin
// ====================================================

export interface Signin_login {
  __typename: "AuthPayload";
  id: string;
}

export interface Signin {
  login: Signin_login | null;
}

export interface SigninVariables {
  email: string;
  password: string;
}
