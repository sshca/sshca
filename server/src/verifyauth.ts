export const verifyAuth = (
  user: { id?: string; admin?: boolean; fullLogin?: boolean },
  needAdmin = true,
  needFullLogin = true
): boolean => {
  if (needFullLogin) {
    if (needAdmin) {
      return Boolean(user.admin);
    } else {
      return Boolean(user.fullLogin);
    }
  } else {
    return Boolean(user.id);
  }
};
