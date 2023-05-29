/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: HOST_VERIFICATIONS
// ====================================================

export interface HOST_VERIFICATIONS_hostVerificationStatuses {
  __typename: "HostVerification";
  fingerprint: string;
  createdAt: number;
  id: string;
}

export interface HOST_VERIFICATIONS {
  hostVerificationStatuses: HOST_VERIFICATIONS_hostVerificationStatuses[];
}
