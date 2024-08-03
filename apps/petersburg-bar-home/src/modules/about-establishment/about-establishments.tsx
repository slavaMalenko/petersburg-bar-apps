import type { FC } from 'react';

import { animationVariants, flexStyles } from '@petersburg-bar/common-ui';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

import { MDescription } from './description';
import Rectangle from './img/rectangle.png';
import { Img } from './styles';

const { displayFlex, justifySpaceBetween } = flexStyles;
const { appearanceOnTheTop } = animationVariants;

const descriptionList = [
    'Quam massa pretium et venenatis. Fringilla sagittis, arcu massa, in sem viverra consequat. Tempus sed est interdum eget nisi, nec fames. Eget amet hac varius aliquam. Mattis egestas suspendisse convallis eu arcu et aliquet.',
    'Porttitor risus sociis vitae nunc id lacus eget felis. Viverra et purus nibh ut. Sed ac leo sit posuere vulputate sed morbi. Donec gravida at turpis sed pulvinar. A nibh non consectetur morbi in arcu, in pellentesque mauris.',
    'Eu sodales netus faucibus interdum interdum platea massa egestas. Facilisis donec gravida pretium diam semper at id eleifend.',
];

const Container = styled(motion.section)`
    ${displayFlex}
    ${justifySpaceBetween}
    margin: 40px 0px 65px;
`;

interface AboutEstablishments {
    setActiveRoute: (route: string) => void;
}

export const AboutEstablishments: FC<AboutEstablishments> = ({ setActiveRoute }) => {
    const navigate = useNavigate();

    return (
        <Container initial="hidden" viewport={{ amount: 0.1 }} whileInView="visible">
            <MDescription
                blockTitle="Банкеты"
                custom={1}
                descriptionList={descriptionList}
                plateTitle="Top “Manhattan” events"
                variants={appearanceOnTheTop()}
                onClick={() => {
                    navigate('/cooperation');
                    setActiveRoute('/cooperation');
                }}
            />
            <Img
                custom={2}
                drag="x"
                dragConstraints={{ left: 0, right: 0 }}
                src={Rectangle}
                variants={appearanceOnTheTop()}
            />
            <MDescription
                blockTitle="Туристы"
                custom={3}
                descriptionList={descriptionList}
                plateTitle="Top “Manhattan” tourists"
                variants={appearanceOnTheTop()}
            />
        </Container>
    );
};
