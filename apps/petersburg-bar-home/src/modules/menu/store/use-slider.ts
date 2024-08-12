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

                    if (elementsPassed > 8) set({ elementsPassed: elementsPassed - 4 });
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
        if (menu?.length) sliderStore.setState({ totalElements: menu.length });
    }, [menu]);

    return sliderStore();
};

// TODO если бы нужно было чистить скидки в кэше (оставляю для себя)
// sliderStore.subscribe(({ elementsPassed }) => {
//     if (elementsPassed === 8) {
//         queryClient.removeQueries({ queryKey: ['menu-sale'] });
//     }
// });
