import { NextFunction, Request, Response } from "express";

export type IsKeyRegistered = (
  params: {
    where: any;
    model: any;
  }
) => any

export type ValidationResults = (
  request: Request,
  response: Response,
  next: NextFunction,
) => void
