import { Request, Response } from "express";
import { getRidersList } from "../services";

export const getRiders = async (_: Request, res: Response): Promise<void> => {
  try {
    const menu = await getRidersList();
    res.status(200).json(menu);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
