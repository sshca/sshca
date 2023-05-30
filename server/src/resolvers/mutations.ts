import { completeHostVerification } from "./mutations/auth/completeHostVerification";
import { createCustomCertificate } from "./mutations/auth/createCustomCertificate";
import { firstUser } from "./mutations/auth/firstuser";
import { generateHostKey } from "./mutations/auth/generateHostKey";
import { generateKey } from "./mutations/auth/generateKey";
import { keyLogin } from "./mutations/auth/keyLogin";
import { login } from "./mutations/auth/login";
import { requestHostVerification } from "./mutations/auth/requestHostVerification";
import { createHost } from "./mutations/create/host";
import { createRole } from "./mutations/create/role";
import { createUser } from "./mutations/create/user";
import { deleteHost } from "./mutations/delete/host";
import { deleteRole } from "./mutations/delete/role";
import { deleteUser } from "./mutations/delete/user";
import { editRoleSubroles } from "./mutations/edit/roleSubroles";
import { editRoleUsers } from "./mutations/edit/roleUsers";
import { editUserRoles } from "./mutations/edit/userRoles";

export const Mutation = {
  firstUser,
  login,
  createHost,
  createUser,
  createRole,
  deleteHost,
  deleteUser,
  deleteRole,
  editUserRoles,
  editRoleUsers,
  editRoleSubroles,
  generateKey,
  requestHostVerification,
  completeHostVerification,
  generateHostKey,
  createCustomCertificate,
  keyLogin,
};
