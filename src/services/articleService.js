import { articles } from '../data/articles.js';

export const articleService = {
  random() {
    return articles[Math.floor(Math.random() * articles.length)];
  }
};
