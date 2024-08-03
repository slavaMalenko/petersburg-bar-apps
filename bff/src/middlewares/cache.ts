import { NextFunction, Request, Response } from "express";
import { redisClient } from "../config";
import { RedisCommandArgument } from "@redis/client/dist/lib/commands";

// Объявление функции для проверки кэша
export const checkCache = (key: RedisCommandArgument) => {
  return async (_: Request, res: Response, next: NextFunction) => {
    try {
      // Используем новый API клиента Redis для асинхронного получения данных
      const data = await redisClient.get(key);

      // Если данные есть в кэше, отправляем их как ответ
      if (data !== null) {
        res.send(JSON.parse(data));
      } else {
        // Иначе передаем управление следующему middleware
        next();
      }
    } catch (err) {
      // Обрабатываем возможные ошибки
      next(err);
    }
  };
};
