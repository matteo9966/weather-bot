// import { CustomServerError } from '../errors/CustomServerError';
import Telegram from 'node-telegram-bot-api';
import { weatherService } from './weather.service';

export class TelegramBot {
  static #instance: TelegramBot;
  private token = process.env.BOT_TOKEN;
  private bot!: Telegram;
  private constructor() {
    if (!this.token) {
        return 
    //   throw new CustomServerError('Bot token not found', 500);
    }
  }

  public static getInstance() {
    if (!TelegramBot.#instance) {
      TelegramBot.#instance = new TelegramBot();
    }
    return TelegramBot.#instance;
  }

  public async start() {
    if(!this.token){
        console.log('Bot token not found')
        return
    }
    if (!this.bot) {
      this.bot = new Telegram(this.token, { polling: true });
    }
    this.messageListener();
    this.listenToCallbackQuery();
  }

  createKeyboard() {
    const keyboard = {
      reply_markup: {
        keyboard: [[{ text: 'Meteo' }]],
      },
    };
    return keyboard;
  }

  createWeatherKeyboard() {
    const keyboard = {
      reply_markup: {
        inline_keyboard: [
          [
            { text: 'Bari', callback_data: 'weather_bari' },
            { text: 'Milano', callback_data: 'weather_milano' },
            { text: 'Lecce', callback_data: 'weather_lecce' },
            { text: 'Roma', callback_data: 'weather_roma' },
          ],
        ],
      },
    };
    return keyboard;
  }

  messageListener() {
    this.bot.on('message', async (msg) => {
      switch (msg.text) {
        case '/start':
          this.bot.sendMessage(
            msg.chat.id,
            'Hello! I am a bot',
            this.createKeyboard()
          );
          break;
        case 'Meteo':
          this.bot.sendMessage(
            msg.chat.id,
            'Choose a city',
            this.createWeatherKeyboard()
          );
          break;

        default:
          this.bot.sendMessage(
            msg.chat.id,
            'I do not understand',
            this.createKeyboard()
          );
          break;
      }
    });
  }

  getWeather(name: string) {
    return weatherService.getCurrentWeather(name);
  }

   listenToCallbackQuery(){
    this.bot.on('callback_query', async (query) => {
        const city = query.data;
        const chatID = query.message?.chat.id;
        if(!city || !chatID){
         await this.bot.answerCallbackQuery(query.id);  
         return
        }

        const weatherData = await this.getWeather(city);
        if(!weatherData){
            await this.bot.sendMessage(chatID, 'City not found');
            return
        }
        await this.bot.sendMessage(chatID, JSON.stringify(weatherData));

    });
   }

}
