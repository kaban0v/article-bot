export const buildArticleSentence = (user, article) =>
  `[id${user.id}|${user.firstName} ${user.lastName}] -> приговаривается к статье ${article}`;
