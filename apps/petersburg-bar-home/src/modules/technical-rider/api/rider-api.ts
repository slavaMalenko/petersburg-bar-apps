import { useDataQuery } from '@petersburg-bar/common';

import { axiosClient } from '../../../api';

import type { TechnicalRiders } from '../types';

export const getRiders = async (): Promise<TechnicalRiders> => {
    const response = await axiosClient.get<TechnicalRiders>('/riders');

    return response.data;
};

export const useRiders = () => useDataQuery<TechnicalRiders>(getRiders, { queryKey: ['riders'] });
