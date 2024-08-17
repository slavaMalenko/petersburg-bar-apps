import { Request, Response, NextFunction } from "express";
import { logger } from "../lib";

// Логирование всех запросов
export const requestLogger = (
  req: Request,
  _: Response,
  next: NextFunction
): void => {
  logger.info(`Incoming request: ${req.method} ${req.originalUrl}`, {
    metadata: {
      method: req.method,
      url: req.originalUrl,
      ip: req.ip,
    },
  });
  next();
};
