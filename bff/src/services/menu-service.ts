import axios from "axios";
import { redisClient } from "../config";
import { MenuItem } from "../types";

export const getMenuList = async (): Promise<MenuItem[] | undefined> => {
  try {
    const response = await axios.get<MenuItem[]>(
      "https://668d5d80099db4c579f2b89a.mockapi.io/mock/menu"
    );
    const data = response.data;

    redisClient.setEx("menu", 60, JSON.stringify(data));
    return data;
  } catch (error) {
    console.error("Error fetching data from external API:", error);
  }
};
