import { useQuery } from '@tanstack/react-query';

import type { QueryFunction, QueryKey, UseQueryOptions } from '@tanstack/react-query';
import type { AxiosError } from 'axios';

export const useDataQuery = <T>(getData: QueryFunction<T, QueryKey, never>, options?: UseQueryOptions<T, AxiosError>) =>
    useQuery({
        // Функция, которая будет выполняться для получения данных.
        queryFn: getData,
        // Определяет время в миллисекундах, в течение которого данные считаются свежими (30 секунд).
        staleTime: 30000,
        // Интервал, через который данные будут автоматически перезапрашиваться с сервера (15 секунд).
        refetchInterval: 15000,
        // Опция, позволяющая выполнять перезапрос данных даже когда приложение работает в фоновом режиме.
        refetchIntervalInBackground: true,
        // Разворачивает дополнительные переданные опции в конфигурацию useQuery.
        ...options,
    });
