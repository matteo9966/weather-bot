import request from "supertest";
import { app } from "../../app"; // Assuming you have an express app instance
import { weatherService } from "../../core/services/weather.service";
import { BaseResponse } from "../../core/models/server/BaseResponse";
// import { CustomServerError } from '../../core/errors/CustomServerError';

jest.mock("../../core/services/weather.service");

describe("getCurrentWeatherController", () => {
  it("should return 400 if city is not provided", async () => {
    const response = await request(app).get("/weather/current");
    expect(response.status).toBe(400);
  });

  it("should return 400 if weather is not found", async () => {
    (weatherService.getCurrentWeather as jest.Mock).mockResolvedValue(null);
    const response = await request(app).get("/weather/current?q=invalidCity");
    expect(response.status).toBe(400);
    expect((<BaseResponse<unknown>>response.body).error).toBeDefined();
  });

  it("should return 400 if weather service returns an error", async () => {
    (weatherService.getCurrentWeather as jest.Mock).mockResolvedValue({
      error: "some error",
    });
    const response = await request(app).get("/weather/current?q=invalidCity");
    expect(response.status).toBe(400);
    expect((<BaseResponse<unknown>>response.body).error).toBe(
      "Weather not found",
    );
  });

  it("should return 200 and weather data if city is valid", async () => {
    const mockWeatherData = { temperature: 20, condition: "Sunny" };
    (weatherService.getCurrentWeather as jest.Mock).mockResolvedValue(
      mockWeatherData,
    );
    const response = await request(app).get("/weather/current?q=validCity");
    expect(response.status).toBe(200);
    expect(response.body.data).toEqual(mockWeatherData);
  });
});
