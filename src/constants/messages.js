export const BUTTON_LABEL = 'Узнать свою статью';
export const BUTTON_COMMAND = 'article';

export const MESSAGES = {
  started: '🟢 Успешно, жми кнопку ниже, чтобы узнать свою статью.',
  notAdmin: '✍️ Выдайте мне права администратора в этой беседе, после чего снова используйте /start.',
  cooldown: (hours) => `Свою статью можно узнать раз в сутки. Осталось примерно ${hours} ч.`
};
