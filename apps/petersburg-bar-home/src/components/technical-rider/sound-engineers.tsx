import type { FC } from 'react';

import { MTitle, animationVariants, flexStyles } from '@petersburg-bar/common-ui';
import { motion } from 'framer-motion';
import styled from 'styled-components';

import { SoundEngineer } from './sound-engineer';
import { SoundEngineers, SoundEngineersStyles } from './styles';

const { displayFlex, alignItemsCenter, flexDirectionColumn } = flexStyles;

const Container = styled(motion.div)`
    width: 45%;
    ${displayFlex}
    ${flexDirectionColumn}
    ${alignItemsCenter}
`;

export type soundEngineersState = {
    soundEngineers: SoundEngineer[];
};

const soundEngineers: SoundEngineer[] = [
    {
        photo: 'https://i.ibb.co/9VDZ2mx/image.png',
        name: 'Константин',
        surname: 'Изотов',
    },
    {
        photo: 'https://i.ibb.co/7K8f6Q1/image.png',
        name: 'Давид',
        surname: 'Хозиев',
    },
];

export const SoundEngineersComponent: FC = () => (
    <Container initial="hidden" viewport={{ amount: 0.1 }} whileInView="visible">
        <MTitle
            $commonStyles={SoundEngineersStyles}
            custom={1}
            text="Звукорежиссеры клуба МАНХЭТТЕН"
            variants={animationVariants.appearanceOnTheTop()}
        />

        <SoundEngineers>
            {soundEngineers.map((soundEngineer) => (
                <SoundEngineer key={soundEngineer.surname} data={soundEngineer} />
            ))}
        </SoundEngineers>
    </Container>
);
