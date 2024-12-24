import { RequestHandler } from "express";
import { weatherService } from "../../core/services/weather.service";
import { CustomServerError } from "../../core/errors/CustomServerError";
import { GetCurrent } from "../../core/models/weatherAPIresponses/getCurrent.model";
import { bodyResponseBuilder } from "../../core/utils/bodyResponseBuilder";
export const getCurrentWeatherController: RequestHandler = async (req, res) => {
  const q = req.query?.q;
  if (!q) throw new CustomServerError("Invalid City", 400);
  const weather: GetCurrent | null = await weatherService.getCurrentWeather(
    q as string,
  );
  if (!weather) throw new CustomServerError("Weather not found", 400);
  if (Object.hasOwnProperty.call(weather, "error")) {
    throw new CustomServerError("Weather not found", 400);
  }
  const responseBody = bodyResponseBuilder(weather, 200, null);

  res.status(200).json(responseBody);
};
