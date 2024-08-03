import { createSelector } from 'reselect';
import { useStore } from 'zustand';

import { useSliderStore } from './use-slider';

import type { Slider } from '../types';

export const selectIsActiveButtons = createSelector(
    (state: Slider) => state,
    ({ elementsPassed, totalElements }: Slider) => ({
        isActiveButtonLeft: elementsPassed > 8,
        isActiveButtonRight: elementsPassed < totalElements,
    }),
);

export const useSliderButtons = () => useStore(useSliderStore, selectIsActiveButtons);
