import 'dotenv/config';

export const config = {
  token: process.env.VK_TOKEN,
  groupId: Number(process.env.VK_GROUP_ID),
  cooldownHours: Number(process.env.COOLDOWN_HOURS ?? 24)
};
