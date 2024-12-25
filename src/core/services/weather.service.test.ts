import { httpService } from "./http.service";
import { weatherService } from "./weather.service";
import { describe, it } from "@jest/globals";

jest.mock("./http.service");

describe("WeatherService", () => {
  it("should return null if the city is not valid", async () => {
    (httpService.get as jest.Mock).mockRejectedValue("error");
    const result = await weatherService.getCurrentWeather("invalidCity");
    expect(result).toBeNull();
  });

  it("should return the value if the city is valid", async () => {
    const mockedResponse = { temperature: 100, condition: "Sunny" };
    (httpService.get as jest.Mock).mockResolvedValue(mockedResponse);
    const result = await weatherService.getCurrentWeather("validCity");
    expect(result).toEqual(mockedResponse);
  });
});
