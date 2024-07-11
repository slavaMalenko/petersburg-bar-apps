import { forwardRef } from 'react';

import { motion } from 'framer-motion';
import styled from 'styled-components';

import telegramIcon from './img/telegram-icon.png';
import vkIcon from './img/vk-icon.png';
import { textStyles, flexStyles, commonStyles } from '../common-styles';

const { displayFlex, justifyCenter, alignItemsCenter } = flexStyles;
const { pointer, selectNone } = commonStyles;
const { fontFamilySofiaSansSemiCondensed, textTransformUppercase, colorWhite, textAlignCenter } = textStyles;

const SIconHover = styled(motion.div)`
    background: #ff6200;
    top: 0;
    left: -405px;
    width: 400px;
    height: 50px;
    position: absolute;
    transition: all 0.5s linear;
    z-index: 1;
`;
const SIcon = styled(motion.div)`
    ${fontFamilySofiaSansSemiCondensed}
    ${selectNone}
  ${textTransformUppercase}
  ${colorWhite}
  ${pointer}
  ${textAlignCenter}
  ${displayFlex}
  ${justifyCenter}
  ${alignItemsCenter}
  position: relative;
    border: 2px solid #d5621d;
    border-radius: 5px;
    z-index: 100;

    width: 40px;
    height: 40px;
    box-sizing: border-box;
    font-weight: 700;
    font-size: 20px;
    transition: all 0.5s linear;
    overflow: hidden;

    &:hover {
        background: rgb(213, 98, 29);
    }

    &:hover ${SIconHover} {
        left: 0;
    }
`;
const SIconImg = styled(motion.img)`
    position: relative;
    z-index: 100;
    width: 20px;
    height: 12px;
`;

const Icon = forwardRef<HTMLDivElement, { type: 'telegram' | 'vk'; link?: string }>(({ type }, ref) => (
    <SIcon ref={ref}>
        <SIconImg src={type === 'telegram' ? (telegramIcon as string) : (vkIcon as string)} />
        <SIconHover />
    </SIcon>
));

export const TelegramIcon = forwardRef<HTMLDivElement, { link?: string }>((_, ref) => (
    <Icon ref={ref} type="telegram" />
));
export const MTelegramIcon = motion(TelegramIcon);

export const VkIcon = forwardRef<HTMLDivElement, { link?: string }>((_, ref) => <Icon ref={ref} type="vk" />);
export const MVkIcon = motion(VkIcon);
