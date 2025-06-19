const mineflayer = require('mineflayer');

function startBot() {
  const bot = mineflayer.createBot({
    host: 'dio_craft.aternos.me',
    port: 25565,
    username: 'AFK_Bot',
    version: '1.20.1',
  });

  bot.on('spawn', () => {
    console.log('✅ Бот зашёл на сервер!');
    // Выход из игры через 10 секунд
    setTimeout(() => {
      console.log('👋 Выход бота...');
      bot.quit();
    }, 10000);
  });

  bot.on('error', (err) => {
    console.log('❌ Ошибка:', err.message);
    // Подождать и попробовать снова, не вырубая контейнер
    setTimeout(() => startBot(), 60000);
  });

  bot.on('end', () => {
    console.log('🔄 Перезапуск через 60 секунд...');
    setTimeout(() => startBot(), 60000);
  });
}

// Запуск
startBot();

// Не даём Railway завершить процесс
setInterval(() => {}, 1000);

