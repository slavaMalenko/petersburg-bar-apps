import styled from 'styled-components';

import { flexStyles, textStyles, commonStyles } from '../common-styles';

const { displayFlex, justifySpaceBetween, alignItemsCenter } = flexStyles;
const { pointer, selectNone } = commonStyles;
const { colorWhite, fontFamilySofiaSansSemiCondensed, textTransformUppercase } = textStyles;

export const Container = styled.div<{ height: number; isOpenBlock: boolean }>`
    ${fontFamilySofiaSansSemiCondensed}
    ${colorWhite}
    ${selectNone}
    ${({ height, isOpenBlock }) => (!isOpenBlock ? 'height: 58px;' : `height: ${height}px;`)}
    min-height: 63px;
    width: 100%;
    ${({ isOpenBlock }) => (isOpenBlock ? 'background: rgba(213, 98, 29, 1);' : 'background: rgba(213, 98, 29, 0.1);')}
    border-radius: 5px;
    overflow: hidden;
    margin-bottom: 20px;
    transition: all 0.25s linear;
`;
export const TitleBlock = styled.div`
    ${displayFlex}
    ${alignItemsCenter}
    ${justifySpaceBetween}
    ${pointer}
`;
export const Title = styled.div`
    ${textTransformUppercase}
    letter-spacing: 3px;
    font-weight: 700;
    font-size: 19px;
    padding: 22px 0 22px 40px;
`;
export const Arrow = styled.img<{ isOpenBlock: boolean }>`
    padding: 0 40px;
    width: 12px;
    height: 21px;
    transition: all 0.25s linear;
    transform: ${({ isOpenBlock }) => (isOpenBlock ? 'rotate(270deg);' : 'rotate(90deg);')};
`;
export const Description = styled.div`
    padding: 15px 0 15px 40px;
`;
