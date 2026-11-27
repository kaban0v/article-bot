# Article Bot

Бот, функционал которого заключается в выводе рандомной статьи пользователю из заготовленного списка.

### Installation

```bash
git clone https://github.com/kaban0v/article-bot.git
cd article-bot
npm install
```

### Configuration

Скопируйте `.env.example` в `.env` и заполните:

- `VK_TOKEN` - токен сообщества ВК
- `VK_GROUP_ID` - ID группы ВК
- `COOLDOWN_HOURS` - КД (в часах) на использование кнопки получения статьи
