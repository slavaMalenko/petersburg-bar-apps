import { useQuery } from '@tanstack/react-query';

import { axiosClient } from '../../../api';

import type { MenuItem } from '../types';
import type { UseQueryOptions } from '@tanstack/react-query';
import type { AxiosError } from 'axios';

export const getMenu = async (): Promise<MenuItem[]> => {
    const response = await axiosClient.get<MenuItem[]>('/menu');

    return response.data;
};

export const useMenu = (options?: Omit<UseQueryOptions<MenuItem[], AxiosError>, 'queryKey'>) =>
    useQuery({
        queryKey: ['menu'],
        queryFn: getMenu,
        staleTime: 30000,
        refetchInterval: 30000,
        refetchIntervalInBackground: true,
        ...options,
    });
