import { GetCurrent } from "../models/weatherAPIresponses/getCurrent.model";
import { HttpService, httpService } from "./http.service";
import api from "../../../config/api.json";
class WeatherService {
  constructor(private httpService: HttpService) {}

  async getCurrentWeather(city: string): Promise<GetCurrent | null> {
    try {
      return await this.httpService.get<GetCurrent>(
        api.weatherApi.current
          .replace("{q}", city)
          .replace("{key}", process.env.WEATHER_TOKEN),
      );
    } catch (error) {
      console.log(error);
      return null;
    }
  }
}

//TODO: replace the key inside the url

export const weatherService = new WeatherService(httpService);
