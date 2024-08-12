import type { MouseEventHandler } from 'react';
import { forwardRef } from 'react';

import { motion } from 'framer-motion';
import styled from 'styled-components';

import { textStyles, flexStyles, commonStyles } from './common-styles';

import type { TCommonStyles } from './common-types';
import type { StyledProps } from 'styled-components';

const { displayFlex, justifyCenter } = flexStyles;
const { selectNone, pointer } = commonStyles;
const { colorWhite, textTransformUppercase, fontFamilySofiaSansSemiCondensed, textAlignCenter } = textStyles;

const Container = styled.div`
    ${displayFlex}
    ${justifyCenter}
`;

const ButtonHover = styled.div`
    background: #ff6200;
    top: 0;
    left: -405px;
    width: 400px;
    height: 50px;
    position: absolute;
    transition: all 0.3s linear;
    z-index: 1;
`;

type TButtonStyles = StyledProps<{
    $commonStyles?: TCommonStyles;
    $verticalMargin?: number;
    $marginBottom?: number;
    $isFilling?: boolean;
    $hoverRight?: boolean;
}>;

const StyledButton = styled(motion.div)<TButtonStyles>`
    ${fontFamilySofiaSansSemiCondensed}
    ${selectNone}
    ${textTransformUppercase}
    ${colorWhite}
    ${pointer}
    ${textAlignCenter}
    position: relative;
    border: 2px solid #d5621d;
    border-radius: 5px;

    padding: 10px 30px;
    max-width: 150px;
    max-height: 50px;
    font-weight: 700;
    font-size: 20px;
    transition: all 0.2s linear;
    overflow: hidden;

    &:hover {
        background: ${({ $isFilling }) => ($isFilling ? '#ff6200' : 'rgb(213, 98, 29)')};
    }

    ${({ $hoverRight }) => ($hoverRight ? `&:hover ${ButtonHover} { left: 0; }` : '')}
    ${({ $isFilling, $hoverRight }) => ($isFilling && !$hoverRight ? 'background: rgb(213, 98, 29);' : '')}
    ${({ $verticalMargin }) => ($verticalMargin ? `margin: ${$verticalMargin}px 0;` : '')}
    ${({ $marginBottom }) => ($marginBottom ? `margin-bottom: ${$marginBottom}px;` : '')}
    ${({ $commonStyles }) => ($commonStyles ? $commonStyles : '')}
`;
const ButtonText = styled.div`
    position: relative;
    z-index: 2;
`;

interface IButton {
    text: string;
    $commonStyles?: TCommonStyles;
    center?: boolean;
    $verticalMargin?: number;
    $marginBottom?: number;
    $isFilling?: boolean;
    $hoverRight?: boolean;
    onClick?: MouseEventHandler<HTMLDivElement>;
}

const Button = forwardRef<HTMLDivElement, IButton>(
    (
        {
            text,
            $commonStyles,
            $verticalMargin,
            $marginBottom,
            onClick,
            $isFilling = true,
            center = false,
            $hoverRight = false,
        },
        ref,
    ) =>
        center ? (
            <Container>
                <StyledButton
                    ref={ref}
                    $commonStyles={$commonStyles}
                    $hoverRight={$hoverRight}
                    $isFilling={$isFilling}
                    $marginBottom={$marginBottom}
                    $verticalMargin={$verticalMargin}
                    onClick={(e) => onClick && onClick(e)}
                >
                    <ButtonText>{text}</ButtonText>
                    <ButtonHover />
                </StyledButton>
            </Container>
        ) : (
            <StyledButton
                ref={ref}
                $commonStyles={$commonStyles}
                $hoverRight={$hoverRight}
                $isFilling={$isFilling}
                $marginBottom={$marginBottom}
                $verticalMargin={$verticalMargin}
                onClick={(e) => onClick && onClick(e)}
            >
                <ButtonText>{text}</ButtonText>
                <ButtonHover />
            </StyledButton>
        ),
);

export { Button };
export const MButton = motion(Button);
