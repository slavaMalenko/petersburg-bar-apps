import { forwardRef } from 'react';

import { motion } from 'framer-motion';
import styled from 'styled-components';

import { MenuItemComponent } from './item';
import { SliderContainer, ButtonLeft, ButtonRight, SliderContent, ContentAbsolute } from './styles';
import { useMenu } from '../../api';
import { useSlider, useSliderButtons } from '../../store';
import Vector from '../img/vector.png';

const Img = styled.img`
    width: 10px;
    height: 17px;
`;

export const Slider = forwardRef<HTMLDivElement>((_, ref) => {
    const { data: menu, isLoading } = useMenu();
    const { elementsPassed, moveLeft, moveRight } = useSlider();
    const { isActiveButtonLeft, isActiveButtonRight } = useSliderButtons();

    if (isLoading || !menu || !menu.length) return <>Данные загружаются...</>;

    return (
        <SliderContainer ref={ref} initial="hidden" viewport={{ amount: 0.1 }} whileInView="visible">
            <ButtonLeft isActiveButton={isActiveButtonLeft} onClick={moveLeft}>
                <Img src={Vector} />
            </ButtonLeft>

            <SliderContent>
                <ContentAbsolute elementsPassed={elementsPassed}>
                    {menu.map((data, index) => (
                        <MenuItemComponent key={`${data?.description} ${index}`} data={data} />
                    ))}
                </ContentAbsolute>
            </SliderContent>

            <ButtonRight isActiveButton={isActiveButtonRight} onClick={moveRight}>
                <Img src={Vector} />
            </ButtonRight>
        </SliderContainer>
    );
});

export const MSlider = motion(Slider);
