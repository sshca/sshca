import gql from "graphql-tag";

export default gql`
  type User {
    id: ID!
    fingerprint: String
    email: String!
    roles: [Role!]!
  }

  type Role {
    id: ID!
    name: String!
    users: [User!]!
    subroles: [Subrole!]!
  }

  type Host {
    id: ID!
    name: String!
    hostname: String!
    subroles: [Subrole!]!
    fingerprint: String
    caPub: String!
  }

  type Subrole {
    id: ID!
    username: String!
    role: Role!
    host: Host!
    hostId: ID!
    extensions: [Extension!]!
  }

  enum Extension {
    permit_X11_forwarding
    permit_agent_forwarding
    permit_port_forwarding
    permit_pty
    permit_user_rc
  }

  input SubroleInput {
    username: String!
    hostId: ID!
    extensions: [Extension!]!
    force_command: String
    source_address: String
  }

  type AuthPayload {
    id: String!
    admin: Boolean!
  }

  type DeletionReturn {
    id: ID!
  }

  type HostVerification {
    createdAt: Float!
    fingerprint: String!
    id: ID!
  }

  input ExtensionsInput {
    permit_X11_forwarding: Boolean!
    permit_agent_forwarding: Boolean!
    permit_port_forwarding: Boolean!
    permit_pty: Boolean!
    permit_user_rc: Boolean!
  }

  input OptionsInput {
    force_command: OptionInput
    source_address: OptionInput
  }

  input OptionInput {
    value: String!
    enabled: Boolean!
  }

  type AuthSubrole {
    id: ID!
    hostName: String!
    user: String!
  }

  type Query {
    allRoles: [Role!]!
    allHosts: [Host!]!
    allUsers: [User!]!
    user(id: ID!): User
    role(id: ID!): Role
    host(id: ID!): Host
    hostVerificationStatus(id: ID!): HostVerification!
    hostVerificationStatuses: [HostVerification!]!
    isFirstUser: Boolean!
    listSubroles: [Subrole!]!
    key: String!
  }

  type HostGenerationReturn {
    cert: String!
    caPub: String!
  }

  type requestHostVerificationReturn {
    id: ID
    finished: Boolean!
  }

  type Mutation {
    generateKey(key: String!, subroleId: ID!): String!
    generateHostKey(key: String!): HostGenerationReturn!
    requestHostVerification(key: String!): requestHostVerificationReturn!
    completeHostVerification(id: ID!, hostId: ID, accepted: Boolean!): ID
    login(email: String!, password: String!): AuthPayload
    keyLogin(key: String!): ID!
    firstUser(email: String!, password: String!): AuthPayload
    createHost(name: String!, hostname: String!): Host
    createUser(email: String!, password: String!): User
    createRole(name: String!, subroles: [SubroleInput!]!): Role
    deleteHost(id: ID!): DeletionReturn
    deleteUser(id: ID!): DeletionReturn
    deleteRole(id: ID!): DeletionReturn
    editUserRoles(id: ID!, roleIds: [ID!]!): User
    editRoleUsers(id: ID!, userIds: [ID!]!): Role
    editRoleSubroles(id: ID!, subroles: [SubroleInput!]!): Role
    createCustomCertificate(
      key: String!
      subrole: SubroleInput!
      expiry: Float!
    ): String!
  }
`;
