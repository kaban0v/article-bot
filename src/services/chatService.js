export const chatService = {
  async isBotAdmin(vk, peerId, groupId) {
    if (peerId < 2_000_000_000) return true;

    try {
      const { items } = await vk.api.messages.getConversationMembers({ peer_id: peerId });
      const bot = items.find((m) => m.member_id === -groupId);
      return Boolean(bot?.is_admin || bot?.is_owner);
    } catch {
      return false;
    }
  }
};
