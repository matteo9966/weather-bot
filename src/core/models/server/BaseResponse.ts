export interface BaseResponse<T>{
    error:Error;
    data:T;
    status:number;
}

export interface Error{
    code: number;
    message: string;
}