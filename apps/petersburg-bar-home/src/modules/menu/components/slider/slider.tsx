import { forwardRef, memo, useMemo } from 'react';

import { motion } from 'framer-motion';
import styled from 'styled-components';

import { MenuItemComponent } from './item';
import { SliderContainer, ButtonLeft, ButtonRight, SliderContent, ContentAbsolute } from './styles';
import { useMenu } from '../../api';
import { useSlider, useSliderGetters } from '../../store';
import Vector from '../img/vector.png';

const Img = styled.img`
    width: 10px;
    height: 17px;
`;

const VectorImg = memo(() => <Img src={Vector} />);

export const Slider = forwardRef<HTMLDivElement>((_, ref) => {
    const { data: menu, isLoading } = useMenu();

    const { elementsPassed, moveLeft, moveRight } = useSlider();
    const { isActiveButtonLeft, isActiveButtonRight } = useSliderGetters();

    const { handleMoveLeft, handleMoveRight } = useMemo(
        () => ({
            handleMoveLeft: () => moveLeft(),
            handleMoveRight: () => moveRight(),
        }),
        [moveLeft, moveRight],
    );

    if (isLoading || !menu || !menu.length) return <>Данные загружаются...</>;

    return (
        <SliderContainer ref={ref} initial="hidden" viewport={{ amount: 0.1 }} whileInView="visible">
            <ButtonLeft isActiveButton={isActiveButtonLeft} onClick={handleMoveLeft}>
                <VectorImg />
            </ButtonLeft>

            <SliderContent>
                <ContentAbsolute elementsPassed={elementsPassed}>
                    {menu.map((data, index) => (
                        <MenuItemComponent key={`${data?.description} ${index}`} data={data} />
                    ))}
                </ContentAbsolute>
            </SliderContent>

            <ButtonRight isActiveButton={isActiveButtonRight} onClick={handleMoveRight}>
                <VectorImg />
            </ButtonRight>
        </SliderContainer>
    );
});

export const MSlider = motion(Slider);
