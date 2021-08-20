const { Telegram, Keyboard } = require('puregram');
const { telega } = require('./config');
const moment = require('moment');

const telegram = new Telegram({
	token: telega.token,
});

telegram.updates.on('message', (context) => {
	console.log('onmessage: ', context);

	if (context.text && /start/i.test(context.text)) {
		let keyboard = Keyboard.keyboard([
			[
				Keyboard.textButton('🎰 Список игр')
			],
			[
				Keyboard.textButton('🎫 Профиль')
			],
			[
				Keyboard.textButton('📥 Пополнить'),
				Keyboard.textButton('📤 Вывести')
			],
			[
				Keyboard.textButton('⚠ Поддержка'),
			]
		]).resize();

		return context.send(`🎉Привет,${context.from.firstName}🎉!`, {
			reply_markup: keyboard,
			parse_mode: 'Markdown'
		});
	} else if (context.text && /🎰\sСписок\sигр/i.test(context.text)) {
		let keyboard = Keyboard.keyboard([
			[
				Keyboard.textButton('🎰 Игровые Автоматы'),
				Keyboard.textButton('🎲 Рулетка')
			],
			[
				Keyboard.textButton('🔙 Назад'),
			]
		]).resize();

		let text = 'Список игр:' + "\n";
		
		text += '/slots или /автоматы - Испытай удачу в игровых автоматах!' + "\n";
		text += '/roulette или /рулетка - Настоящая рулетка как в казино!' + "\n";

		return context.send(text, {
			reply_markup: keyboard,
			parse_mode: 'Markdown'
		});
	}

});

telegram.updates.startPolling().then(
	() => console.log(`Started polling @${telegram.bot.username}`)
).catch(console.error);
