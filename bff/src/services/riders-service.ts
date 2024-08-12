import { redisClient } from "../config";
import { mockRiders, TechnicalRiders } from "../types";

export const getRidersList = async (): Promise<TechnicalRiders | undefined> => {
  try {
    redisClient.setEx("riders", 60, JSON.stringify(mockRiders));
    return mockRiders;
  } catch (error) {
    console.error("Error fetching data from external API:", error);
  }
};
