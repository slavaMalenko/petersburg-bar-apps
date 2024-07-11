import { textStyles } from '@petersburg-bar/common-ui';
import { Link } from 'react-router-dom';
import styled, { css } from 'styled-components';

import logo from './img/logo.png';

import type { StyledProps } from 'styled-components';

const { colorWhite, fontFamilySofiaSansSemiCondensed } = textStyles;

export const Header = styled.header`
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-top: 20px;

    font-style: normal;
    font-weight: 600;
    font-size: 14px;
    line-height: 150%;
    ${fontFamilySofiaSansSemiCondensed}
    ${colorWhite}
`;
export const Logo = styled.div`
    width: 160px;
    height: 40px;
    background: url(${logo as string}) no-repeat 50%;
    background-size: 100%;
`;

export const ButtonCss = css`
    font-size: 15px;
`;

type NavigationProps = StyledProps<{
    $isActiveLink: boolean;
}>;

export const NavigationItem = styled(Link)<NavigationProps>`
    padding: 0 10px;
    font-style: normal;
    font-weight: 600;
    font-size: 17px;
    line-height: 150%;
    text-decoration: none;
    transition: all 0.3s;
    color: #fff;
    &:hover {
        color: rgb(213, 98, 29);
    }
    ${({ $isActiveLink }) => ($isActiveLink ? 'color: rgb(213, 98, 29)' : '')}
`;

export const Navigation = styled.div`
    display: flex;
    align-items: center;
`;
