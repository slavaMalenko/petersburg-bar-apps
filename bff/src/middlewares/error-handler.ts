import { Request, Response } from "express";
import { logger } from "../lib";

interface CustomError extends Error {
  status?: number;
}

// Логирование ошибок
export const errorHandler = (
  err: CustomError,
  req: Request,
  res: Response
): void => {
  const { message, status = 500 } = err;

  logger.error(`Error: ${message}`, {
    metadata: {
      status,
      method: req.method,
      url: req.originalUrl,
      ip: req.ip,
      stack: err.stack,
    },
  });
  res.status(status).json({ message });
};
