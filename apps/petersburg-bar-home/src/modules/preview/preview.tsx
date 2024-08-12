import type { FC } from 'react';

import { MWhitePlate, animationVariants } from '@petersburg-bar/common';

import { Concerts } from './concerts';
import { PreviewContent, PreviewImg, PreviewShortTag, WhitePlateStyles } from './styles';

const { appearanceOnTheLeft } = animationVariants;

export const Preview: FC = () => (
    <PreviewContent initial="hidden" whileInView="visible">
        <PreviewImg>
            <MWhitePlate
                $commonStyles={WhitePlateStyles}
                custom={1}
                title="Since 1996"
                variants={appearanceOnTheLeft(0.5)}
            />
            <PreviewShortTag custom={2} variants={appearanceOnTheLeft()}>
                True. Fontanka. Underground.
            </PreviewShortTag>
        </PreviewImg>

        <Concerts />
    </PreviewContent>
);
