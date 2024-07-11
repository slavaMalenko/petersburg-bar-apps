import { forwardRef } from 'react';

import { motion } from 'framer-motion';
import styled from 'styled-components';

import { commonStyles as additionalStyles, textStyles } from './common-styles';

import type { TCommonStyles } from './common-types';
import type { StyledProps } from 'styled-components';

const { colorWhite, textTransformUppercase, fontFamilySofiaSansSemiCondensed, textAlignCenter } = textStyles;

type TTitleStyles = StyledProps<{
    $commonStyles?: TCommonStyles;
}>;

const STitle = styled(motion.h1)<TTitleStyles>`
    letter-spacing: 3px;
    font-size: 45px;
    font-weight: 900;
    margin-top: 20px;
    margin-bottom: 20px;
    ${additionalStyles.selectNone}
    ${textAlignCenter}
    ${fontFamilySofiaSansSemiCondensed}
    ${textTransformUppercase}
    ${colorWhite}
    ${({ $commonStyles }) => ($commonStyles ? $commonStyles : '')}
`;

interface ITitle {
    text: string;
    $commonStyles?: TCommonStyles;
}

const Title = forwardRef<HTMLDivElement, ITitle>(({ text, $commonStyles }, ref) => (
    <STitle ref={ref} $commonStyles={$commonStyles}>
        {text}
    </STitle>
));

export { Title };
export const MTitle = motion(Title);
