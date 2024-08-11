import { useEffect } from 'react';

import { create } from 'zustand';
import { devtools, persist } from 'zustand/middleware';

import { useMenu } from '../api';

import type { Slider } from '../types';

export const sliderStore = create<Slider>()(
    devtools(
        persist(
            (set, get) => ({
                totalElements: 8,
                elementsPassed: 8,
                moveLeft: () => {
                    const { elementsPassed } = get();

                    set({ elementsPassed: elementsPassed > 8 ? elementsPassed - 4 : elementsPassed });
                },
                moveRight: () => {
                    const { totalElements, elementsPassed } = get();

                    if (totalElements > elementsPassed) set({ elementsPassed: elementsPassed + 4 });
                },
            }),
            {
                name: 'slider-storage',
            },
        ),
    ),
);

export const useSlider = () => {
    const { data: menu } = useMenu();

    useEffect(() => {
        if (menu?.length > 0) sliderStore.setState({ totalElements: menu.length });
    }, [menu]);

    return sliderStore();
};
