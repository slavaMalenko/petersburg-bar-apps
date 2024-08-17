import { NextFunction, Request, Response } from "express";
import { getRidersList } from "../services";

export const getRiders = async (
  _: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  try {
    const menu = await getRidersList();
    res.status(200).json(menu);
  } catch (error) {
    next(error);
  }
};
