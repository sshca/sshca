/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: GET_USER_ROLES_DETAILS
// ====================================================

export interface GET_USER_ROLES_DETAILS_user_fingerprint {
  __typename: "UserFingerprint";
  fingerprint: string;
}

export interface GET_USER_ROLES_DETAILS_user_passkeys {
  __typename: "PasskeyCredential";
  id: string;
  name: string | null;
  createdAt: number;
  lastUsedAt: number | null;
  transports: string[];
}

export interface GET_USER_ROLES_DETAILS_user_roles {
  __typename: "Role";
  name: string;
  id: string;
}

export interface GET_USER_ROLES_DETAILS_user {
  __typename: "User";
  email: string;
  fingerprint: GET_USER_ROLES_DETAILS_user_fingerprint[];
  passkeys: GET_USER_ROLES_DETAILS_user_passkeys[];
  roles: GET_USER_ROLES_DETAILS_user_roles[];
}

export interface GET_USER_ROLES_DETAILS_me {
  __typename: "User";
  id: string;
}

export interface GET_USER_ROLES_DETAILS_allRoles {
  __typename: "Role";
  name: string;
  id: string;
}

export interface GET_USER_ROLES_DETAILS {
  user: GET_USER_ROLES_DETAILS_user | null;
  me: GET_USER_ROLES_DETAILS_me | null;
  allRoles: GET_USER_ROLES_DETAILS_allRoles[];
}

export interface GET_USER_ROLES_DETAILSVariables {
  id: string;
}
