/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: FIRST_USER_SIGNUP
// ====================================================

export interface FIRST_USER_SIGNUP_firstUser {
  __typename: "AuthPayload";
  id: string;
}

export interface FIRST_USER_SIGNUP {
  firstUser: FIRST_USER_SIGNUP_firstUser | null;
}

export interface FIRST_USER_SIGNUPVariables {
  email: string;
  password: string;
}
