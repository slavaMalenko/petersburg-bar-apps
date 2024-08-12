import { commonStyles, flexStyles, textStyles } from '@petersburg-bar/common';
import { motion } from 'framer-motion';
import styled, { keyframes } from 'styled-components';

const { displayFlex, flexDirectionColumn, alignItemsCenter, justifyCenter } = flexStyles;
const { colorWhite, fontFamilySofiaSansSemiCondensed, textAlignCenter, textTransformUppercase } = textStyles;

export const PreviewConcerts = styled.div`
    flex-wrap: wrap;
    overflow: hidden;
    ${displayFlex}
`;

export const Preview = styled.div`
    width: 50%;
    ${textStyles.textAlignCenter}
    ${displayFlex}
    ${alignItemsCenter}
    ${justifyCenter}
`;

export const FadeInAnimation = keyframes`
  from { opacity: 0; }
  to { opacity: 1; }
`;

export const PreviewImg = styled(motion.img)`
    width: 170px;
    height: 200px;
    transition: all 0.2s linear;
    border-radius: 30px;
    opacity: 0;
    animation: ${FadeInAnimation} 1s forwards;
    ${commonStyles.pointer}
`;

export const ConcertsContainer = styled.div`
    width: 32%;
    box-shadow: 0px 0px 10px rgb(45, 19, 13);
    margin-top: 40px;
    ${displayFlex}
    ${flexDirectionColumn}
`;

export const ConcertsBlock = styled.div`
    background: rgba(213, 98, 29, 0.1);
    border-radius: 0 0 5px 5px;
    height: 100%;
    padding: 10px;
    ${displayFlex}
`;

export const ConcertsNavigate = styled.div`
    ${displayFlex}
`;

export const ConcertsNavigateItem = styled.div<{
    $isActiveLink: boolean;
}>`
    ${textTransformUppercase}
    font-weight: 700;
    width: 50%;
    padding: 15px 0;
    background: #2d130d;
    border-radius: 5px 5px 0px 0px;
    transition: all 0.2s linear;
    ${({ $isActiveLink }) => ($isActiveLink ? 'background: rgba(213, 98, 29, 0.1);' : '')}
    ${fontFamilySofiaSansSemiCondensed}
    ${commonStyles.pointer}
    ${colorWhite}
    ${textAlignCenter}
`;
