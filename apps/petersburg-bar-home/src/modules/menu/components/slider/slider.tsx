import { useState, forwardRef } from 'react';

import { animationVariants } from '@petersburg-bar/common-ui';
import { motion } from 'framer-motion';
import styled from 'styled-components';

import Vector from './img/vector.png';
import { MMenuItem } from './item';
import { SliderContainer, ButtonLeft, ButtonRight, SliderContent, ContentAbsolute } from './styles';
import { useMenu } from '../../api';

const Img = styled.img`
    width: 10px;
    height: 17px;
`;

const Slider = forwardRef<HTMLDivElement>((_, ref) => {
    const [left, setLeft] = useState(localStorage.getItem('left') ? +localStorage.getItem('left') : 5);
    const [totalElements, setTotalElements] = useState(
        localStorage.getItem('totalElements') ? +localStorage.getItem('totalElements') : 8,
    );

    const { data: menu, isLoading } = useMenu({ retry: 3 });

    if (isLoading || !menu || !menu.length) return <>Данные загружаются...</>;

    return (
        <SliderContainer ref={ref} initial="hidden" viewport={{ amount: 0.1 }} whileInView="visible">
            <ButtonLeft
                isActiveButton={totalElements > 8}
                onClick={() => {
                    const newLeft = left < 0 ? left + 500 : 5;

                    setLeft(newLeft);
                    localStorage.setItem('left', `${newLeft}`);

                    const newTotalElements = totalElements > 8 ? totalElements - 4 : totalElements;

                    setTotalElements(newTotalElements);
                    localStorage.setItem('totalElements', `${newTotalElements}`);
                }}
            >
                <Img src={Vector} />
            </ButtonLeft>

            <SliderContent>
                <ContentAbsolute left={left}>
                    {menu.map((data, index) => (
                        <MMenuItem
                            key={`${data?.description} ${index}`}
                            custom={index}
                            data={data}
                            variants={animationVariants.appearanceOnTheTop()}
                        />
                    ))}
                </ContentAbsolute>
            </SliderContent>

            <ButtonRight
                isActiveButton={totalElements <= menu.length}
                onClick={() => {
                    if (menu.length > totalElements) {
                        const newLeft = left - 500;

                        setLeft(newLeft);
                        localStorage.setItem('left', `${newLeft}`);

                        const newTotalElements = totalElements + 4;

                        setTotalElements(newTotalElements);
                        localStorage.setItem('totalElements', `${newTotalElements}`);
                    }
                }}
            >
                <Img src={Vector} />
            </ButtonRight>
        </SliderContainer>
    );
});

export { Slider };
export const MSlider = motion(Slider);
