export interface BaseResponseWithError {
  error: string;
  data: null;
  status: number;
}

export interface BaseResponseWithData<T> {
  error: null;
  data: T;
  status: number;
}

export type BaseResponse<T> = BaseResponseWithError | BaseResponseWithData<T>;
