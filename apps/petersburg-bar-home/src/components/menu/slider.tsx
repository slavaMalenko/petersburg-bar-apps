import { useState, forwardRef } from 'react';

import { animationVariants, flexStyles } from '@petersburg-bar/common-ui';
import { motion } from 'framer-motion';
import styled from 'styled-components';

import Vector from './img/vector.png';
import { MMenuItem } from './menu-item';
import { ButtonLeft, ButtonRight, SliderContainer } from './styles';

const { displayFlex, flexWrap, flexDirectionColumn } = flexStyles;

const Img = styled.img`
    width: 10px;
    height: 17px;
`;

const Content = styled.div`
    width: 1015px;
    height: 635px;
    position: relative;
    overflow: hidden;
`;

const ContentAbsolute = styled.div<{ left: number }>`
    position: absolute;
    height: 620px;
    top: 5px;
    left: ${({ left }) => left}px;
    transition: all 0.3s linear;
    ${displayFlex}
    ${flexWrap}
    ${flexDirectionColumn}
`;

export type menuItem = {
    src: string;
    name: string;
    weight: number;
    description: string;
    price: number;
};

const menuMock: menuItem[] = [
    {
        src: 'https://i.ibb.co/tYfJHZV/Rectangle-36.png',
        name: 'Amet donec.',
        weight: 200,
        description:
            'Placerat id auctor nunc id vel vel curabitur. Urna fames maecenas leo elit diam nibh elit. Placerat id auctor nunc id vel vel curabitur. Urna fames maecenas leo elit diam nibh elit.',
        price: 550,
    },
    {
        src: 'https://i.ibb.co/SNvn1jP/Rectangle-36-1.png',
        name: 'Amet donec.',
        weight: 400,
        description: 'Pharetra morbi purus hendrerit risus vel consequat nunc, sed. Pharetra nulla imperdiet.',
        price: 550,
    },
    {
        src: 'https://i.ibb.co/GkMfXxc/Rectangle-36-2.png',
        name: 'Amet donec.',
        weight: 300,
        description:
            'In mauris, elit nisl sed. Nulla accumsan vestibulum sed velit sagittis quis accumsan. In mauris, elit nisl sed. Nulla accumsan vestibulum sed velit sagittis quis accumsan.',
        price: 550,
    },
    {
        src: 'https://i.ibb.co/tJkSr7g/Rectangle-36-3.png',
        name: 'Amet donec.',
        weight: 100,
        description: 'In cras pharetra aliquet laoreet. Lectus nisi ante felis quam pharetra in maecenas ut felis. ',
        price: 550,
    },
    {
        src: 'https://i.ibb.co/XjTpmW5/Rectangle-36-4.png',
        name: 'Amet donec.',
        weight: 350,
        description: 'Elit imperdiet faucibus euismod tortor risus volutpat molestie morbi sed. Porta ac eu.',
        price: 550,
    },
    {
        src: 'https://i.ibb.co/HTrg3nH/Rectangle-36-5.png',
        name: 'Amet donec.',
        weight: 500,
        description:
            'Leo in arcu in gravida vivamus scelerisque non. Euismod nec amet amet egestas nisl iaculis. Leo in arcu in gravida vivamus scelerisque non. Euismod nec amet amet egestas nisl iaculis.',
        price: 550,
    },
    {
        src: 'https://i.ibb.co/yPyfmVJ/Rectangle-36-6.png',
        name: 'Amet donec.',
        weight: 150,
        description:
            'Duis quisque tristique nulla cursus justo, etiam viverra nulla cras. Consectetur eget augue. Duis quisque tristique nulla cursus justo, etiam viverra nulla cras. Consectetur eget augue.',
        price: 550,
    },
    {
        src: 'https://i.ibb.co/8cc0Bwc/Rectangle-36-7.png',
        name: 'Amet donec.',
        weight: 500,
        description: 'Integer dolor et sed tempus non. Adipiscing viverra in viverra quisque pretium. Commodo.',
        price: 550,
    },
    {
        src: 'https://i.ibb.co/tYfJHZV/Rectangle-36.png',
        name: 'Amet donec.',
        weight: 200,
        description:
            'Placerat id auctor nunc id vel vel curabitur. Urna fames maecenas leo elit diam nibh elit. Placerat id auctor nunc id vel vel curabitur. Urna fames maecenas leo elit diam nibh elit.',
        price: 550,
    },
    {
        src: 'https://i.ibb.co/SNvn1jP/Rectangle-36-1.png',
        name: 'Amet donec.',
        weight: 400,
        description: 'Pharetra morbi purus hendrerit risus vel consequat nunc, sed. Pharetra nulla imperdiet.',
        price: 550,
    },
    {
        src: 'https://i.ibb.co/GkMfXxc/Rectangle-36-2.png',
        name: 'Amet donec.',
        weight: 300,
        description:
            'In mauris, elit nisl sed. Nulla accumsan vestibulum sed velit sagittis quis accumsan. In mauris, elit nisl sed. Nulla accumsan vestibulum sed velit sagittis quis accumsan.',
        price: 550,
    },
    {
        src: 'https://i.ibb.co/tJkSr7g/Rectangle-36-3.png',
        name: 'Amet donec.',
        weight: 100,
        description: 'In cras pharetra aliquet laoreet. Lectus nisi ante felis quam pharetra in maecenas ut felis. ',
        price: 550,
    },
    {
        src: 'https://i.ibb.co/XjTpmW5/Rectangle-36-4.png',
        name: 'Amet donec.',
        weight: 350,
        description: 'Elit imperdiet faucibus euismod tortor risus volutpat molestie morbi sed. Porta ac eu.',
        price: 550,
    },
    {
        src: 'https://i.ibb.co/HTrg3nH/Rectangle-36-5.png',
        name: 'Amet donec.',
        weight: 500,
        description:
            'Leo in arcu in gravida vivamus scelerisque non. Euismod nec amet amet egestas nisl iaculis. Leo in arcu in gravida vivamus scelerisque non. Euismod nec amet amet egestas nisl iaculis.',
        price: 550,
    },
    {
        src: 'https://i.ibb.co/yPyfmVJ/Rectangle-36-6.png',
        name: 'Amet donec.',
        weight: 150,
        description:
            'Duis quisque tristique nulla cursus justo, etiam viverra nulla cras. Consectetur eget augue. Duis quisque tristique nulla cursus justo, etiam viverra nulla cras. Consectetur eget augue.',
        price: 550,
    },
    {
        src: 'https://i.ibb.co/8cc0Bwc/Rectangle-36-7.png',
        name: 'Amet donec.',
        weight: 500,
        description: 'Integer dolor et sed tempus non. Adipiscing viverra in viverra quisque pretium. Commodo.',
        price: 550,
    },
    {
        src: 'https://i.ibb.co/GkMfXxc/Rectangle-36-2.png',
        name: 'Amet donec.',
        weight: 300,
        description:
            'In mauris, elit nisl sed. Nulla accumsan vestibulum sed velit sagittis quis accumsan. In mauris, elit nisl sed. Nulla accumsan vestibulum sed velit sagittis quis accumsan.',
        price: 550,
    },
    {
        src: 'https://i.ibb.co/tJkSr7g/Rectangle-36-3.png',
        name: 'Amet donec.',
        weight: 100,
        description: 'In cras pharetra aliquet laoreet. Lectus nisi ante felis quam pharetra in maecenas ut felis. ',
        price: 550,
    },
];

const Slider = forwardRef<HTMLDivElement>((_, ref) => {
    const [left, setLeft] = useState(localStorage.getItem('left') ? +localStorage.getItem('left') : 5);
    const [totalElements, setTotalElements] = useState(
        localStorage.getItem('totalElements') ? +localStorage.getItem('totalElements') : 8,
    );

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

            <Content>
                <ContentAbsolute left={left}>
                    {menuMock.map((data, index) => (
                        <MMenuItem
                            key={`${data?.description} ${index}`}
                            custom={index}
                            data={data}
                            variants={animationVariants.appearanceOnTheTop()}
                        />
                    ))}
                </ContentAbsolute>
            </Content>

            <ButtonRight
                isActiveButton={totalElements <= menuMock.length}
                onClick={() => {
                    if (menuMock.length > totalElements) {
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
