import { HttpService } from "./http.service";
import { describe, it } from "@jest/globals";

describe("HttpService", () => {
  let httpService: HttpService;
  beforeEach(() => {
    httpService = new HttpService();
  });
  afterEach(() => {
    jest.restoreAllMocks();
  });
  it("should fetch data correctly", async () => {
    const mockResponse = { data: "test" };
    global.fetch = jest.fn().mockResolvedValue({
      json: jest.fn().mockResolvedValue(mockResponse),
    });

    const result = await httpService.get<{ data: string }>(
      "http://example.com",
    );
    expect(result).toEqual(mockResponse);
  });
});
