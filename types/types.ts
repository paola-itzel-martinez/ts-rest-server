import { Request, Response } from "express";

export type ExpressController = (request: Request, response: Response) => void;
