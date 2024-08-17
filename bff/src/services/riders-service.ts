import { redisClient } from "../config";
import { mockRiders, TechnicalRiders } from "../types";

export const getRidersList = async (): Promise<TechnicalRiders | undefined> => {
  try {
    await redisClient.setEx("riders", 60, JSON.stringify(mockRiders));
    return mockRiders;
  } catch (error) {
    throw new Error("Failed to fetch riders.");
  }
};
