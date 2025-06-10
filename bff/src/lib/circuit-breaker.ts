import CircuitBreaker from "opossum";
import { axiosClient } from "./axios-client"; // Импортируем наш axiosClient
import { logger } from "./logger";

interface ErrorWithStatus extends Error {
  status?: number;
}

// Настройки Circuit Breaker
const options = {
  timeout: 5000, // Уменьшаем время ожидания до 0.5 секунды
  errorThresholdPercentage: 50, // Порог ошибки — 20%
  resetTimeout: 30000, // Сокращаем время сброса до 15 секунд
};

// Функция для создания Circuit Breaker
const createCircuitBreaker = (fn: Function) => {
  const breaker = new CircuitBreaker(fn, options);

  // Логирование состояния Circuit Breaker
  breaker.on("failure", () => {
    logger.error(
      "Circuit Breaker has detected a FAILURE: Increasing failure count. / " +
        "Circuit Breaker обнаружил НЕИСПРАВНОСТЬ: Увеличение счетчика отказов.",
      {
        metadata: { context: "opossum" },
      }
    );
  });

  breaker.on("open", () =>
    logger.warn(
      "Circuit Breaker is OPEN: Redirecting requests to fallback. / " +
        "Открытое состояние Circuit Breaker: Перенаправление запросов на альтернативный путь.",
      {
        metadata: { context: "opossum" },
      }
    )
  );

  breaker.on("halfOpen", () =>
    logger.info(
      "Circuit Breaker is HALF-OPEN: Testing if the service recovers. / " +
        "Полуоткрытое состояние Circuit Breaker: Тестирование восстановления сервиса.",
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

  breaker.fallback(() => {
    const error: ErrorWithStatus = new Error("Service Unavailable");
    error.status = 503;
    throw error;
  });

  return breaker;
};

// Оборачиваем axios.get
const getWithBreaker = createCircuitBreaker((url: string) =>
  axiosClient.get(url)
);

export { getWithBreaker };
