import { forwardRef } from 'react';

import { motion } from 'framer-motion';
import styled from 'styled-components';

import { commonStyles as additionalStyles, textStyles } from './common-styles';

import type { TCommonStyles } from './common-types';
import type { StyledProps } from 'styled-components';

const { colorWhite, textTransformUppercase, fontFamilySofiaSansSemiCondensed, textAlignCenter } = textStyles;

type TTitleStyles = StyledProps<{
    $commonStyles?: TCommonStyles;
    isColorWhite?: boolean;
}>;

const STitle = styled(motion.h1)<TTitleStyles>`
    letter-spacing: 3px;
    font-size: 45px;
    font-weight: 900;
    margin-top: 20px;
    margin-bottom: 20px;
    ${additionalStyles.selectNone};
    ${textAlignCenter};
    ${fontFamilySofiaSansSemiCondensed};
    ${textTransformUppercase};
    ${({ $commonStyles }) => ($commonStyles ? $commonStyles : '')};
    ${({ isColorWhite = true }) => (isColorWhite ? colorWhite : '')};
`;

interface ITitle {
    text: string;
    $commonStyles?: TCommonStyles;
    isColorWhite?: boolean;
}

const Title = forwardRef<HTMLDivElement, ITitle>(({ text, $commonStyles, isColorWhite }, ref) => (
    <STitle ref={ref} $commonStyles={$commonStyles} isColorWhite={isColorWhite}>
        {text}
    </STitle>
));

export { Title };
export const MTitle = motion(Title);
