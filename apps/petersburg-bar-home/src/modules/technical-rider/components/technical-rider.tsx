import type { FC } from 'react';

import { MTitle, MWhitePlate, animationVariants, flexStyles } from '@petersburg-bar/common';
import { motion } from 'framer-motion';
import styled from 'styled-components';

import { SoundEngineersComponent as SoundEngineers } from './sound-engineers';
import { WhitePlateStyles } from './styles';
import { TechnicalRiderList } from './technical-rider-list';

const { displayFlex, justifyCenter } = flexStyles;

const Section = styled(motion.section)`
    margin-bottom: 30px;
`;
const Container = styled.div`
    ${displayFlex}
    ${justifyCenter}
`;

const { appearanceOnTheTop } = animationVariants;

export const TechnicalRider: FC = () => (
    <Section initial="hidden" viewport={{ amount: 0.1 }} whileInView="visible">
        <MWhitePlate
            scrollToTitle
            $commonStyles={WhitePlateStyles}
            custom={1}
            title="Top “Manhattan” party"
            variants={appearanceOnTheTop()}
        />
        <MTitle custom={2} text="Техрайдер" variants={appearanceOnTheTop()} />

        <Container>
            <TechnicalRiderList />
            <SoundEngineers />
        </Container>
    </Section>
);
