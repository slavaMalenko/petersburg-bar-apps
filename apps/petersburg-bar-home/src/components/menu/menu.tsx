import type { FC } from 'react';

import { MButton, MTitle, MWhitePlate, animationVariants } from '@petersburg-bar/common-ui';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

import { MSlider } from './slider';
import { WhitePlateStyles } from './styles';

const { appearanceOnTheTop } = animationVariants;

interface Menu {
    setActiveRoute: (route: string) => void;
}

const Menu: FC<Menu> = ({ setActiveRoute }) => {
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

export { Menu };
