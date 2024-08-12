import axios from "axios";
import { redisClient } from "../config";
import { MenuItems, MenuSale, mockMenu } from "../types";
import { axiosClient } from "../lib";

export const getMenuList = async (): Promise<MenuItems | undefined> => {
  try {
    const response = await axiosClient.get<MenuItems>("/menu");
    const data = response.data ?? mockMenu;

    redisClient.setEx("menu", 60, JSON.stringify(data));
    return data;
  } catch (error) {
    console.error("Error fetching data from external API:", error);
  }
};

export const getMenuSale = async (): Promise<MenuSale | undefined> => {
  try {
    const sale: MenuSale = { category: "сладкое", value: "25%" };
    redisClient.setEx("menu-sale", 60, JSON.stringify(sale));
    return sale;
  } catch (error) {
    console.error("Error fetching data from external API:", error);
  }
};
