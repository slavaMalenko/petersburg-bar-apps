import { forwardRef } from 'react';

import { motion } from 'framer-motion';

import { Content, Description, Img, InfoBlock, MenuItemContainer, Price, Title, Weight } from './styles';

import type { MenuItem } from '../../types';

interface MenuItemData {
    data: MenuItem;
}

export const MenuItemComponent = forwardRef<HTMLDivElement, MenuItemData>(
    ({ data: { src, name, description, price, weight } }, ref) => (
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
    ),
);

export const MMenuItem = motion(MenuItemComponent);
