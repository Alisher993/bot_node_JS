const mineflayer = require('mineflayer');

function startBot() {
  const bot = mineflayer.createBot({
    host: 'dio_craft.aternos.me',
    username: 'Dont_Off_Server', // Изменяем ник при каждом входе
    version: '1.20.1',
  });

  bot.on('spawn', () => {
    console.log('✅ Бот зашёл на сервер!');

    // Имитируем активность каждые 5 сек
    const antiAfkInterval = setInterval(() => {
      if (bot.entity && bot.entity.onGround) {
        // Прыгнуть
        bot.setControlState('jump', true);
        setTimeout(() => bot.setControlState('jump', false), 300);

        // Нажать вперёд
        bot.setControlState('forward', true);
        setTimeout(() => bot.setControlState('forward', false), 500);
      }
    }, 5000);

    // Выход через 10 секунд
    setTimeout(() => {
      console.log('👋 Выход бота...');
      clearInterval(antiAfkInterval); // Остановить анти-AFK
      bot.quit();
    }, 10000);
  });

  bot.on('error', (err) => {
    console.log('❌ Ошибка:', err.message);
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
