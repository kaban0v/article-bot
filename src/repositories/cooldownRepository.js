import { readFile, writeFile, mkdir } from 'node:fs/promises';
import { existsSync } from 'node:fs';
import path from 'node:path';

const filePath = path.resolve('data', 'cooldowns.json');

export const cooldownRepository = {
  async getAll() {
    if (!existsSync(filePath)) return {};
    const raw = await readFile(filePath, 'utf8');

    return raw ? JSON.parse(raw) : {};
  },
  async save(map) {
    await mkdir(path.dirname(filePath), { recursive: true });
    await writeFile(filePath, JSON.stringify(map, null, 2));
  }
};
