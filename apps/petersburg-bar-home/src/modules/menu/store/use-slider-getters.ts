import { createSelector } from 'reselect';
import { useStore } from 'zustand';

import { sliderStore } from './use-slider';

import type { Slider } from '../types';

export const sliderGetters = createSelector(
    (state: Slider) => state,
    ({ elementsPassed, totalElements }: Slider) => ({
        isActiveButtonLeft: elementsPassed > 8,
        isActiveButtonRight: elementsPassed < totalElements,
        isShowDiscounts: elementsPassed >= 12,
    }),
);

export const useSliderGetters = () => useStore(sliderStore, sliderGetters);
