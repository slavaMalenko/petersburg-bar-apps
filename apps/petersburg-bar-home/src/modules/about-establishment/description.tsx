import { forwardRef } from 'react';

import { Button, Title, WhitePlate, flexStyles } from '@petersburg-bar/common';
import { motion } from 'framer-motion';
import styled from 'styled-components';

import { ButtonStyles, Description, WhitePlateStyles } from './styles';

const { displayFlex, justifySpaceBetween, alignItemsCenter, flexDirectionColumn } = flexStyles;

const Container = styled(motion.div)`
    ${displayFlex}
    ${flexDirectionColumn}
    ${alignItemsCenter}
    ${justifySpaceBetween}
    width: 30%;
`;

interface Description {
    plateTitle: string;
    blockTitle: string;
    descriptionList: string[];
    onClick?: () => void;
}

const DescriptionComponent = forwardRef<HTMLDivElement, Description>(
    ({ plateTitle, blockTitle, descriptionList, onClick }, ref) => (
        <Container ref={ref}>
            <WhitePlate scrollToTitle $commonStyles={WhitePlateStyles} title={plateTitle} />
            <Title text={blockTitle} />

            {descriptionList.map((item, index) => (
                <Description key={`${item} ${index}`}>{item}</Description>
            ))}

            <Button
                $hoverRight
                center
                $commonStyles={ButtonStyles}
                $marginBottom={10}
                text="Подробнее"
                onClick={onClick}
            />
        </Container>
    ),
);

export { DescriptionComponent as Description };
export const MDescription = motion(DescriptionComponent);
