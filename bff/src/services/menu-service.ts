import { redisClient } from "../config";
import { MenuItems, MenuSale, mockMenu } from "../types";
import { axiosClient } from "../lib";

export const getMenuList = async (): Promise<MenuItems | undefined> => {
  try {
    const response = await axiosClient.get<MenuItems>("/menu");
    const data = response.data ?? mockMenu;

    await redisClient.setEx("menu", 60, JSON.stringify(data));
    return data;
  } catch (error) {
    throw new Error("Failed to fetch menu list.");
  }
};

export const getMenuSale = async (): Promise<MenuSale | undefined> => {
  try {
    const sale: MenuSale = { category: "сладкое", value: "25%" };
    await redisClient.setEx("menu-sale", 60, JSON.stringify(sale));
    return sale;
  } catch (error) {
    throw new Error("Failed to fetch menu sale.");
  }
};
