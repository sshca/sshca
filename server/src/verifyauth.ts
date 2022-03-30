export const verifyAuth = (
  user: { id?: string; admin?: boolean },
  needAdmin = true
): boolean => Boolean(needAdmin ? user.admin : user.id);
