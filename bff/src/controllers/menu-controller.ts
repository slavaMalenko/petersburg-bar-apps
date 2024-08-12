import { Request, Response } from "express";
import { getMenuList, getMenuSale } from "../services";

export const getMenu = async (_: Request, res: Response): Promise<void> => {
  try {
    const menu = await getMenuList();
    res.status(200).json(menu);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const getSale = async (_: Request, res: Response): Promise<void> => {
  try {
    const sale = await getMenuSale();
    res.status(200).json(sale);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
