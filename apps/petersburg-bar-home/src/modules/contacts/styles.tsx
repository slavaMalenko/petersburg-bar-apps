import { commonStyles, flexStyles, textStyles } from '@petersburg-bar/common-ui';
import { motion } from 'framer-motion';
import styled, { css } from 'styled-components';

import preview_map from './img/preview_map.png';

const { displayFlex, justifySpaceBetween } = flexStyles;
const { selectNone, pointer, overflowHidden } = commonStyles;
const { textTransformUppercase, fontFamilySofiaSansSemiCondensed, colorWhite } = textStyles;

export const WhitePlateStyles = css`
    font-size: 16px;
    max-width: 240px;
    margin: 40px auto 30px;
    font-weight: 900;
`;

export const Section = styled(motion.section)`
    margin: 0 0 100px;
`;
export const ContactsContainer = styled(motion.div)`
    ${overflowHidden}
    ${displayFlex}
    ${justifySpaceBetween}
    margin-bottom: 40px;
`;
export const ContactsMap = styled(motion.div)`
    width: 60%;
    background-size: cover;
    background: url(${preview_map}) no-repeat 50%;
`;

export const Container = styled(motion.div)`
    width: 30%;
    padding: 40px;
    background: rgba(213, 98, 29, 0.2);
    border: 2px solid #d5621d;
    border-radius: 5px;
    ${fontFamilySofiaSansSemiCondensed}
    ${colorWhite}
`;

export const InfoBlock = styled(motion.div)`
    margin-left: 0;
    margin-bottom: 25px;
    transition: all 0.2s linear;
    ${pointer}
    &:hover {
        margin-left: 20px;
    }
    &:last-child {
        margin-bottom: 0;
    }
`;

export const InfoBlockTitle = styled(motion.h1)`
    font-weight: 700;
    font-size: 21px;
    margin-bottom: 15px;
    ${selectNone}
    ${textTransformUppercase}
`;
export const InfoBlockDescription = styled(motion.p)`
    font-weight: 400;
    font-size: 16px;
`;
export const InfoBlockDivider = styled(motion.div)`
    width: 100%;
    height: 1px;
    margin: 25px 0;
    background: #fff;
`;
