/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: VERIFICATION_COMPLETION
// ====================================================

export interface VERIFICATION_COMPLETION {
  completeHostVerification: string | null;
}

export interface VERIFICATION_COMPLETIONVariables {
  id: string;
  hostId: string;
  accepted: boolean;
}
