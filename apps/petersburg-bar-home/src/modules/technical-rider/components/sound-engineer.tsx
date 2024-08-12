import type { FC } from 'react';
import { useState } from 'react';

import { MTelegramIcon, MVkIcon, animationVariants, commonStyles, flexStyles } from '@petersburg-bar/common';
import { motion } from 'framer-motion';
import styled from 'styled-components';

import { Icons, Img, Name } from './styles';

const { displayFlex, alignItemsCenter, flexDirectionColumn } = flexStyles;
const { hoverFrame, pointer, selectNone } = commonStyles;
const { appearanceOnTheLeft, appearanceOnTheRight } = animationVariants;

const Container = styled(motion.div)`
    ${displayFlex};
    ${flexDirectionColumn};
    ${alignItemsCenter};
    ${pointer};
    ${hoverFrame};
    ${selectNone}
    padding: 20px;
    &:hover {
        transform: scale(1.03);
    }
    &:hover ${Name} {
        color: rgba(213, 98, 29, 1);
    }
`;

export type SoundEngineer = { photo: string; name: string; surname: string };
export const SoundEngineer: FC<{
    data: SoundEngineer;
}> = ({ data: { photo, name, surname } }) => {
    const [isRotate, setRotate] = useState<boolean>(false);

    return (
        <Container
            initial="hidden"
            viewport={{ amount: 0.1 }}
            whileInView="visible"
            onClick={() => setRotate(!isRotate)}
        >
            <Img animate={{ rotate: isRotate ? 360 : 0, scale: isRotate ? 0.85 : 1.05 }} src={photo} />

            <Name variants={appearanceOnTheRight(undefined, 0.2)}>{surname}</Name>
            <Name variants={appearanceOnTheLeft(undefined, 0.2)}>{name}</Name>

            <Icons>
                <MTelegramIcon variants={appearanceOnTheRight(undefined, 0.2, 0.02)} />
                <MVkIcon variants={appearanceOnTheLeft(undefined, 0.2, 0.02)} />
            </Icons>
        </Container>
    );
};
