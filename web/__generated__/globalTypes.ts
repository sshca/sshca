/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

//==============================================================
// START Enums and Input Objects
//==============================================================

export interface ExtensionsInput {
  permit_X11_forwarding: boolean;
  permit_agent_forwarding: boolean;
  permit_port_forwarding: boolean;
  permit_pty: boolean;
  permit_user_rc: boolean;
}

export interface OptionInput {
  value: string;
  enabled: boolean;
}

export interface OptionsInput {
  force_command?: OptionInput | null;
  source_address?: OptionInput | null;
}

export interface SubroleInput {
  username: string;
  hostId: string;
}

//==============================================================
// END Enums and Input Objects
//==============================================================
