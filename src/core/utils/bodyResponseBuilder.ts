import { BaseResponse } from "../models/server/BaseResponse";

export const bodyResponseBuilder = <T>(
  data: T,
  statusCode: number,
  error: string | null,
): BaseResponse<T> => {
  if (error) {
    return { data: null, status: statusCode, error };
  }
  return { data, status: statusCode, error: null };
};
