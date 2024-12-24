import { Request, Response, NextFunction } from "express";
import { CustomServerError } from "../../errors/CustomServerError";
import { bodyResponseBuilder } from "../../utils/bodyResponseBuilder";

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const errorMiddleware = (
  err: unknown,
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  console.log("Error middleware: ", { err });

  let error = "";
  let status = 500;

  if (err instanceof Error) {
    error = err.message;
  }
  if (err instanceof CustomServerError) {
    error = err.message;
    status = err.status;
  }

  const responseBody = bodyResponseBuilder(null, status, error);
  res.status(status).json(responseBody);
};

export default errorMiddleware;
