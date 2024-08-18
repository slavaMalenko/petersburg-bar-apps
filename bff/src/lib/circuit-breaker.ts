import CircuitBreaker from "opossum";
import { axiosClient } from "./axios-client"; // Импортируем наш axiosClient
import { logger } from "./logger";

interface ErrorWithStatus extends Error {
  status?: number;
}

// Настройки Circuit Breaker
const options = {
  timeout: 1000, // 1 секунда. Может варьироваться в зависимости от ожидаемого времени ответа сервиса
  errorThresholdPercentage: 50, // Если 50% запросов неудачные, то переходит в открытое состояние
  resetTimeout: 30000, // 30 секунд ожидания перед тестированием восстановления
  rollingCountTimeout: 10000, // Период времени для мониторинга сбоев (6 секунд)
  rollingCountBuckets: 3, // Делим этот период на 3 корзины по 2 секунды каждая
};

// Функция для создания Circuit Breaker
const createCircuitBreaker = (fn: Function) => {
  const breaker = new CircuitBreaker(fn, options);

  // Логирование состояния Circuit Breaker
  breaker.on("halfOpen", () =>
    logger.info(
      "Circuit Breaker is HALF-OPEN: Testing if the service recovers. / " +
        "Полуоткрытое состояние Circuit Breaker: Тестирование восстановления сервиса.",
      {
        metadata: { context: "opossum" },
      }
    )
  );

  breaker.on("open", () =>
    logger.warn(
      "Circuit Breaker is OPEN: Redirecting requests to fallback. / " +
        "Открытое состояние Circuit Breaker: Перенаправление запросов на альтернативный путь.",
      {
        metadata: { context: "opossum" },
      }
    )
  );

  breaker.on("close", () =>
    logger.info(
      "Circuit Breaker is CLOSED: Service is available. / " +
        "Закрытое состояние Circuit Breaker: Сервис доступен.",
      {
        metadata: { context: "opossum" },
      }
    )
  );

  breaker.on("failure", () => {
    logger.error(
      "Circuit Breaker has detected a FAILURE: Increasing failure count. / " +
        "Circuit Breaker обнаружил НЕИСПРАВНОСТЬ: Увеличение счетчика отказов.",
      {
        metadata: { context: "opossum" },
      }
    );
  });

  breaker.fallback((err: Error) => {
    if (breaker.opened) {
      const error: ErrorWithStatus = new Error("Service Unavailable");
      error.status = 503;
      throw error;
    } else {
      throw err;
    }
  });

  return breaker;
};

// Оборачиваем axios.get
const getWithBreaker = createCircuitBreaker((url: string) =>
  axiosClient.get(url)
);

export { getWithBreaker };
