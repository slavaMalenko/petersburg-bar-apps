import { forwardRef } from 'react';

import { flexStyles } from '@petersburg-bar/common-ui';
import { motion } from 'framer-motion';
import styled from 'styled-components';

import { Description, Img, InfoBlock, MenuItemContainer, Price, Title, Weight } from './styles';

const { displayFlex, justifySpaceBetween, flexDirectionColumn } = flexStyles;

export const Content = styled.div`
    width: 77%;
    padding: 10px 0 0 20px;
    ${displayFlex};
    ${justifySpaceBetween};
    ${flexDirectionColumn};
`;

interface MenuItem {
    data: {
        src: string;
        name: string;
        weight: number;
        description: string;
        price: number;
    };
}

const MenuItem = forwardRef<HTMLDivElement, MenuItem>(({ data: { src, name, description, price, weight } }, ref) => (
    <MenuItemContainer ref={ref}>
        <Img src={src} />

        <Content>
            <InfoBlock>
                <Title>{name}</Title>
                <Price>{price} ₽</Price>
            </InfoBlock>

            <Weight>{weight} гр</Weight>

            <Description>{description}</Description>
        </Content>
    </MenuItemContainer>
));

export { MenuItem };
export const MMenuItem = motion(MenuItem);
