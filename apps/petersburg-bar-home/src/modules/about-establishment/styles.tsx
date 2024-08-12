import { commonStyles, textStyles } from '@petersburg-bar/common';
import { motion } from 'framer-motion';
import styled, { css } from 'styled-components';

const { cursorGrab, cursorGrabbing } = commonStyles;
const { colorWhite, fontFamilySofiaSansSemiCondensed, textAlignCenter } = textStyles;

export const Img = styled(motion.img)`
    width: 33.3%;
    z-index: 10000;
    ${cursorGrab}

    &:active {
        ${cursorGrabbing}
    }
`;

export const Description = styled.div`
    ${fontFamilySofiaSansSemiCondensed}
    ${colorWhite}
    ${textAlignCenter}
    width: 370px;
    font-size: 16px;
    line-height: 21px;
    margin-bottom: 10px;
`;
export const WhitePlateStyles = css`
    padding: 10px 35px;
    font-size: 16px;
    font-weight: 900;
`;
export const ButtonStyles = css`
    margin: 30px 0 0;
`;
