import { GetCurrentResponse } from "../weatherAPIresponses/getCurrent.model";
import { BaseResponse } from "../server/BaseResponse";

export type GetCurrentResponseBody = BaseResponse<GetCurrentResponse>;
