import { RequestHandler } from "express";

export const checkController: RequestHandler = (_req, res) => {
  res.status(200).end("OK");
};
