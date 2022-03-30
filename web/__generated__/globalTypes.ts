/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

//==============================================================
// START Enums and Input Objects
//==============================================================

export enum Extension {
  permit_X11_forwarding = "permit_X11_forwarding",
  permit_agent_forwarding = "permit_agent_forwarding",
  permit_port_forwarding = "permit_port_forwarding",
  permit_pty = "permit_pty",
  permit_user_rc = "permit_user_rc",
}

export interface SubroleInput {
  username: string;
  hostId: string;
  extensions: Extension[];
  force_command?: string | null;
  source_address?: string | null;
}

//==============================================================
// END Enums and Input Objects
//==============================================================
