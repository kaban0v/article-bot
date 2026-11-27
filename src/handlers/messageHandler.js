import { config } from '../config.js';
import { MESSAGES, BUTTON_LABEL, BUTTON_COMMAND } from '../constants/messages.js';
import { getMainKeyboard } from '../utils/keyboard.js';
import { buildArticleSentence } from '../utils/format.js';
import { articleService } from '../services/articleService.js';
import { cooldownService } from '../services/cooldownService.js';
import { userService } from '../services/userService.js';
import { chatService } from '../services/chatService.js';

export const registerMessageHandler = (vk) => {
  vk.updates.on('message_new', async (context) => {
    const { message } = context;
    const text = context.text?.trim().toLowerCase();

    if (text === '/start') {
      const isAdmin = await chatService.isBotAdmin(vk, context.peerId, config.groupId);
      if (!isAdmin) {
        await context.send({ message: MESSAGES.notAdmin });
        return;
      }
      await context.send({ message: MESSAGES.started, keyboard: getMainKeyboard() });
      return;
    }

    const isArticleRequest =
      context.messagePayload?.command === BUTTON_COMMAND || text === BUTTON_LABEL.toLowerCase();

    if (!isArticleRequest) return;

    const { allowed, hoursLeft } = await cooldownService.check(context.senderId);
    if (!allowed) {
      await context.send({ message: MESSAGES.cooldown(hoursLeft) });
      return;
    }

    await cooldownService.touch(context.senderId);

    const user = await userService.getById(vk, context.senderId);
    const article = articleService.random();

    await context.send({ message: buildArticleSentence(user, article), keyboard: getMainKeyboard() });
  });
};
