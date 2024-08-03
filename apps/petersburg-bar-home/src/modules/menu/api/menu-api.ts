import { useQuery } from '@tanstack/react-query';

import { axiosClient } from '../../../api';

import type { MenuItems } from '../types';
import type { UseQueryOptions } from '@tanstack/react-query';
import type { AxiosError } from 'axios';

export const getMenu = async (): Promise<MenuItems> => {
    const response = await axiosClient.get<MenuItems>('/menu');

    return response.data;
};

export const useMenu = (options?: Omit<UseQueryOptions<MenuItems, AxiosError>, 'queryKey'>) =>
    useQuery({
        // Ключ для кэширования и идентификации запроса.
        queryKey: ['menu'],
        // Функция, которая будет выполняться для получения данных.
        queryFn: getMenu,
        // Определяет время в миллисекундах, в течение которого данные считаются свежими (30 секунд).
        staleTime: 30000,
        // Интервал, через который данные будут автоматически перезапрашиваться с сервера (30 секунд).
        refetchInterval: 30000,
        // Опция, позволяющая выполнять перезапрос данных даже когда приложение работает в фоновом режиме.
        refetchIntervalInBackground: true,
        // Разворачивает дополнительные переданные опции в конфигурацию useQuery.
        ...options,
    });
