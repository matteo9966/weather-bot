import { bodyResponseBuilder } from "./bodyResponseBuilder";
import { BaseResponse } from "../models/server/BaseResponse";

describe("bodyResponseBuilder", () => {
  it("should return a response with data and no error", () => {
    const data = { key: "value" };
    const statusCode = 200;
    const error = null;

    const expectedResponse: BaseResponse<typeof data> = {
      data,
      status: statusCode,
      error,
    };

    const response = bodyResponseBuilder(data, statusCode, error);

    expect(response).toEqual(expectedResponse);
  });

  it("should return a response with error and no data", () => {
    const data = null;
    const statusCode = 400;
    const error = "Bad Request";

    const expectedResponse: BaseResponse<typeof data> = {
      data,
      status: statusCode,
      error,
    };

    const response = bodyResponseBuilder(data, statusCode, error);

    expect(response).toEqual(expectedResponse);
  });

  it("should return a response with null data and error message", () => {
    const data = { key: "value" };
    const statusCode = 500;
    const error = "Internal Server Error";

    const expectedResponse: BaseResponse<typeof data> = {
      data: null,
      status: statusCode,
      error,
    };

    const response = bodyResponseBuilder(data, statusCode, error);

    expect(response).toEqual(expectedResponse);
  });

  it("should return a response with data and status code 201", () => {
    const data = { key: "value" };
    const statusCode = 201;
    const error = null;

    const expectedResponse: BaseResponse<typeof data> = {
      data,
      status: statusCode,
      error,
    };

    const response = bodyResponseBuilder(data, statusCode, error);

    expect(response).toEqual(expectedResponse);
  });
});
