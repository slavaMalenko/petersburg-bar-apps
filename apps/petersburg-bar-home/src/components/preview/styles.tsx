import { flexStyles, textStyles } from '@petersburg-bar/common-ui';
import { motion } from 'framer-motion';
import styled, { css } from 'styled-components';

import photo_preview from './img/photo_preview.png';

const { displayFlex, justifySpaceBetween } = flexStyles;
const { colorWhite, fontFamilySofiaSansSemiCondensed, textTransformUppercase } = textStyles;

export const PreviewContent = styled(motion.section)`
    ${displayFlex}
    ${justifySpaceBetween}
`;

export const PreviewImg = styled.div`
    position: relative;
    box-shadow: 0px 0px 10px rgb(45, 19, 13);
    margin-top: 40px;
    width: 65%;
    height: 500px;
    background: url(${photo_preview}) no-repeat 50%;
    background-size: 100%;
`;

export const WhitePlateStyles = css`
    width: 150px;
    position: absolute;
    top: 300px;
    left: 60px;
    opacity: 0.6;

    &:hover {
        transform: scale(1.03);
        opacity: 1;
    }
`;

export const PreviewShortTag = styled(motion.section)`
    position: absolute;
    top: 360px;
    left: 60px;
    width: 400px;

    ${textTransformUppercase}
    font-size: 50px;
    font-weight: 700;
    ${fontFamilySofiaSansSemiCondensed}
    ${colorWhite}
`;
