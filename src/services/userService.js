export const userService = {
  async getById(vk, userId) {
    const [user] = await vk.api.users.get({ user_ids: String(userId) });

    return { id: user.id, firstName: user.first_name, lastName: user.last_name };
  }
};
