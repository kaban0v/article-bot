import { cooldownRepository } from '../repositories/cooldownRepository.js';
import { config } from '../config.js';

const hour = 3600 * 1000;

export const cooldownService = {
  async check(userId) {
    const all = await cooldownRepository.getAll();
    const last = all[userId];
    if (!last) return { allowed: true };

    const limit = config.cooldownHours * hour;
    const elapsed = Date.now() - last;
    if (elapsed >= limit) return { allowed: true };

    return { allowed: false, hoursLeft: Math.ceil((limit - elapsed) / hour) };
  },
  async touch(userId) {
    const all = await cooldownRepository.getAll();
    all[userId] = Date.now();
    await cooldownRepository.save(all);
  }
};
