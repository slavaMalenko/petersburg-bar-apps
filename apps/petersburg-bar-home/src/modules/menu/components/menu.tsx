import type { FC } from 'react';

import { MButton, MTitle, MWhitePlate, Title, animationVariants } from '@petersburg-bar/common';
import { useNavigate } from 'react-router-dom';
import { css } from 'styled-components';

import { Slider } from './slider';
import { Sale, Section, WhitePlateStyles } from './styles';
import { useMenuSale } from '../api';
import { useSliderGetters } from '../store';

const { appearanceOnTheTop } = animationVariants;

interface Menu {
    setActiveRoute: (route: string) => void;
}

export const Menu: FC<Menu> = ({ setActiveRoute }) => {
    const { data: sale } = useMenuSale();
    const { isShowDiscounts } = useSliderGetters();

    const navigate = useNavigate();
    const toMenu: () => void = () => {
        navigate('/menu');
        setActiveRoute('/menu');
    };

    return (
        <Section initial="hidden" viewport={{ amount: 0.15 }} whileInView="visible">
            <MWhitePlate
                scrollToTitle
                $commonStyles={WhitePlateStyles}
                custom={1}
                title="Top “Manhattan” menu"
                variants={appearanceOnTheTop()}
            />

            <MTitle custom={2} text="Кухня" variants={appearanceOnTheTop()} />
            <Slider />
            <Sale isShown={isShowDiscounts}>
                <Title
                    $commonStyles={css`
                        font-size: 25px;
                        margin-bottom: 30px;
                        width: 520px;
                    `}
                    isColorWhite={false}
                    text={`Что-то приглянулось, но ты дома? Закажи доствку! Сегодня скидка на ${sale?.category} - ${sale?.value}!`}
                />
            </Sale>
            <MButton
                center
                $marginBottom={20}
                custom={4}
                text="Всё меню"
                variants={appearanceOnTheTop(undefined, 0.2)}
                onClick={toMenu}
            />
        </Section>
    );
};
