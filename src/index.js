import { VK } from 'vk-io';
import { config } from './config.js';
import { registerMessageHandler } from './handlers/messageHandler.js';

const vk = new VK({ token: config.token });

registerMessageHandler(vk);

vk.updates.start().then(
  () => console.log('bot started'),
  (error) => console.error(error)
);
