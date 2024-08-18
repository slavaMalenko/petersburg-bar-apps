import { MenuItems, MenuSale, mockMenu } from "../types";
import { axiosClient, getWithBreaker, redisClient } from "../lib";

export const getMenuList = async (): Promise<MenuItems | undefined> => {
  try {
    const response = await getWithBreaker.fire("/menu");
    const data = response.data;
    await redisClient.setEx("menu", 60, JSON.stringify(data));
    return data;
  } catch (error) {
    throw error;
  }
};

export const getMenuSale = async (): Promise<MenuSale | undefined> => {
  try {
    const sale: MenuSale = { category: "сладкое", value: "25%" };
    await redisClient.setEx("menu-sale", 60, JSON.stringify(sale));
    return sale;
  } catch (error) {
    throw error;
  }
};
