import type { FC } from 'react';

import { MButton, MTitle, MWhitePlate, animationVariants } from '@petersburg-bar/common-ui';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { css } from 'styled-components';

import { MSlider } from './slider/slider';

const { appearanceOnTheTop } = animationVariants;

export const WhitePlateStyles = css`
    font-size: 16px;
    max-width: 240px;
    margin: 40px auto 30px;
    font-weight: 900;
`;

interface Menu {
    setActiveRoute: (route: string) => void;
}

export const Menu: FC<Menu> = ({ setActiveRoute }) => {
    const navigate = useNavigate();
    const toMenu: () => void = () => {
        navigate('/menu');
        setActiveRoute('/menu');
    };

    return (
        <motion.section initial="hidden" viewport={{ amount: 0.15 }} whileInView="visible">
            <MWhitePlate
                scrollToTitle
                $commonStyles={WhitePlateStyles}
                custom={1}
                title="Top “Manhattan” menu"
                variants={appearanceOnTheTop()}
            />

            <MTitle custom={2} text="Кухня" variants={appearanceOnTheTop()} />
            <MSlider custom={3} variants={appearanceOnTheTop()} />
            <MButton
                center
                $marginBottom={20}
                custom={4}
                text="Всё меню"
                variants={appearanceOnTheTop(undefined, 0.2)}
                onClick={toMenu}
            />
        </motion.section>
    );
};
