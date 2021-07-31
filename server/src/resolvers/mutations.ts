import { firstUser } from "./mutations/auth/firstuser";
import { login } from "./mutations/auth/login";
import { createHost } from "./mutations/create/host";
import { createUser } from "./mutations/create/user";
import { createRole } from "./mutations/create/role";
import { deleteHost } from "./mutations/delete/host";
import { deleteUser } from "./mutations/delete/user";
import { deleteRole } from "./mutations/delete/role";
import { editUserRoles } from "./mutations/edit/userRoles";
import { editRoleUsers } from "./mutations/edit/roleUsers";
import { generateKey } from "./mutations/auth/generateKey";

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
  generateKey,
};
