import { NextFunction, Request, Response } from "express";
import { redisClient } from "../config";
import { RedisCommandArgument } from "@redis/client/dist/lib/commands";
import { logger } from "../lib";

// Объявление функции для проверки кэша
export const checkCache = (key: RedisCommandArgument) => {
  return async (req: Request, res: Response, next: NextFunction) => {
    try {
      const data = await redisClient.get(key);

      // Если данные есть в кэше, отправляем их как ответ
      if (data !== null) {
        logger.info("Cache hit", {
          metadata: {
            key,
            url: req.originalUrl,
            method: req.method,
            context: "cache",
          },
        });
        res.send(JSON.parse(data));
      } else {
        // Логируем, что данных в кэше нет
        logger.info("Cache miss", {
          metadata: {
            key,
            url: req.originalUrl,
            method: req.method,
            context: "cache",
          },
        });
        next();
      }
    } catch (err) {
      // Логируем ошибку при проверке кэша
      logger.error("Error checking cache", {
        metadata: {
          key,
          url: req.originalUrl,
          method: req.method,
          error: err.message,
          context: "cache",
        },
      });
      // Обрабатываем возможные ошибки
      next(err);
    }
  };
};
