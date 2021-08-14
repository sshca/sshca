/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: HOST_VERIFICATION
// ====================================================

export interface HOST_VERIFICATION_hostVerificationStatus {
  __typename: "HostVerification";
  fingerprint: string;
  createdAt: number;
}

export interface HOST_VERIFICATION_allHosts {
  __typename: "Host";
  id: string;
  name: string;
}

export interface HOST_VERIFICATION {
  hostVerificationStatus: HOST_VERIFICATION_hostVerificationStatus;
  allHosts: HOST_VERIFICATION_allHosts[];
}

export interface HOST_VERIFICATIONVariables {
  id: string;
}
