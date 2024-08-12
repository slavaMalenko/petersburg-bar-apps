import { useDataQuery } from '@petersburg-bar/common';

import { axiosClient } from '../../../api';
import { sliderStore } from '../store';

import type { MenuItems, MenuSale } from '../types';

export const getMenu = async (): Promise<MenuItems> => {
    const response = await axiosClient.get<MenuItems>('/menu');

    return response.data;
};
export const getMenuSale = async (): Promise<MenuSale> => {
    const response = await axiosClient.get<MenuSale>('/menu/sale');

    return response.data;
};

// Экземляр меню
export const useMenu = () => useDataQuery<MenuItems>(getMenu, { queryKey: ['menu'], refetchInterval: 90000 });
// Экземляр скидок на меню
export const useMenuSale = () => {
    const { elementsPassed } = sliderStore(({ elementsPassed, totalElements }) => ({
        elementsPassed,
        totalElements,
    }));

    return useDataQuery<MenuSale>(getMenuSale, {
        queryKey: ['menu-sale'],
        refetchInterval: false,
        refetchIntervalInBackground: false,
        enabled: elementsPassed >= 12,
    });
};
