const TelegramApi = require('node-telegram-bot-api');

const token = "6494358145:AAENPk0CZjUbqXA7PSJyqXMs7OhN4IME6-4";

const bot = new TelegramApi(token, { polling: true });


bot.on('message', (msg) => {
    username = `@${msg.chat.username}`;
    fullName = `${msg.chat.first_name} ${msg.chat.last_name}`;
    text = msg.text;
    chatid = msg.chat.id;
    groupID = -4041193250;
    console.log(msg)
    if (text === '/start') {
        bot.sendMessage(chatid, "Привет напише мне своё сообщение и это увидет студ.совет");
    } else {
        bot.sendMessage(groupID, `${text}\n${fullName}\n${username}`);
    }
})


