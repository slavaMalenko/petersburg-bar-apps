import { NextFunction, Request, Response } from "express";
import { getMenuList, getMenuSale } from "../services";

export const getMenu = async (
  _: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  try {
    const menu = await getMenuList();
    res.status(200).json(menu);
  } catch (error) {
    next(error);
  }
};

export const getSale = async (
  _: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  try {
    const sale = await getMenuSale();
    res.status(200).json(sale);
  } catch (error) {
    next(error);
  }
};
