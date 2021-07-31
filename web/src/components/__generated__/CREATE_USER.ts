/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: CREATE_USER
// ====================================================

export interface CREATE_USER_createUser {
  __typename: "User";
  email: string;
}

export interface CREATE_USER {
  createUser: CREATE_USER_createUser | null;
}

export interface CREATE_USERVariables {
  email: string;
  password: string;
}
