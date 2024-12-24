import { RequestHandler } from "express";

export const logMiddleware: RequestHandler = (req, _res, next) => {
  console.log("Method: ", req.method);
  console.log("URL: ", req.url);
  console.log("Query Params: ", req.query);
  next();
};
