import { commonStyles, flexStyles, textStyles } from '@petersburg-bar/common-ui';
import { motion } from 'framer-motion';
import styled, { css } from 'styled-components';

import type { FlattenSimpleInterpolation, StyledProps } from 'styled-components';

const { displayFlex, justifyCenter, justifySpaceBetween, alignItemsCenter } = flexStyles;
const { pointer, selectNone, hoverFrame, cursorDefault } = commonStyles;
const { fontFamilySofiaSansSemiCondensed, colorWhite } = textStyles;

export const WhitePlateStyles = css`
    font-size: 16px;
    max-width: 240px;
    margin: 40px auto 30px;
    font-weight: 900;
`;

export const Price = styled.div`
    font-weight: 700;
    font-size: 17px;
    text-transform: uppercase;
    padding: 8px 20px;
    border: 3px #d5621d solid;
    border-radius: 5px;
    transition: all 0.2s linear;
    ${pointer}
`;

export const MenuItemContainer = styled.div`
    width: 485px;
    height: 140px;
    margin-bottom: 15px;
    margin-right: 20px;
    padding: 15px;
    ${hoverFrame};
    &:hover ${Price} {
        background: #d5621d;
    }
    ${selectNone}
    ${pointer}
    ${colorWhite}
    ${fontFamilySofiaSansSemiCondensed}
    ${displayFlex};
    ${justifySpaceBetween};
`;

export const Img = styled.img`
    width: 23%;
    height: 110px;
`;

export const InfoBlock = styled.div`
    ${displayFlex};
    ${justifySpaceBetween};
    ${alignItemsCenter};
`;

export const Description = styled.div`
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;
`;

export const Title = styled.div`
    font-weight: 700;
    font-size: 25px;
    text-transform: uppercase;
`;

export const Weight = styled.div`
    color: #d5621d;
`;

export const SliderContainer = styled(motion.div)`
    margin-bottom: 20px;
    ${displayFlex}
    ${justifySpaceBetween}
    ${alignItemsCenter}
`;

export const Button = css`
    width: 50px;
    height: 50px;
    background: #d5621d;
    border-radius: 5px;
    z-index: 100;
    transition: all 0.2s linear;
    ${selectNone}
    ${displayFlex}
    ${justifyCenter}
    ${alignItemsCenter}
`;

type TTitleStyles = StyledProps<{
    isActiveButton?: boolean | FlattenSimpleInterpolation;
}>;

export const ButtonRight = styled.div<TTitleStyles>`
    ${Button}
    ${({ isActiveButton }) => (isActiveButton ? pointer : cursorDefault)};
    transform: rotate(180deg);
    background: ${({ isActiveButton }) => (isActiveButton ? '#d5621d' : '#8a6854')};
    &:hover {
        background: ${({ isActiveButton }) => (isActiveButton ? '#ff6200' : '#8a6854')};
    }
`;

export const ButtonLeft = styled.div<TTitleStyles>`
    ${Button}
    ${({ isActiveButton }) => (isActiveButton ? pointer : cursorDefault)};
    background: ${({ isActiveButton }) => (isActiveButton ? '#d5621d' : '#8a6854')};
    &:hover {
        background: ${({ isActiveButton }) => (isActiveButton ? '#ff6200' : '#8a6854')};
    }
`;
