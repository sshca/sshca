export function verifyAuth(user: { id?: string }) {
  return user.id !== undefined;
}
