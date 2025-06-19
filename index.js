const mineflayer = require('mineflayer');

function startBot() {
  const bot = mineflayer.createBot({
    host: 'dio_craft.aternos.me', // замени на свой адрес Aternos
    port: 25565,
    username: 'AFK_Bot',
    version: '1.20.1',
  });

  bot.on('spawn', () => {
    console.log('✅ Бот зашёл на сервер!');
    
    // Подождать 10 секунд и выйти
    setTimeout(() => {
      console.log('👋 Выход бота...');
      bot.quit();
    }, 10000);
  });

  bot.on('error', (err) => {
    console.log('❌ Ошибка:', err.message);
    process.exit(1);
  });

  bot.on('end', () => {
    console.log('🔄 Перезапуск через 60 секунд...');
    setTimeout(() => startBot(), 60000);
  });
}

startBot();
