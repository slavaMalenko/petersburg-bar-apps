import winston from "winston";
import DailyRotateFile from "winston-daily-rotate-file";

const logFormat = winston.format.combine(
  winston.format.timestamp({ format: "YYYY-MM-DD HH:mm:ss" }),
  winston.format.printf((info) =>
    JSON.stringify(
      {
        timestamp: info.timestamp,
        level: info.level,
        message: info.message,
        ...info.metadata,
      },
      null,
      2
    )
  )
);

// Фильтр, который возвращает только те сообщения, у которых в metadata поле context равно определённым значениям
const cacheFilter = winston.format((info) =>
  info.metadata && info.metadata.context === "cache" ? info : false
);
const opossumFilter = winston.format((info) =>
  info.metadata && info.metadata.context === "opossum" ? info : false
);

const transports = [
  new winston.transports.Console({
    format: winston.format.combine(
      winston.format.colorize(),
      winston.format.metadata(),
      logFormat
    ),
  }),

  // Логирование сообщений уровня "error" в файлы, с ежедневной ротацией
  new DailyRotateFile({
    filename: "logs/error-%DATE%.log",
    datePattern: "YYYY-MM-DD",
    level: "error",
    maxFiles: "1d",
    format: winston.format.combine(winston.format.metadata(), logFormat),
  }),

  // Логирование всех сообщений в файлы, с ежедневной ротацией
  new DailyRotateFile({
    filename: "logs/combined-%DATE%.log",
    datePattern: "YYYY-MM-DD",
    maxFiles: "1d",
    format: winston.format.combine(winston.format.metadata(), logFormat),
  }),

  // Логирование только тех сообщений, которые относятся к контексту "cache" - redis
  new DailyRotateFile({
    filename: "logs/cache-%DATE%.log",
    datePattern: "YYYY-MM-DD",
    maxFiles: "1d",
    format: winston.format.combine(
      cacheFilter(),
      winston.format.metadata(),
      logFormat
    ),
  }),
  // Логирование только тех сообщений, которые относятся к контексту "opossum"
  new DailyRotateFile({
    filename: "logs/opossum-%DATE%.log",
    datePattern: "YYYY-MM-DD",
    maxFiles: "1d",
    format: winston.format.combine(
      opossumFilter(),
      winston.format.metadata(),
      logFormat
    ),
  }),
];

// Создаем экземпляр логгера с заданным уровнем логирования и параметрами форматирования и транспорты
export const logger = winston.createLogger({
  level: "info",
  format: logFormat,
  transports,
});
