import { flexStyles, textStyles } from '@petersburg-bar/common-ui';
import { motion } from 'framer-motion';
import styled, { css } from 'styled-components';

const { displayFlex, alignItemsCenter, justifySpaceAround } = flexStyles;
const { colorWhite, fontFamilySofiaSansSemiCondensed, textTransformUppercase } = textStyles;

export const Name = styled(motion.div)`
    ${colorWhite};
    ${fontFamilySofiaSansSemiCondensed};
    ${textTransformUppercase};
    font-weight: 700;
    margin-bottom: 7px;
    z-index: 100;
    transition: all 0.2s linear;
`;

export const Img = styled(motion.img)`
    width: 170px;
    height: 185px;
    margin-bottom: 25px;
    z-index: 100;
`;

export const Icons = styled(motion.div)`
    ${displayFlex};
    ${justifySpaceAround};
    width: 70%;
    margin-top: 20px;
`;

export const SoundEngineers = styled(motion.div)`
    ${displayFlex}
    ${alignItemsCenter}
`;

export const SoundEngineersStyles = css`
    font-size: 34px;
    width: 370px;
    letter-spacing: 2px;
`;

export const ListUl = styled.ul`
    list-style: inside;
`;

export const ListLi = styled.li`
    margin-bottom: 15px;
`;

export const WhitePlateStyles = css`
    font-size: 16px;
    max-width: 240px;
    margin: 40px auto 30px;
    font-weight: 900;
`;
